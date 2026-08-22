const http=require('http')

const server=http.createServer((req,res)=>{        //response browser pe send krna hai
    if(req.url === '/' && req.method === 'GET'){
        res.end("Home page it is")
    }
    else if(req.url === '/about' && req.method === 'GET'){
        res.end("yes you are at about page")
    }
    res.end("Hey Here")
});

server.listen(4000,()=>{
    console.log("Server started sucessfully")
});