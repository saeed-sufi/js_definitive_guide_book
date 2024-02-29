let points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
]


points.dist = function () {
  let p1 = this[0]
  let p2 = this[1]
  
  let x = p1.x - p2.x
  let y = p1.y - p2.y 

  return Math.sqrt(x*x + y*y)
}
// points.dist()
console.log(points.dist())