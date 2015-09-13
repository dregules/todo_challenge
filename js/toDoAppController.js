toDoListApplication.controller('toDoAppController', [function(){
  var self = this;
  self.taskList = [];

  self.addTask = function(taskDescription){
    var task = {};
    task.description = taskDescription;
    task.done = false;
    self.taskList.push(task);
  };
  self.removeTask = function(index) {
    self.taskList.splice(index,1);
  };

}]);