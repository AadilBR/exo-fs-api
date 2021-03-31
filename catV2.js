const fs = require('fs')


// verifier la cmd line
if (process.argv.length < 3) {
  console.log(`usage : node catV2.js file1.txt [file2.txt file3.txt ...]`)
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

//Lire et afficher les fichiers une fois les tests effectués
for (let i = 2; i < process.argv.length; i++) {
  let txt = fs.readFileSync(process.argv[i], 'utf-8')
  console.log(txt)
}