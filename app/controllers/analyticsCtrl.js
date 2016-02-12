(function() {
  'use strict';

  angular
    .module('wagecomp')
    .controller('AnalyticsCtrl', AnalyticsCtrl);

  // AnalyticsCtrl.$inject = ['$scope'];

  function AnalyticsCtrl() {
    console.log('Hello from AnalyticsCtrl!');
  }
}());
