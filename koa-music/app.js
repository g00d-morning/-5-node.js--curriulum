const Koa = require('koa');
const path = require('path');

// 创建服务器
let app = new Koa();
//开启服务器
app.listen(8888, () => {
    console.log('服务器在8888端口启动了');
})

//模板渲染
const render = require('koa-art-template');
render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
})