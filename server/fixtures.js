var fixtures = [{
    name: 'Title',


}, {


}];


if (Meteor.isServer) {
    Meteor.startup(function () {
        // Remove all the Seeds and start over
        this.Seeds.remove({});

        // Add all data from the fixtures file
        fixtures.forEach(function (fixture) {
            this.Seeds.insert(fixture);
        });
    });
}
