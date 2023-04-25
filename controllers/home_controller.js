const Todo = require("../models/todo");


module.exports.home = function( req , res ){
    
    return res.render('home' , {
        title: "TODO APP",
    });
}