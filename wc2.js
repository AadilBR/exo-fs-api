const fs = require('fs')

//Gestion de l'erreur si pas le bon nombre d'arguments.
if (process.argv.length > 4 && process.argv.length < 5) {
  console.log(`usage : node wc.js fileName option`)
  process.exit(1)
}

//Gestion d'erreur si file.txt n'existe pas.
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} do not exist`)
  process.exit(1)
}
// Gestion d'erreur en cas d'option
if (process.argv.length === 4) {

  if (!(process.argv[2] == '-l' || process.argv[2] == '-w' || process.argv[2] == '-c')) {
    console.log(`Error: if you choose an option you must pick only -l or -w or -c`)
    process.exit(1)
  }
}


//Lire le fichier
let txt = fs.readFileSync(process.argv[2], 'utf-8')


//Commencer le traitement avant affichage
const lines = txt.split('\n')
//console.log(lines)
const words = txt.split(' ')
const characters = txt

//Afficher le nombre de lignes,
//console.log(`Nombres de lignes : ${lines.length}`)

//le nombre de mots 
//console.log(`Nombres de mots : ${words.length}`)

//le nombre de caractères du fichier file.txt.
//console.log(`Nombres de caractères : ${characters.length}`)

//ou sinon Afficher tout sur un seule ligne
switch (process.argv[2]) {
  case '-l':
    console.log(`${lines.length} ${process.argv[2]}`)
    break
  case '-w':
    console.log(`${words.length} ${process.argv[2]}`)
    break
  case '-c':
    console.log(`${characters.length} ${process.argv[2]}`)
    break
  default:
    console.log(`${lines.length}   ${words.length}   ${characters.length}   ${process.argv[2]}`)

}

