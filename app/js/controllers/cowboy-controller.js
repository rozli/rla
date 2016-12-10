(function () {
    'use strict';

    function CowboyController($rootScope, $scope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Приключенията на Дъмбо Каубоеца');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("cowboy");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_cowboy_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.cowboyHeading;
    }

    angular.module('rozLi.controllers')
        .controller('CowboyController', ['$rootScope', '$scope', '$location', 'PageTitle', CowboyController]);
} ());