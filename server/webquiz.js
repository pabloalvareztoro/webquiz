Questions = new Mongo.Collection("questions");

Meteor.startup(function () {
  var defaultQuestions = JSON.parse(Assets.getText("json-documents/questions.json"));
  if (Questions.find().count() == 0) {
      for (var i=0; i<defaultQuestions.length; i++) {
      Questions.insert(defaultQuestions[i]);
    }
  }
});

Meteor.publish('getQuestion', function () {
  return Questions.find({'id': 0});
});