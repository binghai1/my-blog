
const config={}
if(process.env.NODE_ENV=='development'){
    config.mongodHost="mongodb://localhost/my-blog"
}else{
    config.mongodHost="mongodb://148.70.186.210/my-blog"

}
module.exports={
    secret:"hai111",
    ...config
}