'use strict';

angular.module('arsiaApp')
  .service('auth',['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var anyPrivateVar = {};

    return {
      loginUser: function(email,password,callback){
        $http.post('/api/user/login', {'email':email,'password':password}).
          success(function(data, status, headers, config) {
            callback(data);
          }).
          error(function(data, status, headers, config) {
            callback(data);
          });

      },

      signUpUser: function(name,email,password,callback){
        $http.post('/api/user/signUp', {'name':name, 'email':email,'password':password}).
          success(function(data, status, headers, config) {
            callback(data);
          }).
          error(function(data, status, headers, config) {
            callback(data);
          });
      },

      // TODO. clear user session/cookie in back-end once Passportjs implemented in backend.
      logoutUser: function(email,callback){
        callback(true);
      }
    }
  }]);
