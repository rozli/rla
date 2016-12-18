(function () {
    'use strict';

    function GoosesController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleGooses);

        $scope.gSlider = $rootScope.bXmasSlider;

        rozLiJs.initializeGallery("guski");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_guski_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleGooses;
    }

    angular.module('rozLi.controllers')
        .controller('GoosesController', ['$scope', '$rootScope', '$location', 'PageTitle', GoosesController]);
}());