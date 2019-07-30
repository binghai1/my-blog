
const config={}
if(process.env.NODE_ENV=='production'){
    // config.mongodHost="host"
}else{
    config.mongodHost="mongodb://localhost/my-blog"
}
module.exports={
    secret:"hai111",
    ...config
}