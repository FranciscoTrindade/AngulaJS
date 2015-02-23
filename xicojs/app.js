
var myApp = angular.module('myApp',[]);



// $scope  - injecção de independencia 



myApp.controller('mainController',function($scope,$window){
	$scope.teste='Hello World';

	$scope.link1='Home'; 
	$scope.link2='Introduction';
	$scope.link3='AngularJS';
	$scope.link4='Code';
	$scope.link7='About us'; 



    $scope.todos = [
        {text:'Learn AngularJS', done:false},
        {text:'Build an app', done:false}
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };

    $scope.addTodo = function () {
        $scope.todos.push({text:$scope.formTodoText, done:false});
        $scope.formTodoText = '';
    };

	$scope.openWebsite = function() {
    	$window.open($scope.link);
  	};

});



//model
var searchPeople = function (firstName, lastName, age, occupation){
    return 'Francisco Trindade';};



