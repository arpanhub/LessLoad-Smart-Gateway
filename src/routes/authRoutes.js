import express from 'express';
import registerController  from '../controller/registerController.js';
import loginController from '../controller/loginController.js';
import generateAPIKey from '../controller/generateAPIKey.js';

const router = express.Router();
console.log('in the auth route');

router.post('/register',registerController)//register business
router.post('/login',loginController)//login business
router.post('/getAPI',generateAPIKey)//getAPIkey for business
export default router; 