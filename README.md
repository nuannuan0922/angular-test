# angular-test
angular test demo

# angular 官网教程知识汇总 [中文官网链接](https://angular.cn/)
1. 脚手架，生成项目框架：ng new <project name>
2. 生成一个新的组件：ng generate component <component name>
3. 管道操作符（ | ）。管道 是格式化字符串、金额、日期和其它显示数据的好办法。
4. [(ngModel)] 是 Angular 的双向数据绑定语法。
5. 每个组件都必须声明在（且只能声明在）一个 NgModule 中。
6. 组件不应该直接获取或保存数据，它们不应该了解是否在展示假数据。 它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。
7. 让构造函数保持简单，只做初始化操作，比如把构造函数的参数赋值给属性。 构造函数不应该做任何事。 
8. 