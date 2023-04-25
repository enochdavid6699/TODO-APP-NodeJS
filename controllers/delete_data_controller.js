//  delete data controller

const Todo = require('../models/todo')
module.exports.home_delete = async function(req,res){

    try {
        for(let id in req.body.ids){
            let deletedTodo = await Todo.findByIdAndDelete( req.body.ids[id] , function (deletedTodo) {});
        }    
        return res.redirect('/');
    } catch (error) {
        console.log(error);
    }
    
  
}    

 // console.log(`This is the id received to delete: ${req.body}`)

    // for(let id in req.body.ids){
    //     Todo
    //     console.log(req.body.ids[id]);
    // }