##第一题
```bash
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}

//答案：
Foo.getName();//2  
getName();//4   因为变量提升与函数表达式，4会覆盖5
```
##第二题
```bash
function fun(n,o) {
  console.log(o)
  return {
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,?,?,? 
var b = fun(0).fun(1).fun(2).fun(3);//undefined,?,?,?
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,?,?,?
```
##第三题
写一个count函数 实现 count(a)(b)(c)(d)....他们的积 如count(1)(2)(3) 得到 6
```bash
function count(a){ 
return function(b){
count.result=a*b;
   return count(count.result);
}

}
```
##第四题
如果有人 window.console = null 这样写，我怎么找到以前的那个 console 呢？

##第五题
console.log(window.window)
console.log(window.window.window)

##第六题
var i=0;
i+++1  
1+++i

##第七题

for (var i=0; i<10; i++) {
    (function(e) {
      setTimeout(function(){
        alert(e); 
      }, 1000);
    })(i);
} 
=============================
for (var i=0; i<10; i++) {
    (function(e) {
      setTimeout(function(){
        console.log(e)
      }, 1000);
    })(i);
} 
##第八题
setTimeout 和 setInterval 优缺点 准时,性能
##第九题
解释prototype,__proto__
除了Function 其他prototype都为Obejct,因为Function = new Function()
原型  ：new一个自己，不提供参数，为了给其他人用
原型链： 为了用别人指向下一层的原型
Function.__proto__.__proto__.__proto__
Object.__proto__.__proto__.__proto__
##第十题
请求服务端跨域的最新方式(mode: "no-cors")

phantom

