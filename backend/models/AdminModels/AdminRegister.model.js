const mongoose=require('mongoose')

const registerSchema=mongoose.Schema({
    name:String,
    mobile:{
        type:Number,
        min:10,
        max:10
    },
    email:String,
    pass:String,
    gender:String,
    admin:String,
},{
    versionKey:false
})
const RegisterModel=mongoose.model('adminregister',registerSchema)

module.exports=RegisterModel;
