// const proxy = require('http-proxy-middleware')

// console.log('==========> use setup proxy')

// module.exports = function(app){
// 	app.use(
// 		proxy('/ciwei',{ //遇见/api1前缀的请求，就会触发该代理配置
// 			target:'https://www.ciwei.net', //请求转发给谁
// 			changeOrigin:true,//控制服务器收到的请求头中Host的值
// 			pathRewrite:{'^/ciwei':''} //重写请求路径(必须)
// 		}) 
// 	)
// }


const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.ciwei.net',
      changeOrigin: true,
      pathRewrite:{'^/api':''}
    })
  );
};