let tab = process.argv
let result = ''


for (const elem of tab.slice(2)) {
  result += `${elem} `

}


console.log(result)

