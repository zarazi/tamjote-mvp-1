Template.jotes.onCreated( () => {
  Template.instance().subscribe('jotes');
  Session.setDefault('_score', 0);
});

Template.jotes.helpers({
  jotes: () => {
    return Jotes.find();
  }
});
