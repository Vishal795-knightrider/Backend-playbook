// console.log("a");
// setTimeout(()=>console.log("b"),0);    asnyhronous 
// console.log("c");

// const os=require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.uptime());

const math=require("./calc");
console.log(math.sum(2,3));
console.log(math.subtract(2,3));
console.log(math.multiply(2,3));
console.log(math.divide(2,3));
