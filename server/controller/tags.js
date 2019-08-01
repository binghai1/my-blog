
const Tags = require('../models/tags')
const Articles = require('../models/articles')
const SuccessModel = require('../util/succesModel')
class TagsController{
    async create(ctx){
        ctx.verifyParams({
        title:{type:'string',required:true},
        })
        const {title}=ctx.request.body
        const creator=ctx.state.user._id
        let res=await new Tags({creator,title}).save()
        if(!res) ctx.trhow(404,"创建标签失败")
        ctx.body=SuccessModel(res)
    }
    async find(ctx){
        const data=await Tags.find()
        if(!data) ctx.trhow(404,"查询出错")
        ctx.body=SuccessModel(data)
    }
    async findById(ctx){
        const {id}=ctx.params
        const data=await Articles.find({tags:id})
        if(!data) ctx.trhow(404,"查询出错")
        ctx.body=SuccessModel(data)
    }
   
    async remove(ctx){
        const {id}=ctx.params
        let res=await Tags.findByIdAndRemove(id)
        if(!res) ctx.trhow(404,"删除标签失败")
        console.log(res)
        ctx.body=SuccessModel()
    }
    async checkTagsExist(ctx, next) {
        const tags = await Tags.findById(ctx.params.id);
        if (!tags) { ctx.throw(404, '标签不存在'); }
        ctx.state.tags = tags;
        await next();
      }
    async checkPermission(ctx,next){
        if(ctx.state.tags.creator!=ctx.state.user._id){
            ctx.throw(404, '没有此标签权限');
        }
        await next()
    }
    
}
module.exports=new TagsController()
