'use strict';

angular.module('firstNgAppApp')
.controller('ProjectInfoCtrl', function ($scope,$routeParams,Contacts,$rootScope) {
	if($rootScope.sessionId!=null){
		$scope.view = 'login';
	}
	$scope.project=$routeParams.projectId;
	console.log($routeParams.projectId);
	Contacts.getInfo($routeParams.projectId,function(data){
		console.log(data.results);
		$scope.detail=data.results[0];
		console.log($routeParams.projectId);
		Contacts.getAllComment($routeParams.projectId,function(data){
			console.log(data);
			$scope.comments=data.results;
			console.log($scope.comments);
		});
		Contacts.getAllJoin($routeParams.projectId,function(data){
			console.log(data);
			$scope.joinlist=data.results;
			console.log($scope.joinlist);
		});
		$scope.getDate=function(object){
			var date=new Date(object.iso);
			console.log(date);
			return date.toDateString();
		};
		$scope.logout = function(){
			$rootScope.sessionId=null;
			$rootScope.username=null;
			window.location=/#/;
		}
		$scope.add = function(comment,project){
			console.log('working');
			Contacts.addComment(comment,project,$rootScope.username,function(data){
				console.log(data);
				//window.location='/#/project-info/' + $scope.project;
				Contacts.getAllComment($routeParams.projectId,function(data){
					console.log(data);
					$scope.comments=data.results;
					console.log($scope.comments);
				});

			});
			
		};
		$scope.join = function(project){
			console.log('working');
			Contacts.addJoin(project,$rootScope.username,function(data){
				console.log(data);
				//window.location='/#/project-info/' + $scope.project;
				Contacts.getAllJoin($routeParams.projectId,function(data){
					console.log(data);
					$scope.joinlist=data.results;
					console.log($scope.joinlist);
				});

			});
			
		};

	});
});