const fs = require("fs")
const path = require("path")

let content = fs.readFileSync(path.join(__dirname, 'test.txt'), "utf8")

let ccc = content.replace(/\s/g, '').split('')

// const t = ccc.reduce((prev, curr) => {
//   prev = prev || curr 
// }, {})

let total = 0
let result = {}
for (let char of ccc) {
  if (result[char]) {
    result[char]++
  } else {
    result[char] = 1
  }
  total++
  // console.log(char)
}

console.log(result, total)