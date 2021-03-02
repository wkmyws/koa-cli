const Router = require('koa-router')
const router = new Router()

// remember !!
router.prefix('/api')

router.get('/A', (ctx, next) => {
    ctx.body = ["get /api/A ", JSON.stringify(ctx.query), new Date()].join("<br>")
})

router.post('/A', (ctx, next) => {
    ctx.body = ["post /api/A ", JSON.stringify(ctx.request.body), new Date()].join("<br>")
})

module.exports = router