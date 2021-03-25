const fs = require('fs')


// verifier la cmd line
if (process.argv.length !== 3) {
  console.log(`usage : node cat.js file name`)
  process.exit(1)
}

// check if file exists
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} do not exist`)
  process.exit(1)
}


let txt = fs.readFileSync(process.argv[2], 'utf-8')
console.log(txt)

