let mongoose=require('mongoose')

let schema= new mongoose.Schema({

    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    
})

let user_collection = mongoose.model('registered_users',schema)

module.exports=user_collection