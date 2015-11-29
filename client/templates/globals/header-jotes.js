Template.headerJotes.helpers({
  score: () => {
    let score = Session.get('_score');
    return score;
  }
});

Template.headerJotes.onRendered(() => {
  this.$('.score').addClass('animated flash');
});
