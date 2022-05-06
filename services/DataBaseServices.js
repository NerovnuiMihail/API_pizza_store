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

}

module.exports = DataBaseServices;