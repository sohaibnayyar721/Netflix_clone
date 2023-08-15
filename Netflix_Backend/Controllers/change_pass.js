const user_collection=require('../models/user_schema')

const change_pass = async(req,res)=>{
try{
  let { email, new_pass } = req.body
  let data = await user_collection.findOne({ email: email})
  console.log(data)
  console.log('this is password',new_pass)
  if (data) {
    let change_pass = await user_collection.findOneAndUpdate({email:email},{password:new_pass})
    res.send('Password Change Successfully')
  } else {
    res.send('Error')
  }
}catch{
  res.status(404).json({message:"error"})
}
}

module.exports=change_pass