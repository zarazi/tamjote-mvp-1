Template.jotes.onCreated( () => {
  Template.instance().subscribe('jotes');
  Session.setDefault('_score', 0);
});

Template.jotes.onRendered( () => {
  Session.set('_no_more_jote', false);
});

Template.jotes.helpers({
  jotes: () => {
    return Jotes.find();
  },
  noMoreJote: () => {
    return Session.get('_no_more_jote')===true;
  }
});

Template.jotes.events({
  'click .retake': (event, template) => {
    Session.set('_no_more_jote', false);
    return false;
  }
});
