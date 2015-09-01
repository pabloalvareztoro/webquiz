Questions = new Mongo.Collection("questions");

Template.questionnaire.helpers({
  question: function(){
    return Questions.findOne({'id': 0});
  }
});

Meteor.subscribe('getQuestion');