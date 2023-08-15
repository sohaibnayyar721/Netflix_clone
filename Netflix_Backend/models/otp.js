const mongoose=require('mongoose')

let schema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    code:{
        type:Number,
        require:true
    },
    expirein:{
        type:Number,
        require:true
    },

//    {
//     timestamps:true,
//     }

})

let otp = mongoose.model('otp',schema)
module.exports = otp