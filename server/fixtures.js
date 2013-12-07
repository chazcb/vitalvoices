var users = [{
    name: "Maria Claudia Mendez, Bolivia",
    location: "Latin America and the Caribbean",
    interests: "Mentoring",
    avatar: 'brigitte_dzogbenuku.png',
    program: "2006 FORTUNE/U.S. State Department Global Women's Mentoring Partnership Alumna",
}, {
    name: "Phelicia Dell, Samoa",
    location: "Latin American and the Caribbean",
    avatar: 'doron_shaltiel.png',
}, {
    name: "Shatha Al-Harazi, Yemen",
    location: "Middle East and North Africa",
    avatar: 'maria_claudia_mendez.png',
}, {
    name: "Adimaimalaga (Adi) Tafuna'i, Samoa",
    location: "Latin American and the Caribbean",
    interests: "Economic Empowerment",
    avatar: 'phelicia_dell.png',
}, {
    name: "Sohini Chakraborty, India",
    location: "Asia and the Pacific Islands",
    interests: "Human Rights",
    avatar: 'roshaneh_zafar.png',
}, {
    name: "Wang Xingjuan, China",
    location: "Asia and the Pacific Islands",
    avatar: 'sohini_chakraborty.png',
}, {
    name: "Roshaneh Zafar, Pakistan",
    location: "Asia and the Pacific Islands",
    interests: "Economic Empowerment",
    avatar: 'wang_xingjuan.png',
}, {
    name: "Brigitte Dzogbenuku, Ghana",
    location: "Africa",
    program: "2008 FORTUNE/U.S. State Department Global Women's Mentoring Partnership Alumna",
    avatar: 'brigitte_dzogbenuku.png',
}, {
    name: "Doron Shaltiel",
    location: "Africa",
    program: "2009 Vital Voices Entrepreneurs in Handcrafts Training Program in Kenya Alumna",
    avatar: 'brigitte_dzogbenuku.png',
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
