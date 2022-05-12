const express = require('express');
const DataBaseServices = require('../services/DataBaseServices');

const router = express.Router();

router.get('/',async (req,res) => {
    const data = await DataBaseServices.getItems('snacks');
    res.json(data);
});

module.exports = router;