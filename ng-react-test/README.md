### 本目录是打算模拟练习 NgReact
#### 知识收集
1. angular.module
    - 
        ```
         angular模块通过angular.module(name,requires, configFn)方法生成：

            参数name是模块名称；
            参数requires表示依赖模块数组。如果不设置requires参数，调用angular.module(name)方法表示获取这个模块；因此，如果确定新模块没有依赖关系，必须设置requires为空数组[]；
            参数configFn是方法或数组，负责在模块初始化时做一些配置，如果是数组，最后一个元素必须是方法。

         方法configFn并不是在执行angular.module()的时候立即执行，而是当这个模块被第一次使用时，由注入器调用执行。同时，查看方法configFn中的this就会发现，这个this在浏览器中指向的是window，而不是module。而且，方法configFn只会执行一次，因此同一个angular模块不会重复配置。
        ```
    - 同名模块: 已经初始化的angular模块保存在一个叫modules的缓存对象中，key是模块名，value是模块对象。所以，定义一个同名的模块，等于覆盖之前的模块。
    - 服务注入: 
    - Angular模块和我们通常理解的模块不一样，Angular模块只保留服务的声明，服务的实例化是由服务注入器完成的，实例化之后服务就留在了服务注入器中，和模块没有关系了，这就是为什么我们使用的服务全部来自注入器的原因。
    - 每调用一次angular.boostrap()方法会创建一个新的Angular应用和一个新的服务注入器. 因此，每个应用都对应一个服务注入器，彼此互不冲突。


2. fetch
    - fetch()
        - 接受两个参数：1. url | Request; 2. init
        - init: method、headers:Headers、body、mode、credentials、cache、redirect、referer、referrerPolicy、
3. repeat 不渲染问题 [解决办法](https://blog.csdn.net/ovvn2370/article/details/78764855)
4. 写项目中第一个 react 页面小计
    - 写了最简单的代码 list.jsx
    - 新建一个临时的index.html, 以确定 list.jsx 可以用
    - https://www.jianshu.com/p/8fc75ad09eeb
        ```
        Uncaught ReferenceError: exports is not defined
        ```
5. 
    - module --- es6
    - text/babel --- es6
    - text/javascript --- js
6. Uncaught ReferenceError: exports is not defined
    - https://segmentfault.com/q/1010000005937716
7. https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/user-handbook.md
8. https://blog.csdn.net/wopelo/article/details/77844916