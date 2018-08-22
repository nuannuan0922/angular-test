let app = angular.module('myapp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // .controller('myCtrl', function ($scope, $route) { $scope.$route = $route;})
    .when('/',{template:'这是首页页面'})
    .when('/search',{templateUrl: 'index-router-search.html', controller: 'myCtrl'})
    .when('/list',{template:'这是列表页面'})
    .when('/detail',{template:'这是详情页'})
    .otherwise({redirectTo:'/'});
}])