
var myApp = angular.module('myApp',[]);



// $scope  - injecção de independencia 



myApp.controller('mainController',function($scope){
	$scope.teste='Hello World';

	$scope.link1='Home'; 
	$scope.link2='Introduction';
	$scope.link3='AngularJS';
	$scope.link4='Code';
	$scope.link7='About me'; 



	//console.log(searchPeople(1,2,3,4));
});



var searchPeople = function (firstName, lastName, age, occupation){
    return 'Francisco Trindade';
}