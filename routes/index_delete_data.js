//  route for deletion


const express=require('express');
const router=express.Router();
const delete_data_controller=require('../controllers/delete_data_controller');



router.post('/delete-todo', delete_data_controller.home_delete);

module.exports=router;