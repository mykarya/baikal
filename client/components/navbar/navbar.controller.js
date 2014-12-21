'use strict';

angular.module('arsiaApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    // VS! Yo stuff. To be removed
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
