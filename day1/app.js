console.log("hello world!");
//1、常量 const：初始化后不能再重新赋值
// const a=1;
// console.log(a);
// a=3;//这种写法是错误的
// console.log(a);
// 2、变量 var 可以重复赋值
// var b=3;
// b=2;
// console.log(b);
// 3.局部变量 let的作用域是块
// var a=5;
// var b=10;
// if(a==5){
//     let a=4;
//     var b=2;
//     console.log(a);//4
//     console.log(b);//2
// }
// console.log(a);//5
// console.log(b);//2

//==============搭建服务器==============
// 1、引入http对象 关键词：require
const http=require("http");//返回http对象
// 2、http对象可以调用createServer()方法来搭建服务器
// const server=createServer(function () {
//     console.log("启动");
// });
// http.createServer(function () {console.log("启动");})可以写成
// http.createServer(()=> {console.log("启动");});
const server=http.createServer((request,response)=> {//依赖注入
    // request对象：请求对象
    // response对象：响应对象
    // console.log(request);
    console.log(request.url);//favicon.ico请求页面图标
    console.log("启动");
    // response.write("hello world!");
    // 响应头的设置：1.响应的状态码，404表示资源请求失败 200表示成功
    // 2.对象 设置文件类型
    response.writeHead(200,{"content-type":"text/html;charset=utf-8"});//响应头
    response.write("<h1>小丁丁，一起玩吧！</h1>");//响应内容
    // response.write("<h1>hello world!</h1>");
    response.end();//必须写 响应关闭
});
// 3.server.listen(端口号)监听端口
server.listen(8888);
/*响应分为三部分：
* 1、响应头
* 2、响应内容
* 3.响应关闭*/