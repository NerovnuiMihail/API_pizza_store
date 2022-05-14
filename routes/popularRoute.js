const express = require('express');
const DataBaseServices = require('../services/DataBaseServices');

const router = express.Router();

router.get('/:title',async (req,res) => {
    const title = req.params.title;
    const data = await DataBaseServices.filterMostPopularCategory(title);
    res.json(data);
});

module.exports = router;