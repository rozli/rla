(function () {
    'use strict';

    function PoliController($rootScope, $scope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - На разходка с Поли');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("poli");

        // FB share params
        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_chair_poli_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.poliHeading;
    }

    angular.module('rozLi.controllers')
        .controller('PoliController', ['$rootScope', '$scope', '$location', 'PageTitle', PoliController]);
} ());