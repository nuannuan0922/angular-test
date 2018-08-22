# angular-test
angular test demo

# angular 官网教程知识汇总 [中文官网链接](https://angular.cn/)
### 之前都是先看菜鸟教程，再看官方文档，因为时间少，官方文档看不完。这一次就想直接看官方教程吧。结果很失望。特别失望。所以还是建议先看菜鸟教程，在看官方文档。
1. 脚手架，生成项目框架：ng new <project name>
2. 生成一个新的组件：ng generate component <component name>
3. 管道操作符（ | ）。管道 是格式化字符串、金额、日期和其它显示数据的好办法。
4. [(ngModel)] 是 Angular 的双向数据绑定语法。
5. 每个组件都必须声明在（且只能声明在）一个 NgModule 中。
6. 组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。 它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。
7. 让构造函数保持简单，只做初始化操作，比如把构造函数的参数赋值给属性。 构造函数不应该做任何事。 
8. == 官网最后的http没有看完 ==
### == TS RxJS 可能需要了解一下 ==

# 菜鸟教程支持点汇总 [菜鸟教程链接](http://www.runoob.com/angularjs/angularjs-intro.html)
1. ng-app
    - 指明了应用, 定义了 AngularJS 应用程序的 根元素。
    - 只能有一个
    - 定义应用：
        ```
        var app = angular.module('myApp', []);
        ```
2. ng-model
    - formName.inputName.$error.email 表单验证
    - ng-model 指令可以为应用数据提供状态值(invalid, dirty, touched, error)
    - ng-model 指令根据表单域的状态添加/移除以下类：ng-empty，ng-not-empty，ng-touched，ng-untouched，ng-valid，ng-invalid，ng-dirty，ng-pending，ng-pristine
3. ng-bind
4. ng-init
5. {{}}
    - 可以是表达式。它们可以包含文字、运算符和变量
    - {{}} 和 bind 一样，可以解析html
6. ng-controller: 指明了控制器, 一个应用可以有多个controller
7. ng-repeat
8. 自定义指令
    - 定义：app.directive(name, fn);
        - 使用驼峰法来命名一个指令， runoobDirective, 但在使用它时需要以 - 分割, runoob-directive:
    - 调用：
        - 元素名. 如果 restrict 设置为 ‘E’，则只能通过这种方式调用
        - 属性. 如果 restrict 设置为 ‘A’，则只能通过这种方式调用
        - 类名：类名调用，必须要设置restrict： "C"
        - 注释：类名调用，必须要设置restrict： "M", replace: true
9. $scope、$rootScope
10. 过滤器：
    - angularjs 的几个过滤器：currency, filter, lowercase, orderBy, uppercase
    - 过滤器可以通过一个管道字符（|）和一个过滤器添加到表达式中。
    - 过滤器可用于转换数据
    - 可以过滤输入
11. 服务：
    - 在 AngularJS 中，服务是一个函数或对象
    - 内建服务：
        -  $location 服务，它可以返回当前页面的 URL 地址。
        - $http
        - $timeout
        - $interval
12. ng-options
    - ng-options 选中的是一个对象
    - ng-repeat 选中的是option的value
    - 语法：
        ```
        ng-options="x for (x, y) in sites"
        使用对象作为数据源, x 为键(key), y 为值(value):
        ```
13. ng-if、$even(奇) 、$odd(偶)、$index
14. angular 指令和html属性关联：
    - ng-disabled
    - ng-show
    - ng-hide
15. ng-click
16. 全局 api ：
    - uppercase\lowercase
    - isString()
    - isNumber()
17. ng-include
18. 依赖注入：
    - value -- 配置阶段
    - factory --- 可以用在service\controller中，在需要时创建
    - provider  -- 配置阶段
    - constant -- 配置阶段
19. 路由
    - 语法
        ```
        $routeProvider.when(url, {
            template: string, // 如果我们只需要在 ng-view 中插入简单的 HTML 内容，则使用该参数：
            templateUrl: string, // 如果我们只需要在 ng-view 中插入 HTML 模板文件，则使用该参数：
            controller: string, function 或 array, // function、string或数组类型，在当前模板上执行的 controller函数，生成新的scope。
            controllerAs: string, // 为controller指定别名。
            redirectTo: string, function,  // 重定向的地址。
            resolve: object<key, function> // 指定当前controller所依赖的其他模块。
        });
        ```

# 遗留问题（可能不需要解决）
1. 其余api
2. 每个api每个参数的含义