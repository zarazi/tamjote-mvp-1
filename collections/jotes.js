Jotes = new Meteor.Collection( 'jotes' );

Jotes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Jotes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let JotesSchema = new SimpleSchema({
  "question": {
    type: String,
    optional: false,
    label: 'Question',
  },
  "choices": {
    type: [String],
    optional: false,
    label: 'Choices',
  },
  "answers": {
    type: [Boolean],
    optional: false,
    label: 'Answers',
  },

  "owner": {
    type: String,
    optional: true,
    label: "The ID of the owner of this document."
  },
  active: {
    type: Boolean,
    optional: true,
    autoValue: function(){
      if(this.isInsert) {
        return true;
      }
    }
  },
  date_created: {
    type: Date,
    optional: false,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    },
  },
  date_modified: {
    type: Date,
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    denyInsert: true,
  },
});

Jotes.attachSchema( JotesSchema );
