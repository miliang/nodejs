/*
* 2.路由文件
* 负责：
* 分发不同请求，比如请求js，css，jpg 分发给不同的地方进行处理
*/
// function fileRouter() {
//     console.log("准备接客");
// }
const fileController=require("../controller/fileController");

module.exports.fileRouter=function (request,response) {
    console.log("真的准备接客了");
    console.log(request .url);
    console.log(request.url.split("."));
    let newPath=request.url.split(".");
    if(newPath[1]=="html"){
     console.log("发送给控制器sendHtml");
     fileController.sendHtml(request,response);
     }
     else if(newPath[1]=="css"){
        console.log("发送给控制器sendCss");
        fileController.sendCss(request,response);
     }
     else if(newPath[1]=="js"){
        console.log("发送给控制器sendJavascript");
        fileController.sendJavascript(request,response);
     }
     else if(newPath[1]=="jpg"){
        console.log("发送给控制器sendJpg");
        fileController.sendJpg(request,response);
     }
     else if(newPath[1]=="png"){
        console.log("发送给控制器sendPng");
        fileController.sendPng(request,response);
     }
};