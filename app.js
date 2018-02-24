// Dependencies

const Koa = require('koa');
const Router = require('koa-router');

// Local Files

let config = require('./config');

// File

const app = new Koa();
const router = new Router();

// response 

router.get('/', async (ctx, next) => {
  ctx.body = {field: "/", version: "v1", data: "Ningmeng API",info: "Hello! This is Ningmeng API"};
  await next();
});

router.get('/ssr', async (ctx, next) => {
  ctx.body = "ssr://MTk4LjEzLjQ4LjI0Nzo4ODYyOmF1dGhfYWVzMTI4X3NoYTE6Y2hhY2hhMjA6dGxzMS4yX3RpY2tldF9hdXRoX2NvbXBhdGlibGU6Ym1WcmIzTnVaWFIzYjNKci8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFYbGhhMkV0U2xBd01RJmdyb3VwPVFYbGhhMkVnVG1WMGQyOXlhM00\nssr://MTU5LjIwMy42My45ODo4ODcxOmF1dGhfYWVzMTI4X3NoYTE6Y2hhY2hhMjA6dGxzMS4yX3RpY2tldF9hdXRoOmJtVnJiM051WlhSM2IzSnIvP29iZnNwYXJhbT0mcHJvdG9wYXJhbT0mcmVtYXJrcz1RWGxoYTJFdFZFOHdNUSZncm91cD1RWGxoYTJFZ1RtVjBkMjl5YTNN\nssr://NDUuMzIuMTg5LjIwOTo4ODQ3OmF1dGhfc2hhMV92NDpjaGFjaGEyMDp0bHMxLjJfdGlja2V0X2F1dGg6Ym1WcmIzTnVaWFIzYjNKci8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFYbGhhMkV0UVZVd01RJmdyb3VwPVFYbGhhMkVnVG1WMGQyOXlhM00\nssr://OTcuNjQuMjEuMTA0Ojg4NDE6YXV0aF9zaGExX3Y0OmNoYWNoYTIwLWlldGY6aHR0cF9zaW1wbGU6Ym1WcmIzTnVaWFIzYjNKci8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPVFYbGhhMkV0VlZNd01RJmdyb3VwPVFYbGhhMkVnVG1WMGQyOXlhM00"
  await next();
})


app
  .use(router.routes())
  .use(router.allowedMethods());

/*

app.use(async (ctx, next) => {
  ctx.body = {field: "/", version: "v1", data: "Ningmeng API",info: "Hello! This is Ningmeng API"};
  await next();
  console.log("Basic");
})

app.use(async (ctx, next) => {
  
})

app.use(async (ctx, next) => {
  ctx.body = {field: "/ssr", version: "v1", data: "error",info: "Invalid Request"}
  await next();
  console.log("Fallback, Invaild Request");
})

app.use(async (ctx, next) => {
  console.log("Hello, NingmengAPI")
})

*/

app.listen(config.port);