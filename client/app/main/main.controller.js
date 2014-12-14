'use strict';

angular.module('arsiaApp')
  .controller('MainCtrl',['$scope','$http', 'auth', function ($scope, $http, auth) {
    $scope.user={
      name:"",
      password:"",
      email:""
    };

    $scope.loggedIn=false;
    $scope.signUp=false;

    $scope.login = function(){
      if(auth.loginUser($scope.user.email,$scope.user.password)) {
        $scope.loggedIn=true;
      }
    };

    $scope.logout = function(){
      if(auth.logoutUser()) {
        $scope.loggedIn=false;
        $scope.user={};
      }
    };

    $scope.signUp = function(){
      $scope.signUp = true;
    }

    // Yo stuff
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

  }]);
