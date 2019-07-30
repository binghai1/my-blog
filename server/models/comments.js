const mongoose =require('mongoose') 
const { Schema, model } = mongoose;
const CommentSchema=new Schema({
    __v: { type: Number, select: false },
    content:{type:String,required:true},
    commentor:{type:Schema.Types.ObjectId,ref:'Users',required:true},
    articleId:{type:Schema.Types.ObjectId,ref:'Articles',required:true},
    like:Number,
    rootCommentId:{type:String},
    //无奈加个属性,
    // childComments:[],
    replyTo:{type:Schema.Types.ObjectId,ref:'Users'}
},{ timestamps: true})

module.exports= model('Comments',CommentSchema)