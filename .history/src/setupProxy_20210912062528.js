const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://search-fusejs-reacts.netlify.app/",
      pathRewrite: { "^/api$": "/.netlify/functions/api" },
    })
  );
};
