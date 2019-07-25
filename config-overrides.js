const { override, fixBabelImports, addLessLoader,addWebpackAlias,addDecoratorsLegacy } = require('customize-cra');
const path = require('path')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
        // 'link-color': '#1DA57A'
    },
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({        
    '@': path.resolve(__dirname, "src")       
    // ["containers"]: path.resolve(__dirname, "src/containers"),        
    // ["components"]: path.resolve(__dirname, "src/components")   
})
);