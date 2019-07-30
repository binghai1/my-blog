const mongoose =require('mongoose') 
const { Schema, model } = mongoose;
const ArticleSchema=new Schema({
    __v: { type: Number, select: false },
    title:{type:String,required:true},
    content:{type:String,required:true},
    likeCount:Number,
    owner:{type:Schema.Types.ObjectId,ref:'Users'},
    tags:{type:[{type:Schema.Types.ObjectId,ref:'Tags'}],required:true}
},{ timestamps: true })

module.exports= model('Articles',ArticleSchema)