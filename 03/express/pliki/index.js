const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const { Pool } = require("pg");
const pool = new Pool({
    database: "postgres",
    user: "postgres",
    password: "postgres",
    host: "db_6_03",
    port: 5432,
});

app.listen(3000, "0.0.0.0", () => {
    console.log("App listening at 3000");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.send("Express App");
});

app.get('/cars', async (req, res) => {
    const result = await pool.query('SELECT * FROM Car');
    res.send(result.rows);
});

app.post('/addCar', (req, res) => {
    const {model, year, details} = req.body;
    pool.query("INSERT INTO Car (model, year, details) VALUES ($1, $2, $3) RETURNING *", [model, year, details], (err, results) => {
        if (err) throw err;
        res.send(`${results.rows[0].id}`);
    });
});

