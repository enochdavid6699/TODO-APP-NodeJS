//  route for home

const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');
const deleteController = require('../controllers/delete_data_controller')
const createController = require('../controllers/post_data_controller')


router.get('/',homeController.home);
// router.use('/index_post_data',require('./index_post_data'));
router.use('/create',require('./index_post_data'));
router.use('/delete',require('./index_delete_data'));



module.exports=router;
