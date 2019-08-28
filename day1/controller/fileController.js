/*
* 3.控制层文件
* 负责：
* 处理具体的业务逻辑
* */
const fs=require("fs");
module.exports.sendHtml=function (request,response) {
    console.log("进入控制层");
    fs.readFile("public"+request.url,(err,data)=>{
        response.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
        response.write(data);
        response.end();
    })
};
module.exports.sendCss=function (request,response) {
    console.log("进入控制层");
    fs.readFile("public"+request.url,(err,data)=>{
        response.writeHeader(200,{"content-type":"text/css;charset=utf-8"});
        response.write(data);
        response.end();
    })
};
module.exports.sendJavascript=function (request,response) {
    console.log("进入控制层");
    fs.readFile("public"+request.url,(err,data)=>{
        response.writeHeader(200,{"content-type":"text/javascript;charset=utf-8"});
        response.write(data);
        response.end();
    })
};
module.exports.sendJpg=function (request,response) {
    console.log("进入控制层");
    fs.readFile("public"+request.url,(err,data)=>{
        response.writeHeader(200,{"content-type":"images/jpg"});
        response.write(data);
        response.end();
    })
};
module.exports.sendPng=function (request,response) {
    console.log("进入控制层");
    fs.readFile("public"+request.url,(err,data)=>{
        response.writeHeader(200,{"content-type":"images/png"});
        response.write(data);
        response.end();
    })
};