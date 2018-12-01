var fs = require('fs');
var path = require('path');

const frequencies = {};
let isRepeatFrequencyFound = false;
let initialFrequency = 0;

const findFrequency = async (frequencyChanges) => {
  while (!isRepeatFrequencyFound) {
    const freq = await frequencyChanges.reduce((acc, str) => {
      const currentFrequency = str ? acc + parseInt(str) : acc;
      if (frequencies[currentFrequency]) {
        console.log(currentFrequency + ' was the first frequency to be reached twice\n');
        isRepeatFrequencyFound = true;
        throw Error('Done!');
      }
      frequencies[currentFrequency] = true;
      return currentFrequency;
    }, initialFrequency);
    initialFrequency = freq;
  }
}

fs.readFile(path.join(__dirname, '../input.txt'), 'utf8', function(err, data) {
  if (err) throw err;
  const frequencyChanges = data.toString().split('\n');
  findFrequency(frequencyChanges);
});
