const fs = require('fs')

//Gestion de l'erreur si pas le bon nombre d'arguments.
if (process.argv.length > process.argv[process.argv.length - 1] || process.argv.length < 4) {
  console.log('Usage: node append.js srcFile ... dstFile')
  process.exit(1)
}

//Gestion l'erreur si file.txt n'existe pas.
for (let i = 2; i < process.argv.length - 1; i++) {
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} does not exist`)
    process.exit(1)
  }
  //Si il existe verifier que c'est un fichier et non un répertoire
  const stats = fs.statSync(process.argv[i])
  if (!stats.isFile()) {
    console.log(`Error: ${process.argv[i]} is not a file`)
    process.exit(1)
  }

  //Lire le fichier

  let txt = fs.readFileSync(process.argv[i], 'utf-8')

  fs.appendFileSync(`${process.argv[process.argv.length - 1]}`, `${txt}`, 'utf-8')

}

