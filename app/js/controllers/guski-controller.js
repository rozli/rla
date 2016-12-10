(function () {
    'use strict';

    function GuskiController($scope, $sce, $rootScope, $location, PageTitle) {
        var vm = this;
        PageTitle.setTitle('RozLi - Гъски тест');

        $scope.gSlider = {
            imageUrl: '../../images/s_decoupage_1.jpg',
            heading: $rootScope.texts.bottlesHeading,
            subheading: $sce.trustAsHtml('Направенo с <i class="icon-heart3"></i> от <a href="https://www.rozliart.com">RozLi Art</a>')
        };

        rozLiJs.initializeGallery("guski");

        $scope.fbShareURL = $rootScope.texts.url + $location.path();
        $scope.fbShareMedia = $rootScope.texts.url + '/images/p_bottle_guski_1.jpg';
        $scope.fbShareDesc = $rootScope.texts.fbStart + 'Декупаж върху бутилки, чаши и камъни';
    }

    angular.module('rozLi.controllers')
        .controller('GuskiController', ['$scope', '$sce', '$rootScope', '$location', 'PageTitle', GuskiController]);
} ());