(function(){
	angular.module('Paradox',['ui.router','ngFileUpload'])
			.config(function($stateProvider){
				$stateProvider
					.state('signUp', {
						url:'/signup',
						templateUrl:'/webApp/signup/signup.html',
						controller: 'SignupController'
					})
					.state('editProfile',{
						url:'/edit-profile',
						templateUrl: '/webApp/profile/edit-profile-view.html',
						controller: 'EditProfileController'
					})
			})
}());