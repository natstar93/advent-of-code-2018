var fs = require('fs');
var path = require('path');

const idsDifferByMaxOneChar = (firstId, secondId) => {
  let diffCount = 0;
  for(j = 0; j < firstId.length; j++) {
    if(firstId[j] !== secondId[j]) {
      ++diffCount;
    }
    if (diffCount > 1) return false;
  }
  return true;
}

fs.readFile(path.join(__dirname, '../input.txt'), 'utf8', function(err, data) {
  if (err) throw err;
  const ids = data.toString().split('\n');
  const alphabetisedIds = ids.sort();
  for(i = 0; i < alphabetisedIds.length - 1; i++) {
    const currentId = alphabetisedIds[i];
    const nextId = alphabetisedIds[i + 1];
    if(idsDifferByMaxOneChar(currentId, nextId)) {
      console.log(`Match: ${currentId} and ${nextId}\n`);
      let commonLetters = '';
      for(k = 0; k < currentId.length; k++) {
        if(currentId[k] === nextId[k]) {
          commonLetters += currentId[k]
        }
      }
      console.log(`Common letters: ${commonLetters}`);
    }
  }
});
