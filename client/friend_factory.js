// create the FriendFactory
friends_app.factory('FriendFactory', function($http) {
  var factory = {};
  var friends = [{name: "Michael", age: 34}];
  factory.getFriends = function(callback) {
  // Where do we get access to $http?
  console.log('here')
    $http.get('/friends').success(function(output) {
      friends = output;
      callback(friends);
    }); 
  };
  // note the use of callbacks!
  factory.addFriend = function(info, callback) {
    $http.post('/friends', info).success(function(data){console.log(data);});
    if (info && info.name && info.age) {

      friends.push({name: info.name, age: info.age});
    }
    callback(friends);
  }
  return factory;
});