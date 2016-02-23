var app = angular.module('sample-app', []);
var contacts = [
  {name: 'Donald Black', company: 'Topicware', phone: '6-(880)062-6935', email: 'dblack0@mashable.com', note: 'Lorem ipsum'},
  {name: 'Frank Little', company: 'Browseblab', phone: '9-(804)406-9373', email: 'flittle2@tumblr.com', note: 'Lorem ipsum'}
];

app.controller('SampleAppController', function($scope){
  $scope.appName = 'SampleApp';
});

app.controller('ShowContactController', function($scope){
  $scope.contact = contacts[0];
});

app.controller('EditContactController', function($scope){
  $scope.contact = contacts[1];
});

app.controller('ContactListingController', function($scope){
  $scope.contacts = contacts;
});
