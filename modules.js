// console.log("a");
// setTimeout(()=>console.log("b"),0);    asnyhronous 
// console.log("c");

// const os=require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.uptime());

// const math=require("./calc");
// console.log(math.sum(2,3));
// console.log(math.subtract(2,3));
// console.log(math.multiply(2,3));
// console.log(math.divide(2,3));



// WRITE
// synchronous
// const fs =require('fs')
// const FilePath='./Test.txt'
// const Content="Hello this is vishal"
// fs.writeFileSync(FilePath,Content)


//asynch
// const fs =require('fs')
// const FilePath='./Test.txt'
// const Content="Hello this is vishal"
// fs.writeFile(FilePath,Content,(err)=>{
//  if(err){
//     console.log(err);
//     return 0;
//  }
// })




//READ
//synachronous
// const fs =require('fs')
// const FilePath='./Test.txt'
// const res=fs.readFileSync(FilePath,'utf-8')
// console.log(res);

//console.log("ok");      //--> in this synch. first content of the file is read then this message




// async                                  --- we majorly works on this
// const fs =require('fs')
// const FilePath='./Test.txt'
// fs.readFile(FilePath,'utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return 0;
//     }
//     console.log(data);
// })

// console.log("ok");      --> in this  asynchronous case first this this message will print then the contnet of file



//APPEND

// sycnhron
// const fs =require('fs')
// const FilePath='./Test.txt'
// fs.appendFileSync(FilePath,"ok you are selected")

// // asynch
// const fs =require('fs')
// const FilePath='./Test.txt'
// fs.appendFile(FilePath," ok you are selected",(err)=>{
//     if(err){
//         console.log(err);
//         return 0;
//     }
// })

