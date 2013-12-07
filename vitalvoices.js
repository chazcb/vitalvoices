// templates = ['news', 'main']

if (Meteor.isClient) {
  Template.news.greeting = function () {
    return "Here is some news.";
  };

  Template.news.activity = [1, 2, 3, 4, 8, 5];

  Template.news.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

Meteor.Router.add({
  '/main': 'main', // renders template 'news'

  // '/story/:id': 'story',

  // '*': 'not_found'
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
