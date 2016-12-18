(function () {
    'use strict';

    function MatrioshkiController($scope, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleMatrioshki);

        $scope.mSlider = $rootScope.bXmasSlider;

        rozLiJs.initializeGallery("matrioshki");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_matrioshki_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleMatrioshki;
    }

    angular.module('rozLi.controllers')
        .controller('MatrioshkiController', ['$scope', '$rootScope', '$location', 'PageTitle', MatrioshkiController]);
}());