const express = require('express');
const DataBaseServices = require('../services/DataBaseServices');

const router = express.Router();

router.get('/',async (req,res) => {
    const data = await DataBaseServices.getItems('bonus');
    res.header('Access-Control-Allow-Origin', '*');
    res.json(data);
});

module.exports = router;