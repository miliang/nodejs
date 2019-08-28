/*
* 3.控制层文件
* 负责：
* 处理具体的业务逻辑
* */
const fs=require("fs");
// module.exports.sendFile=function (request,response,type) {
//     console.log("进入控制层");
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"text/"+type+";charset=utf-8"});
//         response.write(data);
//         response.end();
//     })
// };
// module.exports.sendImg=function (request,response,type) {
//     console.log("进入控制层");
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"images/"+type+""});
//         response.write(data);
//         response.end();
//     })
// };

console.log(module.exports);//是对象，有sendFile和sendImg方法
console.log(module.exports==exports);//true
console.log(module.exports===exports);//true
/*exports是module.exports的简写
* module.exports与exports的区别
* 数据类型有基本类型（null，number，布尔，undefined，字符串）和引用类型（数组和对象）
* 基本类型值存在栈中，引用类型值存在堆中*/
let myModuleExports={
    str:"abc"
};
let myExports=myModuleExports;
myExports.str="name";
console.log(myModuleExports.str);//name

//====================修改=================
const fileController={
    sendFile(request,response,type){
    console.log("进入控制层");
    fs.readFile("public" + request.url, (err, data) => {
        response.writeHeader(200, {"content-type": "text/" + type + ";charset=utf-8"});
        response.write(data);
        response.end();
    })
    },

    sendImg(request,response,type) {
    console.log("进入控制层");
    fs.readFile("public"+request.url,(err,data)=>{
        response.writeHeader(200,{"content-type":"images/"+type+""});
        response.write(data);
        response.end();
    })
}
};
module.exports=fileController;