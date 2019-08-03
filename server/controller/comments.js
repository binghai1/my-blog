
const Comments = require('../models/comments')

const SuccessModel = require('../util/succesModel')
class CommentsController{
    async create(ctx){
        ctx.verifyParams({
            content:{type:'string',required:true},
            rootCommentId:{type:'string',required:false},
            replyTo:{type:'string',required:false},
            articleId:{type:'string',require:true}
        })
        const {content,rootCommentId,replyTo,articleId}=ctx.request.body
        const commentor=ctx.state.user._id
        let data=await new Comments({
            commentor,rootCommentId,replyTo,content,articleId
        }).save()
        if(!data) ctx.trhow(404,"创建评论失败")
        ctx.body=SuccessModel(data)
    }
    async find(ctx){
        const {articleId}=ctx.params
        let {page=0,perPage=5}=ctx.query
        perPage=Math.max(perPage,1)
        page=Math.max((page-1)*perPage,0)
        let data=await Comments.find({articleId,rootCommentId:null}).sort({_id:-1})
        .limit(perPage).skip(page).populate("replyTo commentor")
        if(!data) ctx.trhow(404,"查询出错")
        for (let item of data){
            let res= await CommentsController.findRootComment(item._id)
            //mongoose不能直接修改shema，通过_doc映射数据
            if(res) item._doc.childComments=res
        }

        ctx.body=SuccessModel(data)
    }
    static async findRootComment(rootCommentId){
        let res= await Comments.find(
            {rootCommentId}).sort({_id:-1}).limit(10).skip(0).populate("commentor")
        return res
    }
   
    async remove(ctx){
        const {id}=ctx.params
        let data=await Comments.findByIdAndRemove(id)
        if(!data) ctx.throw(404,"删除评论失败")
        ctx.body=SuccessModel(data)
    }
    async removeAll(ctx){
        const {id}=ctx.params
        let flag=await Comments.findOneAndDelete({rootCommentId:id})
        let data=await Comments.findByIdAndRemove(id)
        if(!data) ctx.throw(404,"删除评论失败")
        ctx.body=SuccessModel(data)
    }
    async checkCommentExist(ctx, next) {
        const comments= await Comments.findById(ctx.params.id);
        if (!comments) { ctx.throw(404, '评论不存在'); }
        ctx.state.comments = comments;
        await next();
      }
    async checkPermission(ctx,next){
        if(ctx.state.comments.commentor!=ctx.state.user._id){
            ctx.throw(404, '没有此评论权限');
        }
        await next()
    }
    
}
module.exports=new CommentsController()
