Template.joteItem.helpers({
  choice: (no) => {
    let template = Template.instance();
    let choices = template.data.choices;

    return choices[no];
  }
});
