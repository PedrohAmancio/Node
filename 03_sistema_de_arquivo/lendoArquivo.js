import path from 'path';
import { promises as fs } from 'fs';
import url from 'url';

var _filename = url.fileURLToPath(import.meta.url);
var ___dirname = path.dirname(_filename);

var arquivo = path.join(___dirname,"totalVendas.txt");

try {
    var buffer = await fs.readFile(arquivo);
    console.log(buffer)
    console.log(buffer.toString())
    console.log(JSON.parse(buffer).alunos)
} catch (error) {
    console.log("Erro ao ler arquivo ", error)
}