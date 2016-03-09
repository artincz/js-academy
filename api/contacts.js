var _ = require('lodash');

var contacts = [
  {id: 1, name: 'Donald Black', company: 'Topicware', phone: '6-(880)062-6935', email: 'dblack0@mashable.com', note: 'Lorem ipsum'},
  {id: 2, name: 'Frank Little', company: 'Browseblab', phone: '9-(804)406-9373', email: 'flittle2@tumblr.com', note: 'Lorem ipsum'}
];

module.exports = {
  find: function(id) {
    return _.cloneDeep(_.find(contacts, {id: +id}));
  },

  findAll: function() {
    return _.cloneDeep(contacts);
  }
};