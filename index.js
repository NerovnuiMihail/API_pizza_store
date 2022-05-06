const express = require("express");
const {pizza,dessert,drinks,snacks} = require('./routes');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/pizza', pizza);
app.use('/api/dessert', dessert);
app.use('/api/drinks', drinks);
app.use('/api/snacks', snacks);


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
})