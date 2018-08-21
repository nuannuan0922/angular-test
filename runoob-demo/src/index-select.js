let app = angular.module('myapp', []);

app.controller('personCtrl', function ($scope, $http) {
    // $http.get('./index-http-personList.json').then(response => {
    //     $scope.personList = response.data;
    // })
    $http.post('./index-http-personList.json').then(response => {
        $scope.personList = response.data;
        $scope.selectPerson = $scope.personList[2];
        $scope.selectPerson2 = $scope.personList[2];
    });

    $scope.personObjs = {
        'first1': {'name': '张三1', age: 21},
        'first2': {'name': '张三2', age: 22},
        'first3': {'name': '张三3', age: 23},
        'first4': {'name': '张三4', age: 24},
        'first5': {'name': '张三5', age: 25},
        'first6': {'name': '张三6', age: 26},
        'first7': {'name': '张三7', age: 27}
    }
});