'use strict';

angular.module('firstNgAppApp')
.controller('MainCtrl', function ($scope,Contacts,$rootScope) {
	if($rootScope.sessionId!=null){
		$scope.view = 'login';
	}
	console.log($rootScope.username);
	Contacts.getAll(function(data){
		console.log(data);
		$scope.contacts=data.results;
		console.log($scope.contacts);
	});
	$scope.getComment=function(project){
		console.log(project);
		Contacts.getAllComment(project,function(data){
			console.log(data);
			$scope.comments=data.results;
			console.log($scope.comments);
		});
	};
	$scope.logout = function(){
		$rootScope.sessionId=null;
		$rootScope.username=null;
		window.location=/#/;
	}
	$scope.getDate=function(object){
		var date=new Date(object.iso);
		console.log(date);
		return date.toDateString();
	};
	$scope.add = function(comment,project){
		console.log('working');
		Contacts.addComment(comment,project,function(data){
			console.log(data);
			

		});
		window.location.reload();
	};
});
