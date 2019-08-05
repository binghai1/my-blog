
const config={}
if(process.env.NODE_ENV=='production'){
    config.mongodHost="mongodb://148.70.186.210/my-blog"
}else{
    config.mongodHost="mongodb://localhost/my-blog"
}
module.exports={
    secret:"hai111",
    ...config
}