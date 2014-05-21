'use strict';

angular.module('firstNgAppApp')
  .controller('LoginCtrl', function ($scope,Contacts,$rootScope) {
  		if($rootScope.sessionId!=null){
		$scope.view = 'login';
	}
		$scope.add = function(input){
		Contacts.login(input,function(data){
			console.log(data);
			$rootScope.sessionId=data.sessionToken;
			$rootScope.username=data.username;
			window.location=/#/;

		});
		$scope.logout = function(){
			$rootScope.sessionId=null;
			$rootScope.username=null;
			window.location=/#/;
		}
	};
  });
