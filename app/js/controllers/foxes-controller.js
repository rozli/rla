(function () {
    'use strict';

    function FoxyController($scope, $sce, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - ' + $rootScope.texts.bottleFoxy);

        $scope.fSlider = {
            imageUrl: '../../images/s_decoupage_1.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml('Направенo с <i class="icon-heart3"></i> от <a href="https://www.rozliart.com">RozLi Art</a>')
        };

        rozLiJs.initializeZoom("foxes");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_foxy_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + $rootScope.texts.bottleFoxy;
    }

    angular.module('rozLi.controllers')
        .controller('FoxyController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', FoxyController]);
} ());