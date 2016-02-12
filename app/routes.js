(function() {
  'use strict';

  angular
    .module('wagecomp')
    .config(AppConfig)
    .run(AppRun);

  AppConfig.$inject = ['$routeProvider', '$locationProvider'];
  AppRun.$inject = ['$rootScope', '$location'];

  function AppConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'app/partials/main.html',
        controllerAs: 'mainCtrl'
      })
      .when('/analytics', {
        controller: 'AnalyticsCtrl',
        templateUrl: 'app/partials/analytics.html',
        controllerAs: 'analyticsCtrl'
      })
      .when('/billing', {
        controller: 'BillingCtrl',
        templateUrl: 'app/partials/settings/billing.html',
        controllerAs: 'billingCtrl'
      })
      .when('/access', {
        controller: 'AccessCtrl',
        templateUrl: 'app/partials/settings/access.html',
        controllerAs: 'accessCtrl'
      })
      .otherwise({ redirectTo: '/' });
  }

  function AppRun($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
    });
  }


}());
