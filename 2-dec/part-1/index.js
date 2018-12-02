var fs = require('fs');
var path = require('path');

let doubleLetterOccurrences = 0;
let tripleLetterOccurrences = 0;

fs.readFile(path.join(__dirname, '../input.txt'), 'utf8', function(err, data) {
  if (err) throw err;
  const ids = data.toString().split('\n');
  for(i = 0; i < ids.length; i++) {
    const currentId = ids[i];
    const letters = {};
    for(j = 0; j < currentId.length; j++) {
      const currentLetter = currentId[j];
      letters[currentLetter] = letters[currentLetter] ? letters[currentLetter] + 1 : 1;
    }
    const hasTwo = Boolean(Object.keys(letters).find(letter => letters[letter] === 2));
    const hasThree = Boolean(Object.keys(letters).find(letter => letters[letter] === 3));
    doubleLetterOccurrences = hasTwo ? doubleLetterOccurrences + 1 : doubleLetterOccurrences;
    tripleLetterOccurrences = hasThree ? tripleLetterOccurrences + 1 : tripleLetterOccurrences;
  }
  console.log(`Checksum: ${doubleLetterOccurrences * tripleLetterOccurrences}`);
});
