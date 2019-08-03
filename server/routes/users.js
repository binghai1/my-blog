const router = require('koa-router')()
const {create,login,remove,find} =  require('../controller/users')
const jwt = require('koa-jwt')
const {secret}=require('../config')
const auth=jwt({ secret})
router.prefix('/api/users')
router.post('/',create)
router.delete('/:id',auth,remove)
router.get('/',find)
router.post('/login',login)

module.exports = router
