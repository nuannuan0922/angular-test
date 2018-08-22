// let app = angular.module('myapp', []);
console.log(app);
app.value("defaultValue", {
    name: '张三',
    age: 28,
    ch: 80,
    math: 87,
    en: 90
})
app.constant('con', "他是个逗比，这个事实不可更改");

app.config(function ($provide) {
    $provide.provider('MathService', function() {
        this.$get = function() {
            var factory = {};

            factory.add = function () {
                var args = Array.prototype.slice.apply(arguments);
                return args.reduce((pre, cur, index, arr) => {
                    return pre + cur;
                })
            }
        
            return factory;
        }
    });
})

app.controller('myCtrl', function (
    $scope, 
    defaultValue, 
    calcService, 
    myfactory,
    MathService,
    con
) {
    $scope.person = defaultValue || {};
    $scope.totalScore = calcService.calc(defaultValue.ch, defaultValue.math, defaultValue.en);
    $scope.totalScoreExceptEn = myfactory.add(defaultValue.ch, defaultValue.math);
    $scope.totalScoreExceptCh = MathService.add(defaultValue.en, defaultValue.math);
    $scope.con = con;
});

app.factory('myfactory', function () {
    var factory = {};

    factory.add = function () {
        var args = Array.prototype.slice.apply(arguments);
        return args.reduce((pre, cur, index, arr) => {
            return pre + cur;
        })
    }

    return factory;
});

app.service('calcService', function (myfactory) {
    this.calc = function () {
        return myfactory.add.apply(this, arguments);
    }
});

