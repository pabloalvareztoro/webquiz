// counter starts at 0
Session.setDefault('counter', 0);
Questions = new Mongo.Collection("questions");


Template.hello.helpers({
  counter: function () {
   return Session.get('counter');
  },
  questions: function(){
    return Questions.find();
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});