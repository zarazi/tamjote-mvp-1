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

    console.log(choiceNo, correct);

    return false;
  }
});
