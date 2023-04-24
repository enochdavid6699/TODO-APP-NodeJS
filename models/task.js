const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
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

const Task = mongoose.model('Task' , taskSchema);

module.exports = Task;