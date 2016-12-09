(function () {
    'use strict';

    function PoliController($rootScope, $scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - На разходка с Поли');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("poli");
    }

    angular.module('rozLi.controllers')
        .controller('PoliController', ['$rootScope', '$scope', 'PageTitle', PoliController]);
} ());