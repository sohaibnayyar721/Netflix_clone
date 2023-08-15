const otp = require('../models/otp')
const verify_code = async(req,res)=>{
    let { email, code } = req.body
  console.log(email)
  console.log(code)
try{
  let data = await otp.findOne({ email: email, code: code })
  if (data) {

    let current_time= new Date().getTime()
    let check = data.expirein-current_time
    console.log(data)
    if(check<0){
      
      res.send("Passcode expires")
    }else{
      res.send('Code is correct')
    }
  } else {
    res.send('Wrong Code')
  }
}catch(err){
  console.log(err)
}
}

module.exports=verify_code