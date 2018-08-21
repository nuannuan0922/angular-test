let app = angular.module('myapp', []);

app.controller('serviceCtrl', function($scope, $location, $http, restfulapi) {
    $scope.url = $location.absUrl();
    console.log($location);

    $http.get('./index-filter.html').then(response => {
        $scope.filterHtml = response.data;
    });

    $scope.hex255 = restfulapi.myFunc(255);
    $scope.inputNum = 0;

    $scope.nums = [1, 2, 3, 10, 11, 14, 15, 16, 25]
});

app.filter('toHex', ['restfulapi', function (restfulapi) {
    return function (x) {
        return restfulapi.myFunc(x);
    }
}])

app.service('restfulapi', function () {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});