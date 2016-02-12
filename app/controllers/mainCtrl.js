(function() {
  'use strict';

  angular
    .module('wagecomp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'Utils'];

  function MainCtrl($scope, Utils) {
    console.log('Hello from MainCtrl!');
    var developMode,
      gui = require('nw.gui'),
      win = gui.Window.get(),
      wageComp = Utils.wageComp;

    $scope.inpts = {
      eur: null,
      crm: null,
      exr: null
    };

    $scope.$watch('inpts', function(newVal, oldVal) {
      $scope.results = wageComp(newVal.eur, newVal.crm, newVal.exr);
    }, true);

    // all console.log calls are removed when packaging; cool huh? :D
    console.log(developMode = true);

    if(developMode) {
      win.showDevTools();
    }
  }
}());
