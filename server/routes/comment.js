const router = require('koa-router')()
const jwt = require('koa-jwt')
const {secret}=require('../config')
const {create,find,checkCommentExist
  ,checkPermission,remove}=require('../controller/comments')
const auth=jwt({ secret})
router.prefix('/api/comments')

router.get('/:articleId',find)

// router.get('/:id', findById)

router.post('/',auth, create)

router.delete('/:id',auth,checkCommentExist,checkPermission, remove)

module.exports = router
