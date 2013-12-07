var users = [{
    name: "Maria Claudia Mendez, Bolivia",
    location: "Latin America and the Caribbean",
    interests: "Mentoring",
    program: "2006 FORTUNE/U.S. State Department Global Women's Mentoring Partnership Alumna",
}, {
    name: "Phelicia Dell, Samoa",
    location: "Latin American and the Caribbean",
}, {
    name: "Shatha Al-Harazi, Yemen",
    location: "Middle East and North Africa",
}, {
    name: "Adimaimalaga (Adi) Tafuna'i, Samoa",
    location: "Latin American and the Caribbean",
    interests: "Economic Empowerment",
}, {
    name: "Sohini Chakraborty, India",
    location: "Asia and the Pacific Islands",
    interests: "Human Rights",
}, {
    name: "Wang Xingjuan, China",
    location: "Asia and the Pacific Islands",
}, {
    name: "Roshaneh Zafar, Pakistan",
    location: "Asia and the Pacific Islands",
    interests: "Economic Empowerment",
}, {
    name: "Brigitte Dzogbenuku, Ghana",
    location: "Africa",
    program: "2008 FORTUNE/U.S. State Department Global Women's Mentoring Partnership Alumna",
}, {
    name: "Doron Shaltiel",
    location: "Africa",
    program: "2009 Vital Voices Entrepreneurs in Handcrafts Training Program in Kenya Alumna",
}];


var posts = [{
    name: 'Title',


}, {


}];


if (Meteor.isServer) {
    Meteor.startup(function () {
        // Add all seeds
        this.Seeds.remove({});
        posts.forEach(function (fixture) {
            this.Seeds.insert(fixture);
        });

        // Add all users
        this.Users.remove({});
        users.forEach(function (fixture) {
            this.Users.insert(fixture);
        });

    });
}
