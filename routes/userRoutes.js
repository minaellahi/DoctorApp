const express = require('express')
const { loginController, registerController, authController } = require('../controllers/userCtrl')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

//Login

router.post('/login', loginController)

//REGISTER
router.post('/register', registerController)



//Auth || POST
router.post("/getUserData", authMiddleware, authController);
module.exports = router

