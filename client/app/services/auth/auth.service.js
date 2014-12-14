'use strict';

angular.module('arsiaApp')
  .service('auth', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var anyPrivateVar = {};

    return {
      loginUser: function(email,password){
        if(email != "" && password !=""){
          return true;
        }
      },
      logoutUser: function(){
        return true;
      },
      signUpUser: function(name,password,email){
        user.name = name;
        user.password = password;
        user.email = email;
        return true;
      }
    }
  });
