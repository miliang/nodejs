const http=require("http");

const fs=require("fs");//专门处理文件的系统对象，它提供了读取文件的方法
const server=http.createServer((request,response)=>{
    /* 通过fs读取到文件内存中去要有三个参数：
        1.	读取路径（必须）
        2.	字符编码（可选）（utf-8）
        3.	读取结果的回调函数*/
    console.log(request.url);
    console.log(request.url.split("."));
    let newPath=request.url.split(".");
    if(newPath[1]=="html"){
        fs.readFile("public/"+request.url,(err,data)=>{
            response.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
            response.write(data);
            response.end();
        })
    }
    else if(newPath[1]=="css"){
        fs.readFile("public"+request.url,(err,data)=>{
            response.writeHeader(200,{"content-type":"text/css;charset=utf-8"});
            response.write(data);
            response.end();
        })
    }
    else if(newPath[1]=="js"){
        fs.readFile("public"+request.url,(err,data)=>{
            response.writeHeader(200,{"content-type":"text/javascript;charset=utf-8"});
            response.write(data);
            response.end();
        })
    }
    else if(newPath[1]=="jpg"){
        fs.readFile("public"+request.url,(err,data)=>{
            response.writeHeader(200,{"content-type":"images/jpg"});
            response.write(data);
            response.end();
        })
    }
    else if(newPath[1]=="png"){
        fs.readFile("public"+request.url,(err,data)=>{
            response.writeHeader(200,{"content-type":"images/png"});
            response.write(data);
            response.end();
        })
    }
});
server.listen(8787);
