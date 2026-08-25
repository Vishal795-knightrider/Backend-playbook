// const http=require('http')

// const server=http.createServer((req,res)=>{       //req ayegi client se     //response(res is object) browser pe send krna hai(it can be string ,json ,html)
//     if(req.url === '' && req.method === 'GET'){
//         res.end("Home page it is")
//     }
//     else if(req.url === '/about' && req.method === 'GET'){
//         res.end("yes you are at about page") 
//     }
//     res.end("Hey Here")
//     console.log(req.headers)  
// });

// server.listen(4000,()=>{
//     console.log("Server started sucessfully")
// });


// const http = require('http');
// const  fs=reqire('fs')

// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case '/': 
//             console.log(req.headers);
//             res.writeHead(200, {'Content-Type': ''});
//             res.end("hello");
//             break;

//         case '/about':
//             const user = {
//                 id: 1,
//                 name: "John"
//             };
//             res.writeHead(200, {'Content-Type': 'application/json'});
//             res.end(JSON.stringify(user));
//             break;

//         case '/file':
//             // const date=date.now 
//             // fs.append('./log.txt',date.now()$req.url)              //need to fix this

//         case '/contactus':
//             res.writeHead(200, {'Content-Type': ''});
//             res.end("Contact us page");
//             break;

//         default:   
//             res.writeHead(404, {'Content-Type': ''});
//             res.end("404 Page Not Found");
//             break;
//     }
// });

// server.listen(4000, () => {
//     console.log("Server started successfully on port 4000");
// });



//POSt method

const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/users' && req.method==='POST')
{
    let body=''
    //receving incoming data
    req.on('data',(chunk)=>{           //client se data aa raha hau
        body+=chunk                     //uske baad data ke chunk ko 1 sath body me merge kr diya
    })

    req.on('end',()=>{
        console.log("Raw Data:",body)
        const user=JSON.parse(body)
        console.log('user:',user)
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(user))
    })
}
else {
    res.writeHead(404, {'content-type':''})
    res.end("Not Found")
}
}) 
server.listen(3000,()=>{console.log("server started")})