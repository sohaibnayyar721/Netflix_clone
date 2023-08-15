const nodemailer = require('nodemailer')
const otp = require('../models/otp')
const user_collection = require('../models/user_schema')
let emailsend = async (code) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: "465",
      secure: true,
      // service: "gmail",
      auth: {
        user: "sohaibsobbi.444@gmail.com",
        pass: "orugnggqlubezwma"
      }
    })
  
    const mailoption = {
      from: "sohaibsobbi.444@gmail.com",
      to: "sohaibnayyar.721@gmail.com",
      subject: "login info",
      text: `Your code is ${code}`
    }
  
    transporter.sendMail(mailoption, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log('email sent ', info.response)
      }
    })
  }
const forgot_pass = async(req, res) => {
    const { email } = req.body
    try{
      const data = await user_collection.findOne({ email: req.body.email })
      if (data) {
          let code = Math.floor((Math.random() * 900000))
          let otps = new otp({ email: email, code: code, expirein: new Date().getTime() + 3 * 60 * 1000 })
          let save = await otps.save()
          res.send('Code is send to your email')
          // emailsend(code)
          console.log(data)
      } else {
          res.send('Account is not present')
      }
    }catch(err){
      res.status(404).json({message:"error"})
    }

}

module.exports=forgot_pass

