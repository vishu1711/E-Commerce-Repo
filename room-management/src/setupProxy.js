// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/cloudpms",
    createProxyMiddleware({
      target: "https://xpresshotelpos.com",
      changeOrigin: true,
      secure: false,
    })
  );
};
