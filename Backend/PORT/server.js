const http=require('http');
const fs=require('fs');
const dotenv=require('dotenv');
dotenv.config();
const server = http.createServer((req,res)=>{
  if(req.url==="/"){
    res.writeHead(200);
    res.end("It's a home page");

  }
  else if(req.url==="/visit"){
    res.writeHead(200);
    res.end("It's a visit page");
  }
  else{
    res.writeHead(404);
    res.end("Page not found");
  }
}

);
const PORT=process.env.PORT ||4500;
server.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`);
});