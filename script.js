let size = 16;
let grid_dimension = (500 - (size - 1)) / size;
createGrid(size);

function askSize() {
  size = prompt("Enter grid size");
  if (size != null) {
    grid_dimension = (500 - (size - 1)) / size;
    createGrid(size);
  }
}
function clearGrid() {
  const myGrid = document.getElementById("sketch-grid");
  while (myGrid.firstChild) {
    myGrid.removeChild(myGrid.lastChild);
  }
}
function createGrid(size) {
  clearGrid();
  let space = document.getElementById("sketch-grid");
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      let col = document.createElement("div");
      col.className = "gridbox";
      col.style.width = `${grid_dimension}px`;
      col.style.height = `${grid_dimension}px`;
      row.appendChild(col);
      row.style["display"] = "flex";
    }
    space.appendChild(row);
  }
}

let grid_btn = document.getElementById("grid-size");
grid_btn.addEventListener("click", askSize);
