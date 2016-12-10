(function () {
    'use strict';

    function LighthouseController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Фарът');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("lighthouse");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_lighthouse_2.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleLighthouse;
    }

    angular.module('rozLi.controllers')
        .controller('LighthouseController', ['$scope', '$rootScope', '$location', 'PageTitle', LighthouseController]);
} ());