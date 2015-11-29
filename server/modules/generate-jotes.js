const sampleJotes = [
  {
    question: 'Is this code run from NodeJS?',
    choices: ['Yes', 'No'],
    answers: [true, false],
  },
  {
    question: 'Is Meteor also run in NodeJS?',
    choices: ['Why not', 'Nope'],
    answers: [true, false],
  },
  {
    question: 'Is NodeJS Meteor?',
    choices: ['Of course', 'Not a chance'],
    answers: [false, true],
  },
];

let generateJotes = () => {

  let jotesExists = Jotes.find().count() > 0;

  if (!jotesExists) {
    for( let jote of sampleJotes) {
      Jotes.insert(jote)
    }
  }
};

Modules.server.generateJotes = generateJotes;
