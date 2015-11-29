Meteor.publish( 'jotes', function() {
  return Jotes.find(
      { active: true },
      { fields: {
          question: 1,
          choices: 1
      }}
  );
});
