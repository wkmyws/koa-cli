const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')
//router.prefix('/api')

router.get('/help', (ctx, next) => {
    ctx.body = fs.readFileSync(path.resolve(__dirname,'./index.html')).toString()
})

module.exports = router