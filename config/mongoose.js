const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://enochdavid6699:Xxye6USr4Ut2Fqf0@cluster0.ngb2u1j.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb://127.0.0.1:27017/tododb');

const db = mongoose.connection;

db.on('error' , console.error.bind( console , 'error in connecting to db' ));

db.once('open' , function(){
    console.log('Successfully connected to the Data Base');
});

module.exports=db;