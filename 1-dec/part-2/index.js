var fs = require('fs');
var path = require('path');

const frequencies = {};
let isRepeatFrequencyFound = false;
let currentFrequency = 0;
let counter = 0;

const findFrequency = (frequencyChanges) => {
  const frequencyChangeLength = frequencyChanges.length;
  while (!isRepeatFrequencyFound) {
    const frequencyIndex = counter % frequencyChangeLength;
    currentFrequency += parseInt(frequencyChanges[frequencyIndex]);
    if (frequencies[currentFrequency] === true) {
      console.log(currentFrequency + ' was the first frequency to be reached twice.');
      isRepeatFrequencyFound = true;
      return;
    } else {
      frequencies[currentFrequency] = true;
    }
    ++counter;
  }
}

fs.readFile(path.join(__dirname, '../input.txt'), 'utf8', function(err, data) {
  if (err) throw err;
  const frequencyChanges = data.toString().split('\n');
  findFrequency(frequencyChanges);
});
