(function () {
    'use strict';

    function BikeController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - На море с колело');

        rozLiJs.initialize();
        rozLiJs.initializeZoom("bike");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_bike_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleBike;
    }

    angular.module('rozLi.controllers')
        .controller('BikeController', ['$scope', '$rootScope', '$location', 'PageTitle', BikeController]);
} ());