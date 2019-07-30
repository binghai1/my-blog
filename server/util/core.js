const path = require('path')
const fs =require('fs')
const error = require('koa-json-error')
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const {mongodHost} = require('../config')
class Core{
    constructor(app){
        this.app=app
        mongoose.connect(mongodHost,
            {useNewUrlParser: true}).then(()=>{console.log('mongod connet')})
        this.app.use(error())
        this.initRouter()
        parameter(this.app); 
     
    }
    //json-error fromat
     formatError(err) {
        return {
            // Copy some attributes from
            // the original error
            status: err.status,
            message: err.message,
            // ...or add some custom ones
            success: false,
            reason: 'Unexpected'
        }
    }
     initRouter(){
         const routerDirPath=path.resolve(__dirname,'../routes')
        fs.readdirSync(routerDirPath).forEach(
            (item)=>{
                const route=require(path.resolve(routerDirPath,item))
                this.app.use(route.routes(), route.allowedMethods())
            }
        )
    }
}

module.exports=Core