const router = require('koa-router')()
const User=require('../models/users')
const {create,login} =  require('../controller/users')
const jwt = require('koa-jwt')
const {secret}=require('../config')
const auth=jwt({ secret})
router.prefix('/api/users')
router.post('/',create)

router.post('/login',login)

module.exports = router
