import app from '../app.js';
import service from '../module/service.js';

let { getList } = service;

export default app.controller('list', function ($scope) {
    $scope.list = [];

    getList()
    .then((data) => {
        $scope.$apply(function () {
            $scope.list = data;
        })
    })
    

    $scope.goToDetail = function (e, id) {
        e.preventDefault();

    }
});