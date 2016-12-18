(function () {
    'use strict';

    function SurikatiController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleSurikati);

        $scope.sSlider = $rootScope.bXmasSlider;

        rozLiJs.initializeZoom("surikati");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_surikati_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleSurikati;
    }

    angular.module('rozLi.controllers')
        .controller('SurikatiController', ['$scope', '$rootScope', '$location', 'PageTitle', SurikatiController]);
}());