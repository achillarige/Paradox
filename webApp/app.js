(function(){
	angular.module('Paradox',['ui.router'])
			.config(function($stateProvider){
				$stateProvider
					.state('signUp', {
						url:'/signup',
						templateUrl:'/webApp/signup/signup.html',
						controller: 'SignupController'
					})
			})
}());