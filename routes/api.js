var express = require('express');
var router = express.Router();
const userController = require('../controllers').User;
const applicationController = require('../controllers').Application;


//routesUser
router.get('/api/user', userController.list);
router.get('/api/user/:id', userController.getById);
router.post('/api/user', userController.add);
//router.get('/api/auth', userController.auth);
router.post('/api/auth', userController.auth);
router.put('/api/user/:id', userController.update);
router.delete('/api/user/:id', userController.delete);

//routesApplication
router.get('/api/application', applicationController.list);
router.get('/api/application/:id', applicationController.getById);
router.post('/api/application', applicationController.add);
router.put('/api/application/:id', applicationController.update);
router.delete('/api/application/:id', applicationController.delete);

module.exports = router;