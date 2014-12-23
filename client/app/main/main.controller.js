'use strict';

angular.module('arsiaApp')
  .controller('MainCtrl',['$scope','$http', 'auth', function ($scope, $http, auth) {
    $scope.user={
      name:"",
      password:"",
      email:""
    };

    $scope.placeholderMsg = {
      email:"email"
    }

    $scope.loggedIn=false;

    $scope.login = function(){
      auth.loginUser($scope.user.email, $scope.user.password,function(data){
        if(data && data.id != "" && data.message=="success"){
          $scope.loggedIn=true;
        }
        else {
          $scope.placeholderMsg.email = data.message;
          $scope.user = {};
        }
      });
    };

    $scope.signUp = function(){
      auth.signUpUser($scope.user.name, $scope.user.email, $scope.user.password,function(data){
        if(data && data.id!="" && data.message=="success"){
          $scope.loggedIn=true;
        }
        else {
          $scope.placeholderMsg.email = data.message;
          $scope.user = {};
        }
      });
    };

    $scope.logout = function(){
      auth.logoutUser($scope.user.email, function(loggedOut){
        if(loggedOut){
          $scope.loggedIn=false;
          $scope.user={};
        }
      });
    };
  }]);
