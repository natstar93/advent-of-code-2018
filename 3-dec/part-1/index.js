var fs = require('fs');
var path = require('path');

const fabric = [[]];
let overlap = 0;

fs.readFile(path.join(__dirname, '../input.txt'), 'utf8', function(err, data) {
  if (err) throw err;
  const entries = data.toString().split('\n');
  for(let i = 0; i < entries.length; i++) {
    const [ number, at, startCoords, size ] = entries[i].split(' ');
    const coords = startCoords.slice(0, -1).split(',');
    const startX = parseInt(coords[0]);
    const startY = parseInt(coords[1]);
    const lengths = size.split('x');
    const movementX = parseInt(lengths[0]);
    const movementY = parseInt(lengths[1]);
   
    for(let x = startX; x < startX + movementX; x++) {
      if (!fabric[x]) fabric[x] = [];
      for (let y = startY; y < startY + movementY; y++) {
        const currentVal = fabric[x][y];
        fabric[x][y] = currentVal ? 'X' : i + 1;
      }
    }
  }

  for(let jx = 0; jx < fabric.length; jx++) {
    for(let jy = 0; jy < fabric.length; jy++) {
      if(fabric[jx] && fabric[jx][jy] && (fabric[jx][jy] === 'X')) ++overlap;
    }
  }
  console.log(`*** ${overlap} square inches of fabric are within two or more claims ***`);
});
