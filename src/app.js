const express = require('express');
const app = express();
const port = 3000;

const controller = require('./controller');

app.use(express.json());

//Routes
app.get('/api/items', controller.getItems);
app.post('/api/items', controller.createItem);
app.put('/api/items/:id', controller.updateItem); //Update Route
app.delete('/api/items/.id', controller.deleteItem); //Delete Route

//Start the server
app.listen(port, ()=> {
    console.log('API is running on http://localhost: ${port}');
});

module.exports = app;