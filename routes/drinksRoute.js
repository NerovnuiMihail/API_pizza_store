const express = require('express');
const DataBaseServices = require('../services/DataBaseServices');

const router = express.Router();

router.get('/',async (req,res) => {
    const data = await DataBaseServices.getItems('drinks');
    res.json(data);
});

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    const data = await DataBaseServices.getItemById('drinks', id);
    res.json(data);
});

module.exports = router;