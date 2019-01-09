const express = require('express');
const igdb = require('igdb-api-node').default;
const router = express.Router();

const client = igdb('c3e620117cdf3872d5a6cca1c4535bcc');

client.games({
    fields: '*', // Return all fields
    limit: 5, // Limit to 5 results
    offset: 15 // Index offset for results
}).then(response => {
    console.log(response.url, JSON.stringify(response.body, null, 2));
}).catch(error => {
    throw error;
});

module.exports = router;
