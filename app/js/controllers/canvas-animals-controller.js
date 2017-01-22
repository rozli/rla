(function () {
    'use strict';

    function CanvasAnimalsController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.canvasAnimals);

        $scope.smSlider = $rootScope.paintingsSlider;

        rozLiJs.initializeZoom("canvas-animals");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_canvas_animals_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.canvasAnimals;
    }

    angular.module('rozLi.controllers')
        .controller('CanvasAnimalsController', ['$scope', '$rootScope', '$location', 'PageTitle', CanvasAnimalsController]);
}());