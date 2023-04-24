const express = require('express');
const router = express.Router();
module.exports=router;

const homeController = require('../controllers/home_controller');
router.get('/' , homeController.home);

//For any further routes access from here
//router.use('/router_name' , require('./router_file'));