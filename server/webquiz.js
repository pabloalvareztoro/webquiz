Questions = new Mongo.Collection("questions");

Meteor.startup(function () {
  // code to run on server at startup
   var defaultQuestions = JSON.parse(Assets.getText("json-documents/questions.json"));
    if (Questions.find().count() == 0) {
        for (var i=0; i<defaultQuestions.length; i++) {
        Questions.insert(defaultQuestions[i]);
       }
    }
});
