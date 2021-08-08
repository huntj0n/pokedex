//---PACKAGES---
require('dotenv').config;
const express = require('express');
const massive = require('massive');

//---CONTROLLERS---
const pokeCtrl = require('./pokemonControllers');
const authCtrl = require('./authControllers');

const { SERVER_PORT, CONNECTION_STRING } = procces.env;

//---MIDDLEWARE---
const app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((db) => {
    app.set('db', db)
    console.log('Pokebase Connected')
    app.listen(SERVER_PORT, () => console.log(`Catching them all on port: ${SERVER_PORT}`))
}).catch((err) => {
    console.log(err);
    res.status(500).send(err)
})

//---ENDPOINTS---

//pokeTeam endpoints
app.get()
app.post()
app.put()
app.delete()

//user endpoints
app.get()
app.post()
app.put()
app.delete()