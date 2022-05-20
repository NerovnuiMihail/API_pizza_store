const express = require("express");
const {
    pizza,
    dessert,
    drinks,
    snacks,
    bonus,
    extra,
    basket,
    popular,
    combos
} = require('./routes');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api/pizza', pizza);
app.use('/api/dessert', dessert);
app.use('/api/drinks', drinks);
app.use('/api/snacks', snacks);
app.use('/api/bonus', bonus);
app.use('/api/extra', extra);
app.use('/api/basket', basket);
app.use('/api/popular', popular);
app.use('/api/combos', combos);


const PORT = 3001;
app.listen(PORT, () => {
    const message = `
        Server started: http://localhost:${PORT}

    All works (GET) API:
        http://localhost:${PORT}/api/pizza
        http://localhost:${PORT}/api/dessert
        http://localhost:${PORT}/api/drinks
        http://localhost:${PORT}/api/snacks
        http://localhost:${PORT}/api/bonus
        http://localhost:${PORT}/api/extra
        http://localhost:${PORT}/api/popular
        http://localhost:${PORT}/api/combos
    `;

    console.log(message);
})