const fs = require('fs')
const { copyFileSync } = require('fs')

// verifier la cmd line
if (process.argv.length !== 4) {
  console.log(`usage : node cp.js src.txt dst.txt`)
  process.exit(1)
}

// check if file exists
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} do not exist`)
  process.exit(1)
}


let txt = fs.readFileSync(process.argv[2], 'utf-8')

copyFileSync(process.argv[2], './copy.txt')