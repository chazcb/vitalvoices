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

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  /**
   * The route's name is "home"
   * The route's template is also "home"
   * The default action will render the home template
   */
  this.route('home', {
    path: '/',
    template: 'home'
  });

  /**
   * The route's name is "posts"
   * The route's path is "/posts"
   * The route's template is inferred to be "posts"
   */
  this.route('posts', {
    path: '/posts'
  });

  this.route('post', {
    path: '/posts/:_id',

    load: function () {
      // called on first load
    },

    // before hooks are run before your action
    before: [
      function () {
        this.subscribe('post', this.params._id).wait();
        this.subscribe('posts'); // don't wait
      },

      function () {
        // we're done waiting on all subs
        if (this.ready()) {
          NProgress.done();
        } else {
          NProgress.start();
          this.stop(); // stop downstream funcs from running
        }
      }
    ],

    action: function () {
      var params = this.params; // including query params
      var hash = this.hash;
      var isFirstRun = this.isFirstRun;

      this.render(); // render all
      this.render('specificTemplate', {to: 'namedYield'});
    },

    unload: function () {
      // before a new route is run
    }
  });
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
