var Seeds = this.Seeds = new Meteor.Collection("seeds");
var Users = this.Users = new Meteor.Collection("users");

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
        markerMendez.bindPopup("<b>Hello world!</b><br>Bolivia");

        var markerDell = L.marker([-14.0000, -172.0000]).addTo(map);
        markerDell.bindPopup("<b>Hello world!</b><br>Samoa");

        var markerAlHarazi = L.marker([15.0000, 48.0000]).addTo(map);
        markerAlHarazi.bindPopup("<b>Hello world!</b><br>Yemen");

        var markerAdi = L.marker([-13.8333, -171.7500]).addTo(map);
        markerAdi.bindPopup("<b>Hello world!</b><br>Samoa");

        var markerChakraborty = L.marker([21.0000, 78.0000]).addTo(map);
        markerChakraborty.bindPopup("<b>Hello world!</b><br>India");

        var markerXingjuan = L.marker([39.9139, 116.3917]).addTo(map);
        markerXingjuan.bindPopup("<b>Hello world!</b><br>China");

        var markerZafar = L.marker([29.4000, 69.1833]).addTo(map);
        markerZafar.bindPopup("<b>Hello world!</b><br>Pakistan");

        var markerDzogbenuku = L.marker([7.6833, -0.9833]).addTo(map);
        markerDzogbenuku.bindPopup("<b>Hello world!</b><br>Ghana");

        var markerShaltiel = L.marker([7.1881, 21.0936]).addTo(map);
        markerShaltiel.bindPopup("<b>Hello world!</b><br>Africa");

        // Plot coordinates from locations table
        // var info = {{ master_json | safe }};
        // for (var i = 0; i < info.length; i++) {
        //     var a = info[i];
        //     var name = a[0];
        //     var email = a[1];
        //     if (email == null) {
        //         email = "None - info via SMS";
        //     }
        //     var phone = a[2];
        //     var address = a[3];
        //     var supply = a[6];
        //     var comment = a[7];
        //     var marker = L.marker(new L.LatLng(a[4], a[5]), {
        //         icon: blueIcon,
        //         name: name,
        //         email: email,
        //         phone: phone,
        //         address: address,
        //         supply: supply,
        //         comment: comment
        //     });
        //     marker.bindPopup(
        //         "<b>Name:</b> " + name + "<br>" +
        //         "<b>Email:</b> " + email + "<br>" +
        //         "<b>Phone:</b> " + phone + "<br>" +
        //         "<b>Address:</b> " + address + "<br>" +
        //         "<b>Supply:</b> " + supply + "<br>" +
        //         "<b>Comment: </b>" + comment
        //     );
        //     markers.addLayer(marker);
        // };

        // map.addLayer(markers);

      // }
    // data: function () {
    //     return {
    //         // seeds: Seeds.find().fetch()
    //     };
    // }
      }
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

        if(!seed) // seed needs to load async
            return;

        // console.log(seed);
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
