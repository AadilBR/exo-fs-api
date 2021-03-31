const fs = require('fs')

//Gestion de l'erreur si pas le bon nombre d'arguments.
if (process.argv.length !== 3) {
  console.log(`usage : node wc.js file name`)
  process.exit(1)
}

//Gestion l'erreur si file.txt n'existe pas.
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} do not exist`)
  process.exit(1)
}

//Lire le fichier
let txt = fs.readFileSync(process.argv[2], 'utf-8')


//Commencer le traitement avant affichage
const lines = txt.split('\n')
//console.log(lines)
const words = txt.split(' ')
const characters = txt

//Affiche le nombre de lignes,
//console.log(`Nombres de lignes : ${lines.length}`)

//mots et 
//console.log(`Nombres de mots : ${words.length}`)

//caractères du fichier file.txt.
//console.log(`Nombres de caractères : ${characters.length}`)

//Afficher tout sur un seule ligne

console.log(`${lines.length}   ${words.length}   ${characters.length}   ${process.argv[2]}`)
