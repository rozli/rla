(function () {
    'use strict';

    function MagicController($scope, $rootScope, $location, $sce, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.champMagic);

        $scope.sSlider = $rootScope.champagneSlider;
        rozLiJs.initializeGallery("magic");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_cham_m_3.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.champMagic;
    }

    angular.module('rozLi.controllers')
        .controller('MagicController', ['$scope', '$rootScope', '$location', '$sce', 'PageTitle', MagicController]);
}());