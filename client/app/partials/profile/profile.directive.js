'use strict';

angular.module('arsiaApp')
  .directive('profile',['profileService', function (profileService) {
    return {
      templateUrl: 'app/partials/profile/profile.html',
      restrict: 'EA',
      scope: {},
      controller: function($scope){
        $scope.profileUser = {};

        $scope.initUserData = function() {
          profileService.getUserInfo("",function(userInfo){
            $scope.profileUser = userInfo;
          })
        };
        $scope.initUserData();
      },
      link: function (scope, element, attrs) {
      }
    };
  }]);
