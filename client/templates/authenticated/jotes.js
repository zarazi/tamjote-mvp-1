Template.jotes.onCreated( () => {
  Template.instance().subscribe('jotes');
});

Template.jotes.helpers({
  jotes: () => {
    return Jotes.find();
  }
});
