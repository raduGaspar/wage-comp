(function() {
  'use strict';

  angular
    .module('wagecomp')
    .controller('BillingCtrl', BillingCtrl);

  // BillingCtrl.$inject = ['$scope'];

  function BillingCtrl() {
    console.log('Hello from BillingCtrl!');
  }
}());
