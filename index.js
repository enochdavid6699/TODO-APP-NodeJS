const express = require('express');
const db = require('./config/mongoose');
const app = express();
const port = 8000;

const Todo = require('./models/todo');

//Use Express Router
app.use('/' , require('./routes/index'));

app.set('view engine' , 'ejs'); 
app.set('views' , './views');

app.use(express.static('assets'));

app.listen(port , function(err){

    if(err){
        console.log(`Error: ${err}`);
        return;
    }

    console.log(`Server is up and running on Port: ${port}`);
});