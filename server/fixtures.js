var users = [{
    sys_id: '1',
    name: "Maria Claudia Mendez",
    country: "Bolivia",
    region: "Latin America and the Caribbean",
    interests: "Mentoring",
    avatar: 'brigitte_dzogbenuku.png',
    program: "2006 FORTUNE/U.S. State Department Global Women's Mentoring Partnership Alumna",
}, {
    sys_id: '2',
    name: "Phelicia Dell",
    country: "Samoa",
    region: "Latin American and the Caribbean",
    avatar: 'doron_shaltiel.png',
}, {
    sys_id: '3',
    name: "Shatha Al-Harazi",
    country: "Yemen",
    region: "Middle East and North Africa",
    avatar: 'maria_claudia_mendez.png',
}, {
    sys_id: '4',
    name: "Adimaimalaga (Adi) Tafuna'i",
    country: "Samoa",
    region: "Latin American and the Caribbean",
    interests: "Economic Empowerment",
    avatar: 'phelicia_dell.png',
}, {
    sys_id: '5',
    name: "Sohini Chakraborty",
    country: "India",
    region: "Asia and the Pacific Islands",
    interests: "Human Rights",
    avatar: 'roshaneh_zafar.png',
}, {
    sys_id: '6',
    name: "Wang Xingjuan",
    country: "China",
    region: "Asia and the Pacific Islands",
    avatar: 'sohini_chakraborty.png',
}, {
    sys_id: '7',
    name: "Roshaneh Zafar",
    country: "Pakistan",
    region: "Asia and the Pacific Islands",
    interests: "Economic Empowerment",
    avatar: 'wang_xingjuan.png',
}, {
    sys_id: '1',
    name: "Brigitte Dzogbenuku",
    country: "Ghana",
    region: "Africa",
    program: "2008 FORTUNE/U.S. State Department Global Women's Mentoring Partnership Alumna",
    avatar: 'brigitte_dzogbenuku.png',
}, {
    sys_id: '8',
    name: "Doron Shaltiel",
    country: "Africa",
    program: "2009 Vital Voices Entrepreneurs in Handcrafts Training Program in Kenya Alumna",
    avatar: 'brigitte_dzogbenuku.png',
}, {
    sys_id: '9',
    name: 'Rebecca Lolosoli',
    category: 'Human Rights',
    region: 'Africa'
}];

var posts = [{
    sys_id: '1',
    author_id: '9',
    category: 'Human Rights',
    region: 'Africa',
    standers: ['1', '2', '3', '4'],
    title_quote: 'Rebecca\'s Story',
    tags: ['inspirational'],
    thumbnails: [],
    comments: [{
        text: 'asdfasdf',
        author_id: '1'
    }, {
        text: 'asdfasdf',
        author_id: '1'
    }],
    related: ['2', '3'], // posts sys IDs
    main_content: "Rebecca Lolosoli is the matriarch of Umoja Uaso Women’s Village, a safe haven for women and girls fleeing abuse, as well as a training center for those seeking to promote human rights and economic development..."
}];

var engagements = [{
    sys_id: '1',
    type: 'like',
    author_id: '1',
    seed_id: '1'
}, {
    sys_id: '2',
    type: 'like',
    author_id: '2',
    seed_id: '1'
}, {
    sys_id: '3',
    type: 'like',
    author_id: '7',
    seed_id: '1'
}];


if (Meteor.isServer) {
    Meteor.startup(function () {

        // Drop all the things first
        this.Seeds.remove({});
        this.Users.remove({});
        this.Engagements.remove({});

        // Add all seeds
        posts.forEach(function (fixture) {
            console.log('Adding seed ' + fixture.sys_id);
            this.Seeds.insert(fixture);
        });

        // Add all users
        users.forEach(function (fixture) {
            console.log('Adding user ' + fixture.sys_id);
            this.Users.insert(fixture);
        });

        // Add all engagements
        engagements.forEach(function (fixture) {
            console.log('Adding engagement ' + fixture.sys_id);
            this.Engagements.insert(fixture);
        });
    });
}
