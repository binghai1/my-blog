const router = require('koa-router')()
const jwt = require('koa-jwt')
const {secret}=require('../config')
const {create,find,findById,checkTagsExist
  ,checkPermission,remove}=require('../controller/tags')
const auth=jwt({ secret})
router.prefix('/api/tags')

router.get('/',find)

router.get('/:id/articles', findById)

router.post('/',auth, create)


router.delete('/:id',auth,checkTagsExist,checkPermission, remove)

module.exports = router
