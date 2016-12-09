(function () {
  'use strict';

  function PiponaController($rootScope, $scope, PageTitle) {
    var vm = this;
    PageTitle.setTitle('RozLi - Приказната вила Пипона');

    rozLiJs.initialize();
    rozLiJs.initializeGallery("pipona");
  }

  angular.module('rozLi.controllers')
    .controller('PiponaController', ['$rootScope', '$scope', 'PageTitle', PiponaController]);
} ());