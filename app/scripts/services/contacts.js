'use strict';

angular.module('firstNgAppApp')
.factory('Contacts', ['$http', function($http) {
	var appId	= 'awsRoC0mgoBokhrwDEd7O9tHJoY9fpDTjDoMWYIQ';
	var apiKey	= 'u0lb7443cosZ7GNjtBnVNAKfCg7GCiAVjlNXgG2S';

	return {
		addProject : function(data,user,callback){
	//		console.log(q);
			$http({

				method: 'POST',
				url:'https://api.parse.com/1/classes/project',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				},
				data: {
					projectName:data.projectName,
					where:data.where,
					detail:data.detail,
					user:user,
					when:{'__type': 'Date',
					'iso': data.when}
				}
			})
			.success(function(data) {
				console.log(data);
				callback(data);
			});
		},
		addComment : function(comment,project,user,callback){
	//		console.log(q);
			$http({

				method: 'POST',
				url:'https://api.parse.com/1/classes/comment',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				},
				data: {
					comment:comment,
					project:project,
					user:user
				}
			})
			.success(function(data) {
				console.log(data);
				callback(data);
			});
		},
		addJoin : function(project,user,callback){
	//		console.log(q);
			$http({

				method: 'POST',
				url:'https://api.parse.com/1/classes/join',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				},
				data: {
					project:project,
					user:user
				}
			})
			.success(function(data) {
				console.log(data);
				callback(data);
			});
		},
		getAll : function(callback){
			console.log('GetAll');
			$http({
				method: 'GET',
				url:'https://api.parse.com/1/classes/project',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data) {
				console.log(data);
				console.log('success');
				callback(data);
			})
			.error(function(data){
				console.log('error'+data);
			});
		},
		getAllComment : function(project,callback){
			console.log('GetAll');
			$http({
				params: {
					where: {project:project}
                },
				method: 'GET',
				url:'https://api.parse.com/1/classes/comment',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data) {
				console.log(data);
				console.log('success');
				callback(data);
			})
			.error(function(data){
				console.log('error'+data);
			});
		},
		getAllJoin : function(project,callback){
			console.log(project);
			$http({
				params: {
					where: {project:project}
                },
				method: 'GET',
				url:'https://api.parse.com/1/classes/join',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data) {
				console.log(data);
				console.log('success');
				callback(data);
			})
			.error(function(data){
				console.log('error'+data);
			});
		},
		login : function(data,callback){
			console.log('GetAll');
			$http({
				params: {
					username:data.username,
					password:data.password
                },
				method: 'GET',
				url:'https://api.parse.com/1/login',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data) {
				console.log(data);
				console.log('success');
				callback(data);
			})
			.error(function(data){
				console.log('error'+data);
			});
		},
		register : function(data,callback){
	//		console.log(q);
			$http({

				method: 'POST',
				url:'https://api.parse.com/1/users',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				},
				data: {
					username:data.username,
					password:data.password,
					email:data.email,
					birthday:{'__type': 'Date',
					'iso': data.birthday}
				}
			})
			.success(function(data) {
				console.log(data);
				callback(data);
			});
		},
		getInfo : function(project,callback){
			console.log('GetAll');
			$http({
				params: {
					where: {objectId:project}
                },
				method: 'GET',
				url:'https://api.parse.com/1/classes/project',
				headers:
				{
					'X-Parse-Application-Id': appId,
					'X-Parse-REST-API-Key': apiKey,
					'Content-Type': 'application/json'
				}
			})
			.success(function(data) {
				console.log(data);
				console.log('success');
				callback(data);
			})
			.error(function(data){
				console.log('error'+data);
			});
		}
	};
}]);
