'use strict';

angular.module('arsiaApp')
  .service('profileService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var userInfo={};

    return {
      getUserInfo: function(userId,callback){
        // TODO get from DB, for now return mock data
        callback(getMockUserData());
      }
    }
  });


function getMockUserData() {
  var mockUserData = {
    name:"Varun Sood",
    title: "Software Engineer",
    location: "Sunnyvale, California"
  }
  return mockUserData;
}
