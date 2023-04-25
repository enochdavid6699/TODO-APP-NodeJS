const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    dueDate:{
        type: Date
    },
    check:{
        type: Boolean,
    }
});

const Todo = mongoose.model('Todo' , todoSchema);

module.exports = Todo;