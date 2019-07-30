
const Articles = require('../models/articles')
const SuccessModel = require('../util/succesModel')
class ArticlesController{
    async create(ctx){
        ctx.verifyParams({
        title:{type:'string',required:true},
        content:{type:'string',required:true},
        tags:{type:'array',itemType:'string',required:true},
        })
        const owner=ctx.state.user._id
        let res=await new Articles({...ctx.request.body,owner}).save()
        if(!res) ctx.trhow(404,"创建文章失败")
        ctx.body=SuccessModel()
    }
    async find(ctx){
        let {q,page=1,perPage=5}=ctx.query
        perPage=Math.max(perPage,1)
        page=Math.max((page-1)*perPage,1)
        q=RegExp(q)
        const data=await Articles
        .find({$or:[{title:q},{cotent:q}]})
        .limit(perPage)
        .skip(page)
        if(!data) ctx.trhow(404,"查询出错")
        ctx.body=SuccessModel(data)
    }
    async findById(ctx){
        const {id}=ctx.params
        const data=await Articles.findById(id)
        if(!data) ctx.trhow(404,"查询出错")
        ctx.body=SuccessModel(data)
    }
   
    async update(ctx){
        const {title,content,tags}=ctx.request.body
        const {id}=ctx.params
        ctx.verifyParams({
            title:{type:'string',uerequired:true},
            content:{type:'string',required:true},
            tags:{type: 'array', itemType: 'string' ,required:true}
        })
        let res=await Articles.findByIdAndUpdate(id,
           {title,content,tags},{new:true})
        if(!res) ctx.trhow(404,"更新文章失败")
        ctx.body=SuccessModel()

    }
    async remove(ctx){
        const {id}=ctx.params
        let res=await Articles.findByIdAndRemove(id)
        if(!res) ctx.trhow(404,"删除文章失败")
        console.log(res)
        ctx.body=SuccessModel()
    }
    async checkArticlesExist(ctx, next) {
        const articles = await Articles.findById(ctx.params.id);
        if (!articles) { ctx.throw(404, '文章不存在'); }
        ctx.state.articles = articles;
        await next();
      }
    async checkPermission(ctx,next){
        if(ctx.state.articles.owner!=ctx.state.user._id){
            ctx.throw(404, '没有此文章权限');
        }
        await next()
    }
    
}
module.exports=new ArticlesController()
