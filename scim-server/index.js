const express = require('express');
const app = express();
const port = 3000;
const data = require('./data.json')

app.get('/scim/v2/Users', (req, res) => {
    res.json(data);
});

app.get('/scim/v2/Users/:id', (req, res) => {
    res.json(data.Resources.find(user => user.id === req.params.id));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
