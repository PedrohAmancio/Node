import path from 'path';
import { promises as fs } from 'fs';
import url from 'url';

var _filename = url.fileURLToPath(import.meta.url);
var ___dirname = path.dirname(_filename);

//console.log(_filename);
//console.log(___dirname);

var pasta = (path.join(___dirname,'lojas', '201', 'funcionarios'))
try {
    await fs.mkdir(pasta);
} catch (error) {
    console.error('Erro ao criar pasta ' + error.code + '\n' + pasta)
}

//console.log(path.join(___dirname,'lojas', '201', 'funcionarios'))