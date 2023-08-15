const express = require('express')
const {login,homescreen_auth} = require('../Controllers/login')
const forgot_pass = require('../Controllers/Forgot_pass')
const verify_code=require('../Controllers/verify_code')
const change_pass=require('../Controllers/change_pass')
const register= require('../Controllers/register')
const router = express.Router()

router.post('/login',login)
router.post('/forgot_pass',forgot_pass)
router.post('/verify_code',verify_code)
router.put('/change_pass',change_pass)
router.post('/homescreen',homescreen_auth)
router.post('/register',register)


module.exports = router