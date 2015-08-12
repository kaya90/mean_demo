// Lets create our angular module
var friends_app = angular.module('friends_app', []);
// Now lets create a controller with some hardcoded data!
friends_app.controller('FriendsController', function($scope, FriendFactory, $location) {
	var that = this;
	this.friends = FriendFactory.getFriends(function(data) {
	console.log(data, "from get getfriends factory");
	that.friends = data;
  // anything else that you want to happen after you getFriends needs to be inside of this callback
	});

	this.addfriend = function (){
	  	if (this.new_friend) {
		  	FriendFactory.addFriend(this.new_friend, function() {

			});
	  		that.new_friend = {};
	  	};
  	};
});
      