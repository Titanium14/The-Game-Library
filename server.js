const express = require('express');
const bodyParser = require('body-parser');

const games = require('./routes/api/games');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api/games', games);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
