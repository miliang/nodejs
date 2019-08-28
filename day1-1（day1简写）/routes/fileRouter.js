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
     fileController.sendFile(request,response,"html");
     }
     else if(newPath[1]=="css"){
        console.log("发送给控制器sendCss");
        fileController.sendFile(request,response,"css");
     }
     else if(newPath[1]=="js"){
        console.log("发送给控制器sendJavascript");
        fileController.sendFile(request,response,"javascript");
     }
     else if(newPath[1]=="jpg"||newPath[1]=="png"){
        console.log("发送给控制器sendJpg");
        fileController.sendImg(request,response,newPath[1]);
     }
};