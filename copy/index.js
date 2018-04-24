
var copydir = require('copy-dir');
var path = require('path');
var process = require('process');
var argv = process.env.theme;
var fs = require('fs');
var root  = path.resolve(__dirname, '../');
// console.log('dir', dirs);
console.log('root',root, process.env.theme);
const themeDir = path.resolve(root, '../')+'Themes\\'+argv;
const dirs = getDirectories(themeDir);

let totalDir = 0;
function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }
  function copyDirs(index){
    if (totalDir > 0) {
        console.log('source>>>', path.resolve(root, '../')+'Themes\\'+argv+'\\'+dirs[index]);
        console.log('dstination>>>', root+'\\src\\app\\'+dirs[index]+'\\components');
        copydir(path.resolve(root, '../')+'Themes\\'+argv+'\\'+dirs[index], root+'\\src\\app\\'+dirs[index]+'\\components', function(err){
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
