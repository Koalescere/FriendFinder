var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/friends', function (req, res) {

        var bestFind = {
            name: "",
            photo: "",
            friendDiff: 5000
        };
        console.log(req.body);

        var userData = req.body
        var userScores = userData.scores;

        var totalDiff = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDiff = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDiff <= bestFind.friendDiff) {
                    bestFind.name = friends[i].name;
                    bestFind.photo = friends[i].photo;
                    bestFind.friendDiff = totalDiff;
                }
            }
        }

        friends.push(userData);
        res.json(bestFind);
    });
}