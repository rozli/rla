(function () {
    'use strict';

    function SnowmansController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleSnowmans);

        $scope.smSlider = $rootScope.bXmasSlider;

        rozLiJs.initializeGallery("snowmans");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_snowmans_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleSnowmans;
    }

    angular.module('rozLi.controllers')
        .controller('SnowmansController', ['$scope', '$rootScope', '$location', 'PageTitle', SnowmansController]);
}());