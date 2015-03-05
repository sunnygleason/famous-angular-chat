(function() {
  'use strict';
  angular.module('PubNubAngularApp', ["pubnub.angular.service", "ngRoute", "famous.angular", "ui.router"]).config(function($routeProvider) {
    return $routeProvider.when('/join', {
      templateUrl: 'views/join.html',
      controller: 'JoinCtrl'
    }).when('/chat', {
      templateUrl: 'views/chat.html',
      controller: 'ChatCtrl'
    }).otherwise({
      redirectTo: '/join'
    });
  });

}).call(this);
