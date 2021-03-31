const fs = require('fs')
const { copyFileSync } = require('fs')

// verifier la cmd line
if (process.argv.length !== 4) {
  console.log(`usage : node cp.js src.txt dst.txt`)
  process.exit(1)
}

//Boucler dans la cmd line pour effectuer les verifications
for (let i = 2; i < process.argv.length; i++) {

  // check if file exists
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} do not exist`)
    process.exit(1)
  }
  //Si il existe verifier que c'est un fichier et non un répertoire
  const stats = fs.statSync(process.argv[i])
  if (!stats.isFile()) {
    console.log(`Error: ${process.argv[i]} is not a file`)
    process.exit(1)
  }
}

//Lire et copier le fichier une fois les tests effectués
let txt = fs.readFileSync(process.argv[2], 'utf-8')

copyFileSync(process.argv[2], './copy.txt')