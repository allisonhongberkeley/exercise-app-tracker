const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

const uri = process.env.URI;
mongoose.connect(uri);

const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("database connection established"); 
});

const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

// when someone goes to our root url and puts /exercises at the end, it will load everything in exerciseRouter
app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);


app.listen(port, () => {
    console.log('Server is running on port ' + port); 
});


