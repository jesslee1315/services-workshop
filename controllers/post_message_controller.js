app.controller('PostMessageController', function ($scope, $location, MessagesService) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"
  $scope.submitMessage=function(){
    MessagesService.add({text: $scope.input})
    $location.url('http://localhost:8000/#')
  }
})
