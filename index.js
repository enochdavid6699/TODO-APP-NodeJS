//Acquire Express Server
const express = require('express');
const port = 8000;

const db = require('./config/mongoose');

const app = express();
const path = require('path');

// const Todo = require('./models/todo');

app.use(express.urlencoded()); //This particular line is giving error

app.use(express.static('assets'));

app.set('view engine' , 'ejs'); 
app.set('views' , './views');

app.use('/' , require('./routes/index'));

app.listen(port , function(err){

    if(err){
        console.log(`Error: ${err}`);
        return;
    }

    console.log(`Server is up and running on Port: ${port}`);
});