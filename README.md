# koa-cli

### 运行

```
node app.js
```

访问 `localhost:3000`

### 项目结构

+ app.js

    项目入口

+ config.js

    配置文件

+ /router

    > 可在此文件夹内创建任意路由，格式：*.js

    > 此项目分了两个文件夹 `/api` `/page` 用于处理不同的逻辑

    + index.js

        用于解析路由，请勿改动

+ /public

    存放静态文件