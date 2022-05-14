const fs = require('fs');
const {join} = require('path');

class DataBaseServices {

    static async getItems(dbName) {
        return new Promise((res,rej) => {
            fs.readFile(join(__dirname, '..', 'data', `${dbName}.json`), 'utf-8', (err, data) => {
                if (err) {
                    rej(err);
                }
                res(JSON.parse(data));
            });
        });
    }

    static async getItemById(dbName, ItemId) {
        const allItems = await this.getItems(dbName);
        return allItems[dbName].filter(item => item.id === +ItemId);
    }

    static async createNewOrder(data) {
        const oldData = await this.getItems("allOrders");
        oldData.allOrders.push(data);

        try {
            fs.writeFile(join(__dirname, '..', 'data', 'allOrders.json'), JSON.stringify(oldData), () => {});
        } catch (error) {
            console.log('Ошибка записи в файл - allOrders.json');
        }
    }

    static async addMostPopular(data, cost) {
        const oldData = await this.getItems("mostPopular");
        data.forEach(item => oldData.allOrders.push(item));
        oldData.incomeNow = oldData.incomeNow + cost;

        try {
            fs.writeFile(join(__dirname, '..', 'data', 'mostPopular.json'), JSON.stringify(oldData), () => {});
        } catch (error) {
            console.log('Ошибка записи в файл - mostPopular.json');
        }
    }

    static async filterMostPopularCategory(title) {
        const oldData = await this.getItems("mostPopular");

        const searchData = oldData.allOrders.filter(item => item.title === title);
        const response = searchData.sort((b, a) => (+a.count) - (+b.count));

        return response.slice(0,4);
    }
}

module.exports = DataBaseServices;