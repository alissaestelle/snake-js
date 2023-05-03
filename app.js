const grid = document.querySelector('#grid')
let testArr = new Array(200).fill('')

testArr.forEach((elem, idx) => {
  let tile = document.createElement('div')
  // tile.className = 'tile'
  // tile.id = `${idx + 1}`
  grid.appendChild(tile)
})

console.log(grid)
