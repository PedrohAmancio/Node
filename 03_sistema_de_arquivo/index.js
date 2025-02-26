import{promises as fs} from 'fs';

var main = async () => {
    var items = await fs.readdir('Lojas',{withFileTypes: true});
    for(var item of items){
        var type = item.isDirectory()? 'pasta' : 'arquivo'
        console.log(`${item.name}: ${type}`);
    }

};

main();