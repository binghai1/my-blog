const mongoose =require('mongoose') 
const { Schema, model } = mongoose;
const UserSchema=new Schema({
    __v: { type: Number, select: false },
    email:{type:String,required:true,select:false},
    username:{type:String,required:true},
    password:{type:String,required:true,select:false},
    role:{type:String,enum:["普通用户","管理员"],default:"普通用户"}
},{ timestamps: true })

module.exports= model('Users',UserSchema)