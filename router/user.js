const express = require('express');
const userHandler = require('../router_handler/user');
const router = express.Router();





router.post('/reguser', userHandler.reguser);

router.post('/login', userHandler.login);



module.exports = router;