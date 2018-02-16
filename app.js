// Dependencies

const Koa = require('koa');

// Local Files

let config = require('./config');

// File

const app = new Koa();

// response
app.use(ctx => {
  ctx.body = {data: "Ningmeng API /", version: "v1", info: "Hello! This is Ningmeng API"};  
});

app.listen(4000);