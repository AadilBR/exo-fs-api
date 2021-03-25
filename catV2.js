const fs = require('fs')


// verifier la cmd line
if (process.argv.length !== 5) {
  console.log(`usage : node catV2.js file1.txt file2.txt file3.txt`)
  process.exit(1)
}

for (let i = 2; i < process.argv.length; i++) {

  // check if file exists
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} do not exist`)
    process.exit(1)
  }

  let txt = fs.readFileSync(process.argv[i], 'utf-8')
  console.log(txt)
}
