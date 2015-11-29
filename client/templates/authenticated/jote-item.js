Template.joteItem.helpers({
});

Template.joteItem.events({
  'click .choice': (event, template) => {
    let $allChoices = template.$('.choice');
    $allChoices.attr('disabled', true);

    let $currentChoice = template.$(event.target);
    let choiceNo = $currentChoice.data('choice-no');
    let answers = template.data.answers;
    let correct = answers[choiceNo] === true;

    let score = Session.get('_score');
    score += correct?100:0;

    Session.set('_score', score);
    console.log(choiceNo, score);

    template.$('.jote').addClass('animated bounceOutUp');
    template.$('.jote').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { $(this).remove(); });

    return false;
  }
});
