var app = angular.module('myapp', []);
app.controller('personCtrl', function ($scope) {
    $scope.firstname = 'John';
    $scope.lastname = 'Nash';
    $scope.getFullname = function () {
        return $scope.firstname + ' ' + $scope.lastname;
    }

    $scope.age = 12;

    $scope.persons = [
        {name: 'China John', country: 'China'},
        {name: 'china John', country: 'china'},
        {name: 'america John', country: 'america'},
        {name: 'America John', country: 'America'},
    ]
    $scope.test = ''
});

app.filter('reverse', function() {
    return function(text) {
        return text.split('').reverse().join('');
    }
})