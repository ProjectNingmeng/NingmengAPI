// Dependencies

const Koa = require('koa');

// Local Files

let config = require('./config');

// File

const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(4000);