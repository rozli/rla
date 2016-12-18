(function () {
    'use strict';

    function FoxyController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleFoxy);

        $scope.fSlider = $rootScope.bXmasSlider;

        rozLiJs.initializeZoom("foxes");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_foxy_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleFoxy;
    }

    angular.module('rozLi.controllers')
        .controller('FoxyController', ['$scope', '$rootScope', '$location', 'PageTitle', FoxyController]);
}());