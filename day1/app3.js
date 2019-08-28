/*主程序文件
负责：
1.搭建服务器，对服务器进行配置，依赖的外部模块
2.监听端口
3.拦截用户向服务器发起的各类请求*/
// 搭建服务器
const http=require("http");
// const  fs=require("fs");
// 导入路由文件
//./：回到根目录
const router=require("./routes/fileRouter");
const server=http.createServer((request,response)=>{
    console.log("服务启动");
    router.fileRouter(request,response);
});
// 监听端口
server.listen(8686);