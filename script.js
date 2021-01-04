let length
let area
document.getElementById('squarearea').addEventListener('click', solvefunction)
function solvefunction () {
  length = document.getElementById('variable').value
  area = length * length
  alert(area)
}
