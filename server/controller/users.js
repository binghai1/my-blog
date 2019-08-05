
const User = require('../models/users')
const bcrypt = require('bcryptjs')
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
        let user=await User.findOne({email}).select("+password")
        if(!user){ctx.throw(404,"用户名不存在")}
        const res=await bcrypt.compare(password, user.password)
        if(!res){ctx.throw(404,"用户名或密码错误")}
        const {_id,username,role}=user
        const token=jwt.sign( {_id,username,role} , secret, { expiresIn: 60 * 60 * 24 });
        ctx.body=SuccessModel({token})
        }
    async remove(ctx){
        if(ctx.state.user.role!="管理员"){
            ctx.throw(404, '没有此文章权限');
        }
        const {id}=ctx.params
        let user=await User.findByIdAndDelete(id)
        if(!user){ctx.throw(404,"删除失败")} 
        ctx.body=SuccessModel()
        }
    async find(ctx){
        let {q,page=0,perPage=6}=ctx.query
        perPage=Math.max(perPage,1)
        page=Math.max((page-1)*perPage,0)
        q=new RegExp(q)
        let data=await User.find({username:q}).select("+email").sort({_id:-1})
        .limit(perPage)
        .skip(page)
        if(!data) ctx.throw(404,"查询出错")
        let totalCount = await User.count({username:q})
        ctx.body={
            code:0,
            data,
            totalCount
        }
       }
      

}
module.exports=new UserController()
