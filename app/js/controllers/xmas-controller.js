(function () {
    'use strict';

    function XmasController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleXmas);

        $scope.xSlider = $rootScope.bXmasSlider;

        rozLiJs.initializeZoom("xmas");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_present_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleXmas;
    }

    angular.module('rozLi.controllers')
        .controller('XmasController', ['$scope', '$rootScope', '$location', 'PageTitle', XmasController]);
}());