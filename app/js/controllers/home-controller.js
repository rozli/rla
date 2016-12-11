(function() {
    'use strict';

    function HomeController($scope, $rootScope, $location, PageTitle) {
        var vm = this;

        $scope.Page = PageTitle;
        PageTitle.setTitle('RozLi - Начало');
        $('#over').hide();
        rozLiJs.initialize();

        // FB share params
        $rootScope.texts.fbShareURL = $rootScope.texts.url;
        $rootScope.texts.fbShareMedia = $rootScope.texts.url + '/images/s_xmas_bottles.jpg';
        $rootScope.texts.fbShareDesc = $rootScope.texts.fbStart + 'Украсете празничната си трапеза';

        $rootScope.$on('$routeChangeSuccess', function() {

            var location = $location.path();

            // use location to dynamically apply classes using the ng-class directive in the nav menu
            $scope.location = location;

            $scope.inChildren = location.indexOf('children') > 0;
            $scope.inDecoupage = location.indexOf('decoupage') > 0;
            $scope.inWeddings = location.indexOf('weddings') > 0;
            $scope.inHandmade = location.indexOf('handmade') > 0;
            $scope.inRocks = location.indexOf('decoupage/rocks') > 0;
            $scope.inBottles = location.indexOf('decoupage/bottles') > 0;
            $scope.inChamp = location.indexOf('weddings/champagne') > 0;
            $scope.inBaskets = location.indexOf('weddings/baskets') > 0;
            $scope.showFbShare =
                (location.length < 11 && location !== '/contact') ||
                location === '/decoupage/bottles' ||
                location === '/decoupage/rocks' ||
                location === '/weddings/champagne';
        });
    }

    angular.module('rozLi.controllers')
        .controller('HomeController', ['$scope', '$rootScope', '$location', 'PageTitle', HomeController]);
} ());