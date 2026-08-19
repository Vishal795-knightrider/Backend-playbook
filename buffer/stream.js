import fs from 'fs'

const readStream=fs.createReadStream('./sample.txt')       //data ko chunks me bnaoo
const writeStream=fs.createWriteStream('./Output.txt')

 
// event 
// Data    for read the data which is to be converted to chunk
// end
// error
  
readStream.on('data',(chunk)=>{
    console.log(chunk)
    writeStream.write(chunk)
})

readStream.on('end',()=>{
    console.log('End of file')
    writeStream.close()
})