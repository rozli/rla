(function () {
    'use strict';

    function BoatController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Рибарска лодка Ахтопол');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("boat");
    }

    angular.module('rozLi.controllers')
        .controller('BoatController', ['$rootScope', '$scope', 'PageTitle', BoatController]);
} ());