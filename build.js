const fs = require('fs');
const concat = require('concat');
const distFolder = './dist/';
(function build() {
  concatFile();
})();
function concatFile() {
  const files = [
    distFolder + 'runtime.js',
    distFolder + 'polyfills.js',
    distFolder + 'main.js'
  ];
  concat(files, distFolder + 'component.js');
}