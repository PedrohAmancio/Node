import path from 'path';
import url from 'url';

var _filename = url.fileURLToPath(import.meta.url);
var ___dirname = path.dirname(_filename);

console.log(_filename)
console.log(___dirname)