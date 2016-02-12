(function() {
  'use strict';

  angular
    .module('wagecomp')
    .controller('AccessCtrl', AccessCtrl);

  // AccessCtrl.$inject = ['$scope'];

  function AccessCtrl() {
    console.log('Hello from AccessCtrl!');
  }
}());
