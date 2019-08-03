const router = require('koa-router')()
const jwt = require('koa-jwt')
const {secret}=require('../config')
const {create,find,checkCommentExist
  ,checkPermission,remove,removeAll}=require('../controller/comments')
const auth=jwt({ secret})
router.prefix('/api/comments')

router.get('/:articleId',find)

// router.get('/:id', findById)

router.post('/',auth, create)

router.delete('/:id',auth,checkCommentExist,checkPermission, remove)
router.delete('/removeAll/:id',auth,checkCommentExist,checkPermission, removeAll)

module.exports = router
