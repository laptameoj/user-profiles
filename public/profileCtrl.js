angular.module('userProfiles')
	.controller('profileCtrl', function( $scope, friendService, userInfo ) {
		$scope.currentUser = userInfo.currentUser;//FIX ME
		$scope.friends = userInfo.friends;//FIX ME
		// init();
		//
		// function init(){
		// 	friendService.getFriends()
		// 		.then(function(results){
		// 			$scope.currentUser = results.data.currentUser;
		// 			$scope.friends = results.data.friends;
		// 		});
		// }
	} );
