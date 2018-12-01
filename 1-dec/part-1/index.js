var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname, '../input.txt'), 'utf8', function(err, data) {
  if (err) throw err;
  const frequencies = data.toString().split('\n');
  const resultingFrequency = frequencies.reduce((acc, str) => acc + parseInt(str), 0);
  console.log(`Resulting Frequency: ${resultingFrequency}`);
});
