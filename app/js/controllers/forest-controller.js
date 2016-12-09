(function () {
    'use strict';

    function ForestController($scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Живот в гората');

        rozLiJs.initialize();
        rozLiJs.initializeGallery("forest");
    }

    angular.module('rozLi.controllers')
        .controller('ForestController', ['$scope', 'PageTitle', ForestController]);
} ());