
const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {secret} =require('../config')
const SuccessModel = require('../util/succesModel')
class UserController{
    async create(ctx){
        const {email,password}=ctx.request.body
        ctx.verifyParams({
        email:{type:'string',required:true},
        username:{type:'string',required:true},
        password:{type:'string',required:true},
        })
        const isExit=await User.findOne({email})
    
        if(isExit){
            ctx.throw(404,"用户已存在")
        }
        const salt= await bcrypt.genSalt(10);
        const bcryptPwd=await bcrypt.hash(password, salt);
        const data={...ctx.request.body,password:bcryptPwd}
        let res=await new User(data).save()
        if(!res){  ctx.throw(404,"用户创建失败")}
        ctx.body=SuccessModel()
    }
    async login(ctx){
        const {email,password}=ctx.request.body
        ctx.verifyParams({
          email:{type:'string',required:true},
          password:{type:'string',required:true},
        })
        let user=await User.findOne({email})
        if(!user){ctx.throw(404,"用户名不存在")}
        const res=await bcrypt.compare(password, user.password)
        if(!res){ctx.throw(404,"用户名或密码错误")}
        const {_id,username}=user
        const token=jwt.sign( {_id,username} , secret, { expiresIn: 60 * 60 });
        ctx.body=SuccessModel({token})
        }
}
module.exports=new UserController()
