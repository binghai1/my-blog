
const config={}
console.log(process.env.NODE_ENV,"环境变量")
if(process.env.NODE_ENV=='development'){
    config.mongodHost="mongodb://localhost/my-blog"
}else{
    config.mongodHost="mongodb://148.70.186.210/my-blog"

}
console.log(config)
module.exports={
    secret:"hai111",
    ...config
}