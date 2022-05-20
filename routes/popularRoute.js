const express = require('express');
const DataBaseServices = require('../services/DataBaseServices');

const router = express.Router();

router.get('/income',async (req,res) => {
    const [prevIncome, incomeNow] = await DataBaseServices.getIncome();

    res.json({prevIncome: prevIncome, incomeNow: incomeNow});
});

router.get('/:title',async (req,res) => {
    const title = req.params.title;
    const data = await DataBaseServices.filterMostPopularCategory(title);
    res.json(data);
});

module.exports = router;