const Todo = require("../models/todo");

module.exports.home = async function(req , res){
    //Fetching using mongoose
    try {
        let todos = await Todo.find({});
            return res.render('home' , {
                title: "TODO APP",
                todo_lists: todos
            })     
    } catch (error) {
        console.log('error in fetching data');
        return;
    }
    
}


// module.exports.home = function (req, res) {
//     Todo.find({}).then((todo) => {
//       return res
//         .render("home", {
//           title: "TODO APP",
//           to_do: todo,
//         }).catch((e) => {
//           console.log(e);
//           return res.redirect("/");
//         });
//     });
// };