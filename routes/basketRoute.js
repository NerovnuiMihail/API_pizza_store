const express = require('express');
const DataBaseServices = require('../services/DataBaseServices');

const router = express.Router();

router.post('/', (req,res) => {
    const data = req.body;
    const popular = data.currentBasket;
    const cost = data.happyBuyer.totalCost;

    console.log(data);

    DataBaseServices.addMostPopular(popular, cost);
    DataBaseServices.createNewOrder(data);
    
    res.status(200);
    res.json(data);
});

module.exports = router;