(function () {
    'use strict';

    function DinoController($rootScope, $scope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Дино и приятели');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("dino");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_dino_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.dinoHeading;
    }

    angular.module('rozLi.controllers')
        .controller('DinoController', ['$rootScope', '$scope', '$location', 'PageTitle', DinoController]);
} ());