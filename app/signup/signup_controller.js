(function(){
    
    angular.module("socialNetwork")
        .controller("signupController", ["$scope", "$state", "$http", function($scope, $state, $http){
            
            $scope.createUser = function(){
                
                $http.post("/signup", {"email": $scope.email, "password": $scope.password}, function(response){
                    
                    console.log(response);
                    
                }, function(error){
                    
                    console.log(error);
                    
                });
                
            };
            
            
        }]);
    
}());