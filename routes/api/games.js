const express = require('express');
const igdb = require('igdb-api-node').default;
const router = express.Router();

const cors = require('cors');
const app = express();

const client = igdb('0c2d0e413f87f647cda03ee9eb59e8b1');

app.use(cors());

// client.games({
//     fields: '*', // Return all fields
//     limit: 5, // Limit to 5 results
//     offset: 15 // Index offset for results
// }).then(response => {
//     console.log(response.url, JSON.stringify(response.body, null, 2));
// }).catch(error => {
//     throw error;
// });

module.exports = router;
