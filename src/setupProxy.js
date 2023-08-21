const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://support.stream-labs.com',
    changeOrigin: true,
}
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware(proxy)
  );
}