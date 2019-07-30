const router = require('koa-router')()
const jwt = require('koa-jwt')
const {secret}=require('../config')
const {create,find,findById,checkArticlesExist
  ,checkPermission,update,remove}=require('../controller/articles')
const auth=jwt({ secret})
router.prefix('/api/articles')

router.get('/',find)

router.get('/:id', findById)

router.post('/',auth, create)

router.patch('/:id',auth,checkArticlesExist,checkPermission, update)

router.delete('/:id',auth,checkArticlesExist,checkPermission, remove)

module.exports = router
