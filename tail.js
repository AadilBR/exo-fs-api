const fs = require('fs')

//Gestion de l'erreur si pas le bon nombre d'arguments.
if (process.argv.length !== 3) {
  console.log(`usage : node tail.js file name`)
  process.exit(1)
}

//Gestion de l'erreur si AmaFille.txt n'existe pas.
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} do not exist`)
  process.exit(1)
}

//Si il existe verifier que c'est un fichier et non un répertoire
const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
  console.log(`Error: ${process.argv[2]} is not a file`)
  process.exit(1)
}

//Lire le fichier
let txt = fs.readFileSync(process.argv[2], 'utf-8')
//Faire le traitement attendu : split slice ...
const tab = txt.split('\n')



//Affiche les 10 dernières lignes du fichier file.txt.
console.log(tab.slice(-10).join('\n'))
//console.log(tab.slice(tab.length - 10))
