//node echo.js hello hard fork
//hello hard fork

//let tab = process.argv
let result = ''

for (const elem of process.argv.slice(2)) {
  result += `${elem} `

}

console.log(result)

/* let [, , ...args] = process.argv

console.log(args.join(' ')); */
