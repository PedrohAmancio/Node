import path from 'path';
import { promises as fs } from 'fs';
import url from 'url';

var _filename = url.fileURLToPath(import.meta.url);
var ___dirname = path.dirname(_filename);

var arquivo = path.join(___dirname,"Boas vindas.txt");

try {
    await fs.writeFile(arquivo,'Sudações');
    console.log("Arquivo criado com sucesso")
} catch (error) {
    console.error("Erro ao criar arquivo " + error)
};