const fs = require('fs');


// create directory 
const makeDir = (path) => {
    const dirs = path.split('/');
    let currentPath = '';
    let ispreviousfile = false;
    for (let i = 0; i < dirs.length; i++) {
        currentPath += dirs[i] + '/';
        let thisdir = dirs[i];
        if(ispreviousfile){
            return;
        }
        if (!fs.existsSync(currentPath)) {
            if(thisdir.includes('.')){
                ispreviousfile = true;
                // create file 
                fs.appendFile(currentPath, '', function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
            }
            else{
                // create directory 
                fs.mkdirSync(currentPath);
            }
        }
    }
}

// const readdirectory and list all files and directories
const readDirectory = (path) => {
    const dirs = path.split('/');
    let currentPath = '';
    for (let i = 0; i < dirs.length; i++) {
        currentPath += dirs[i] + '/';
        if(!fs.existsSync(currentPath)) {
            return;
        }
    }
    fs.readdir(currentPath, (err, files) => { 
        files.forEach(file => {
            console.log(file);
        });
    })
}

// makeDir('test/hello/hello.html')
readDirectory('test/');
    
