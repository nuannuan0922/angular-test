let app = angular.module('myapp', []);

app.controller('personCtrl', function ($scope, $http) {
    // $http.get('./index-http-personList.json').then(response => {
    //     $scope.personList = response.data;
    // })
    $http.post('./index-http-personList.json').then(response => {
        $scope.personList = response.data;
    })
});