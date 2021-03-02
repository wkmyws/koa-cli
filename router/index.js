// Do not touch me ~!

const compose = require('koa-compose')
const glob = require('glob')
const { resolve, join } = require('path')

registerRouter = () => {
    let routers = [];
    glob.sync(resolve(__dirname, './', '**/*.js'))
        .filter(value => {
            return (resolve(__dirname, value).split(__dirname)[1] !== "/index.js")
            //return (value.indexOf('index.js') === -1)
        })
        .map(router => {
            routers.push(require(router).routes())
            routers.push(require(router).allowedMethods())
        })
    return compose(routers)
}

module.exports = registerRouter