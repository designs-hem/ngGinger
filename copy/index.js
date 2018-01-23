
var copydir = require('copy-dir');
var path = require('path');
var argv = require('yargs').argv;
var process = require('process');
var fs = require('fs');
var root  = path.resolve(__dirname, '../');
const themeDir = path.resolve(root, '../')+'Themes\\'+argv._[0];
const dirs = getDirectories(themeDir);
console.log('dir', dirs);
console.log('root', argv._[0]);
let totalDir = 0;
function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }
  function copyDirs(index){
    if (totalDir > 0) {
        console.log('source>>>', path.resolve(root, '../')+'Themes\\'+argv._[0]+'\\'+dirs[index]);
        console.log('dstination>>>', root+'\\src\\app\\'+dirs[index]+'\\components');
        copydir(path.resolve(root, '../')+'Themes\\'+argv._[0]+'\\'+dirs[index], root+'\\src\\app\\'+dirs[index]+'\\components', function(err){
            if(err){
              console.log(err);
            } else {
              console.log('ok');
              totalDir--;
              copyDirs(index + 1);
            }
        });
        
    }
   
}

if (dirs.length > 0) {

    totalDir = dirs.length;
    copyDirs(0);


}
