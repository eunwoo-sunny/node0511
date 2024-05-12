const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err,data) => {
    if(err) console.log(err);
    console.log(data) 
    console.log(data.toString()) 
})

console.log('last line') 
// writing files

// 기존 파일의 내용을 바꿔준다.
fs.writeFile('./docs/blog1.txt', 'hello EJEY', () => {
    console.log('file was written')
})
// 없던 파일도 만들어준다.
fs.writeFile('./docs/blog2.txt', 'hello Again', () => {
    console.log('file was written')
})

// directories 새로운 생성 폴더
if(!fs.existsSync('./assets')) { // assets폴더가 없다면 true
    fs.mkdir('./assets', (err) => {
        if(err) { console.log(err)}
        console.log('folder created');
    })
} else {

    // delete folder
    fs.rmdir('./assets', (err) => {
        if(err) {console.log(err)}
        console.log('folder deleted')
    })
}

console.log(fs.existsSync('./assets'))

// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {console.log(err)}
        console.log('file deleted')
    })
}
