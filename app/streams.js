const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding : 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStream.on('data', (chunk) => {
    console.log('----- NEW CHUNK -----')
    // console.log('chunk :', chunk.toString())
    // 위에서 encoding을 해주지 않으면 .toSTring()이 필요하다. buffer값이 나오므로
    console.log('chunk : ', chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk)
})

// piping
readStream.pipe(writeStream);

