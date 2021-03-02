const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const registerRouter = require('./router')
const config = require('./config')


// 解析参数
app.use(koaBody())
// 配置路由
app.use(registerRouter())
// 启动
require('http')
    .createServer(app.callback())
    .listen(config.port)