angular.module('myApp', []);
angular.module('myApp').controller('CalcCtrl', function ($scope) {
    $scope.toggleSimpleInterestResult = false;
    $scope.toggleCompoundInterestResult = false;

    $scope.simpleCalc = function (principal, rate, time) {
        $scope.result = parseInt(principal) * (parseInt(rate) / 100) * parseInt(time);
        $scope.toggleSimpleInterestResult = true;
    }

    $scope.compoundCalc = function (principal, rate, time) {
        $scope.result = parseInt(principal) * Math.pow(1 + (parseInt(rate) / 100), parseInt(time));
        $scope.toggleCompoundInterestResult = true;
    }
});