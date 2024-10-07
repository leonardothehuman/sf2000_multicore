// const fs = require('fs');

// const originalReadFileSync = fs.readFileSync;
// fs.readFileSync = function(path, options) {
//     if(path.endsWith('sharp-wasm32.node.wasm')){
//         // return require('./temp/sharp-wasm32.node.wasm.js');
//         return originalReadFileSync.call(this, './sharp-wasm32.node.wasm', options);
//     }
//     const result = originalReadFileSync.call(this, path, options);  // Call the original function
//     return result;
// };

// var Module = require('module');
// // require = Module.createRequire(__filename); 
// var originalRequire = Module.prototype.require;
// // const sharp_wasm = require('@img/sharp-wasm32/lib/sharp-wasm32.node.js');
// const sharp_wasm = require('@img/sharp-wasm32/sharp.node');
// Module.prototype.require = function(){
//     if(arguments[0] == '../src/build/Release/sharp-wasm32.node'){
//         return sharp_wasm;
//     }
//     return originalRequire.apply(this, arguments);
// };

// require('./index.js');