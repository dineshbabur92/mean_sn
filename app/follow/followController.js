(function(){
    
    angular.module("socialNetwork")
        .controller("followController",["$scope", "$http", "$state", function($scope, $http, $state){
            
            $scope.myuserid = JSON.parse(localStorage.udata).userid;
            
            $http.get("/users").then(function(res){
                
                $scope.users = res.data
                console.log($scope.users);
                
            });
            
    }]);
    
}());