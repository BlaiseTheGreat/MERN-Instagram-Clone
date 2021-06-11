const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const { MONGOURI } = require("./keys");

require('./models/user');

mongoose.connect(MONGOURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false 
})

mongoose.connection.on('connected', () => {
    console.log("connected to mongoDB");
})

mongoose.connection.on('error', (e) => {
    console.log("error with mongoDB...", e);
})




app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});


