module.exports.home = function( req , res ){
    
    Task.find({} , function(err , tasks){
        if(err){
            console.log('Error in fetching the contacts');
            return;
        }

        return res.render('home' , {
            title: "TODO APP",
            task_list: tasks
        });
    });
}