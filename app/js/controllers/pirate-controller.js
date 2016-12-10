(function () {
    'use strict';

    function PirateController($rootScope, $scope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Ломбо Пирата');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("pirate");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_pirate_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.pirateHeading;
    }

    angular.module('rozLi.controllers')
        .controller('PirateController', ['$rootScope', '$scope', '$location', 'PageTitle', PirateController]);
} ());