import fs from 'fs'
import zlib from 'zlib'

const readStream=fs.createReadStream("/.sample.txt")

const gzip=zlib.createGzip(readStream)           //compress kise karoge ,  jo read kiy ahai na that us readstream

const writeStream=fs.createWriteStream('./data.txt.gz')


// creting and use pipe
readStream.pipe(gzip).pipe(writeStream)

