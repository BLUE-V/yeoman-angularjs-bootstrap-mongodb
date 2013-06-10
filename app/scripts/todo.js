function TodoCtrl($scope) {
  $scope.todos = [
    {text:'Work at Gertrude', done:false},
    {text:'Meeting with Kenneth', done:true},
    {text:'Attend Wedding in Woodstock, NY', done:true},
    {text:'Remember the milk', done:false},
    {text:'User More AngularJS', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}