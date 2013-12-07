var Seeds = this.Seeds = new Meteor.Collection("seeds");
var Users = this.Users = new Meteor.Collection("users");
var Engagements = this.Engagements = new Meteor.Collection("engagements");

if (Meteor.isClient) {
  Template.home.greeting = function () {
    return "Here is some home.";
  };

  Template.home.activity = [1, 2, 3, 4, 8, 5];

  Template.home.events({
    'click .btn-like' : function (e,tmpl){
       Engagement.update(Session.get("engagementCount"), {$inc: {count:1}});
    },
    'click .btn-comment': function (e,tmpl){

    },
    'click .btn-inspiration': function (e,tmpl){

    },
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
  Template.map.rendered = function () {
        console.log("html has been rendered, starting on the map fn");
        var baseLayer = L.tileLayer(
            'http://{s}.tile.cloudmade.com/38be25219f7c4b6f8953354a1b2e583f/82651/256/{z}/{x}/{y}.png',
            {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                maxZoom: 18
            }
        );

        var map = new L.Map('map', {
            zoomControl: false,
            center: new L.LatLng(12.0000, 8.5167),
            zoom: 2,
            layers: [baseLayer]
        });
        new L.Control.Zoom({
            position: 'topright'
        }).addTo(map);

        L.Icon.Default.imagePath = 'packages/leaflet/images';

        var markerMendez = L.marker([-16.7120, -64.6660]).addTo(map);
        markerMendez.bindPopup("<a href='/user/1'><b>Maria Claudia Mendez</b></a><br>Bolivia");

        var markerDell = L.marker([-14.0000, -172.0000]).addTo(map);
        markerDell.bindPopup("<a href='/user/2'><b>Phelicia Dell</b></a><br>Samoa");

        var markerAlHarazi = L.marker([15.0000, 48.0000]).addTo(map);
        markerAlHarazi.bindPopup("<a href='/user/3'><b>Shatha Al-Harazi</b></a><br>Yemen");

        var markerAdi = L.marker([-13.8333, -171.7500]).addTo(map);
        markerAdi.bindPopup("<a href='/user/4'><b>Adimaimalaga Tafuna'i</b></a><br>Samoa");

        var markerChakraborty = L.marker([21.0000, 78.0000]).addTo(map);
        markerChakraborty.bindPopup("<a href='/user/5'><b>Sohini Chakraborty</b></a><br>India");

        var markerXingjuan = L.marker([39.9139, 116.3917]).addTo(map);
        markerXingjuan.bindPopup("<a href='/user/6'><b>Wang Xingjuan</b></a><br>China");

        var markerZafar = L.marker([29.4000, 69.1833]).addTo(map);
        markerZafar.bindPopup("<a href='/user/7'><b>Roshaneh Zafar</b></a><br>Pakistan");

        var markerDzogbenuku = L.marker([7.6833, -0.9833]).addTo(map);
        markerDzogbenuku.bindPopup("<a href='/user/8'><b>Brigitte Dzogbenuku</b></a><br>Ghana");

        var markerShaltiel = L.marker([7.1881, 21.0936]).addTo(map);
        markerShaltiel.bindPopup("<a href='/user/9'><b>Doron Shaltiel</b></a><br>Africa");

        var markerLolosoli = L.marker([-1.2667, 36.8000]).addTo(map);
        markerLolosoli.bindPopup("<a href='/user/9'><b>Rebecca Lolosoli</b></a><br>Africa");

      };
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
    template: 'home',
    data: function () {
        return {
            seeds: Seeds.find().fetch()
        };
    }
  });

  this.route('map', {
    path: '/map',
    template: 'map',

  });

  /**
   * The route's name is "posts"
   * The route's path is "/posts"
   * The route's template is inferred to be "posts"
   */
  this.route('seed', {
    path: '/seed/:sys_id',

    // Data is information that gets sent to the template. It's the `context`
    data: function () {

        var seed = Seeds.findOne({sys_id: this.params.sys_id});
        console.log(this.params.sys_id, seed);

        if(!seed) // seed needs to load async
            return;

        console.log(seed.sys_id);
        seed.engagements = Engagements.find({seed_id: seed.sys_id}).fetch();
        seed.author = Users.findOne({sys_id: seed.author_id});

        return seed;
    }
  });

  // this.route('post', {
  //   path: '/posts/:_id',

  //   load: function () {
  //     // called on first load
  //   },

  //   // before hooks are run before your action
  //   before: [
  //     function () {
  //       this.subscribe('post', this.params._id).wait();
  //       this.subscribe('posts'); // don't wait
  //     },

  //     function () {
  //       // we're done waiting on all subs
  //       if (this.ready()) {
  //         NProgress.done();
  //       } else {
  //         NProgress.start();
  //         this.stop(); // stop downstream funcs from running
  //       }
  //     }
  //   ],

  //   action: function () {
  //     var params = this.params; // including query params
  //     var hash = this.hash;
  //     var isFirstRun = this.isFirstRun;

  //     this.render(); // render all
  //     this.render('specificTemplate', {to: 'namedYield'});
  //   },

  //   unload: function () {
  //     // before a new route is run
  //   }
  // });
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
