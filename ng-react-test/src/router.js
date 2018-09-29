import app from './app.js'
import list from './list/list.js';

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // .when('/', { template: '这是： ./index/index.html'})
        // .when('/list', { template: '这是：./list/index.html' })
        // .when('/detail', { template: '这是：./detail/index.html' })
        .when('/', { templateUrl: './index/index.html'})
        .when('/list', { templateUrl: './list/index.html', controller: 'list' })
        .when('/detail/:id', { templateUrl: './detail/index.html' })
        .otherwise({ redirectTo: '/' });
}]);
let x = {
    a: 1
}
export default x;