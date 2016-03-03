(function(){
//    var socialNetwork = angular.module("socialNetwork",["ui.router"]);
    angular.module("socialNetwork",["ui.router"])
        .config(function($stateProvider){
        
        $stateProvider
        
        .state("signup", {
            
            url: "/signup",
            templateUrl: "app/signup/signup.html",
            controller: "signupController"
            
        })
        
    })
    
}());