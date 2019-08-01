const proxy = require('http-proxy-middleware');
const target=process.env.NODE_ENV=='development'?
    "http://localhost:8081/api":"http://localhost:5000/api"
module.exports = (app) =>{
  app.use(
    proxy("/api", {
      target,
      changeOrigin: true, // needed for virtual hosted sites
      // ws: true, // proxy websockets
      pathRewrite: {
        "^/api": ""
      }
    })
  );
};