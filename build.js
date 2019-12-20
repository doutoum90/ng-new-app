const fs = require('fs');
const concat = require('concat');
const distFolder = './dist/ng-new-app/';
(function build() {
  concatFile();
})();
function concatFile() {
  const files = [
    distFolder + 'runtime-es5.js',
    // distFolder + 'runtime-es2015.js',
    distFolder + 'polyfills-es5.js',
    // distFolder + 'polyfills-es2015.js',
    distFolder + 'main-es5.js',
    // distFolder + 'main-es2015.js'
  ];
  concat(files, distFolder + 'component.js');
}