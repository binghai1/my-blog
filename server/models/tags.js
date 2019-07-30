const mongoose =require('mongoose') 
const { Schema, model } = mongoose;
const TagsSchema=new Schema({
    __v: { type: Number, select: false },
    title:{type:String,required:true},
    creator:{type:Schema.Types.ObjectId,ref:'Users',required:true}
},{ timestamps: true })

module.exports= model('Tags',TagsSchema)