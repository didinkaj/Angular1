//  Bootstrapping

var app = angular.module('toDoApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.

    when('/calculator', {
        templateUrl: 'calculator.html',
        controller: 'calculatorController'
    }).

    when('/tasks', {
        templateUrl: 'tasks.html',
        controller: 'toDoController'
    }).

    when('/', {
        templateUrl: 'index.html',
    }).

    otherwise({
        redirectTo: '/'
    });
}]);

app.controller('calculatorController', ['$scope', function($scope){
    
}]);
    //Controller
app.controller('toDoController', ['$scope', function($scope) {

            //Scope
    $scope.tasks = [{
        id:1,
        name:'study angular',
        date:"27/6/2018"

    },
        {
            id:2,
            name:'study node',
            date:"27/6/2018"

        },
        {
            id:3,
            name:'Project a',
            date:"27/6/2018"

        }
    ];
    $scope.completed = [];

    $scope.newTaskName = '';


 //adding a task to task list

    $scope.addTask = function() {

        var name = $scope.newTaskName;

        let id = this.tasks.length +1;

        let date = new Date();

        if (name && $scope.tasks.indexOf(name) == -1 && $scope.completed.indexOf(name)) {

            $scope.tasks.push({
                name:name,
                id:id,
                date:date
            });

            $scope.newTaskName = '';
        }
    };
//-----deleting a task
    $scope.deleteTask = function(task){

        this.tasks.pop(task);

    }

 //-------------scope-------- using inbuilt array functions push and splice- add/remove items from array and return removed items

    $scope.markcomplete = function(index, completedTaskArray, pendingTaskArray) {

        pendingTaskArray.push(completedTaskArray[index]);

        completedTaskArray.splice(index, 1);
    }

// Add Custom filters
    $scope.searchTask = function (dollars) {
        
    }


}]);