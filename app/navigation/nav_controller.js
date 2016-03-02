(function(){
    
    angular.module("socialNetwork",["ui.router"])
    .controller("navController",["$scope", "$state", "$http", function($scope, $state, $http){
        
        $scope.login = function(){
            
            $http.post("/login",$scope.login).success(function(res){
                
                console.log("success");
                localStorage.udata = res;
                console.log(localStorage);
                
            }).error(function(err){
                
                console.log(err);
                
            });

        }
        
    }]);
    
}());