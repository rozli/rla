(function () {
    'use strict';

    function LighthouseController($scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Фарът');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("lighthouse");
    }

    angular.module('rozLi.controllers')
        .controller('LighthouseController', ['$scope', 'PageTitle', LighthouseController]);
} ());