const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const { MONGOURI } = require("./keys");





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


require('./models/user');
require('./models/post');

app.use(express.json()); // this line MUST be before require routes so all routes use this
app.use(require('./routes/auth'));
app.use(require('./routes/post'));




app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});


