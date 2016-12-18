(function () {
    'use strict';

    function ForestController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Живот в гората');

        $scope.dSlider = $rootScope.bottlesSlider;

        rozLiJs.initializeGallery("forest");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_forest_2.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleForest;
    }

    angular.module('rozLi.controllers')
        .controller('ForestController', ['$scope', '$rootScope', '$location', 'PageTitle', ForestController]);
}());