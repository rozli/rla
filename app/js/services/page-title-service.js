(function () {
  'use strict';

  function title() {
    var title = 'RozLi Home';
    return {
      title: function() { return title; },
      setTitle: function(newTitle) { title = newTitle; }
    };
  }

  angular.module('rozLi.services')
    .factory('PageTitle', [title]);
}());