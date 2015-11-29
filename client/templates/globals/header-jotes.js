Template.headerJotes.helpers({
  score: () => {
    let score = Session.get('_score');
    return score;
  }
});

Template.headerJotes.onRendered(function() {
  this.$('.score').addClass('animated flash');
  this.$('.score').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    $(this).removeClass('animated flash');
  });
});
