'use strict';

angular.module('arsiaApp')
  .controller('MainCtrl',['$scope','$http', '$modal', 'auth', function ($scope, $http, $modal, auth) {
    $scope.user={
      name:"varun",
      password:"123",
      email:"v@run"
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

    //VS! support to login through Modal window. Presently, not being used.
    $scope.open = function () {
      $modal.open({
        templateUrl: 'app/main/login_modal.html',
        backdrop: true,
        windowClass: 'modal',
        controller: function ($scope, $modalInstance, $log, user) {
          $scope.user = user;
          $scope.submit = function () {
            $log.log('Submiting user info.');
            $log.log(user);
            $modalInstance.dismiss('cancel');
          }
          $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
          };
        },
        resolve: {
          user: function () {
            return $scope.user;
          }
        }
      });
    };

  }]);
