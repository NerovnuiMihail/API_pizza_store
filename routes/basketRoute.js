const express = require('express');
const DataBaseServices = require('../services/DataBaseServices');

const router = express.Router();

router.post('/',async (req,res) => {
    console.log(req.body);
    res.status(200);
    res.json(req.body);
});

module.exports = router;