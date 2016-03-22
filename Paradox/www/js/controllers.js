angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','$firebaseArray','$rootScope','$cordovaCamera'function($scope, $firebaseArray, $rootScope,$cordovaCamera) {
 
      //creating firebase reference  
      var ref = new Firebase("https://paradoxapp.firebaseio.com/")
      $scope.posts = $firebaseArray(ref);
     
      //function for choosing pictures from photo library
      $scope.choosePhoto = function () {
                      var options = {
                        quality: 75,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                        allowEdit: true,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 300,
                        targetHeight: 300,
                        popoverOptions: CameraPopoverOptions,
                        saveToPhotoAlbum: false
                    };
       
                        $cordovaCamera.getPicture(options).then(function (imageData) {
                            $scope.imgURI = "data:image/jpeg;base64," + imageData;
                        }, function (err) {
                            // An error occured. Show a message to the user
                        });
                    }
      var prev = $scope;

      $scope.addPost = function(post) {
        $scope.posts.$add({
          user : guest,
          question : post.question,
          pic1 : prev.choosePhoto,
          pic2 : post.choosePhoto
        })
      }
}]) 

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
