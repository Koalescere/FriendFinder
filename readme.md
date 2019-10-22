This app is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Key to the app are the following syntax, which bridges the front end to the back end:
[found in server js] require('./app/routing/apiRoutes.js')(app);
[found in server js]require('./app/routing/htmlRoutes.js')(app);

The front end is an html survey.

The input data from the survery is formatted to mirror the data in the json data file.

With the input data from the survey and the jsdon data file data, both formatted as an array, and operation can be applied to obtain a score...by adding together, the delta in absolute value, of each index.

A nested for loop would be utilized to iterate through each named person, and their respective score.  By accessing the score, and having the survey input, the delta can be calculated.  And the absolute value would be applied on each index.

The SUM represents the aggregate score, lowest aggregate score is the "bestFind" (the match).

Note, I beleive I've captured all of the necessary coding to make the app work, but there is an error somewhere which is preventing the survey data from being captured for the operation to be applied againsts.


