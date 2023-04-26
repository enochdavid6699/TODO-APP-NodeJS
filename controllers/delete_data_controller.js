//  delete data controller

const Todo = require('../models/todo');

module.exports.home_delete = async function(req, res) {
  try {
    let ids = req.body.ids; // get the array of ids from the request body
    if (!Array.isArray(ids)) {
      ids = [ids]; // convert to an array if it's not already one
    }
    for (let id of ids) {
      await Todo.findByIdAndDelete(id);
    }
    return res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};


 

 // console.log(`This is the id received to delete: ${req.body}`)

    // for(let id in req.body.ids){
    //     Todo
    //     console.log(req.body.ids[id]);
    // }