(function(){
//    var socialNetwork = angular.module("socialNetwork",["ui.router"]);
    angular.module("socialNetwork",["ui.router", "ngFileUpload"])
        .config(function($stateProvider){
        
        $stateProvider
        
        .state("signup", {
            
            url: "/signup",
            templateUrl: "app/signup/signup.html",
            controller: "signupController"
            
        })
        
        .state("edit", {
            
            url: "/edit",
            templateUrl:"app/edit/edit.html",
            controller: "editController"
            
        })
        
    })
    
}());