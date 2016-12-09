(function () {
    'use strict';

    function BikeController($scope, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - На море с колело');

        rozLiJs.initialize();
        rozLiJs.initializeZoom("bike");
    }

    angular.module('rozLi.controllers')
        .controller('BikeController', ['$scope', 'PageTitle', BikeController]);
} ());