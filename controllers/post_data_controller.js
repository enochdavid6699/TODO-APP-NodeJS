//   post data controller 

const Todo=require('../models/todo');

module.exports.home_post= async function(req,res){

    try {
        console.log(`This is the request.body ${req.body}`);
        let newTodo = await Todo.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    });
        console.log('*************', newTodo);
        return res.redirect('/');
    } catch (error) {
        console.log("Error in creating Contact!");
            return;
    }
    
};

 