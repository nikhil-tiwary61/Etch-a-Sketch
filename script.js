//default grid size generation
let size = 16;
createGrid(size);

//ask user for grid size
function askSize() {
  size = prompt("Enter grid size");
  if (size != null) {
    createGrid(size);
  }
}
//clears the grid for further adding a new grid
function clearGrid() {
  const myGrid = document.getElementById("sketch-grid");
  while (myGrid.firstChild) {
    myGrid.removeChild(myGrid.lastChild);
  }
}
//creates new working grid
function createGrid(size) {
  clearGrid();
  let space = document.getElementById("sketch-grid");
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < size; j++) {
      let col = document.createElement("div");
      col.className = "gridbox";
      row.appendChild(col);
      // row.style["display"] = "flex";
    }
    space.appendChild(row);
  }
}
function colorBoxBlack(e) {
  // console.log(this);
  this.style["background-color"] = "black";
}

let grid_btn = document.getElementById("grid-size");
grid_btn.addEventListener("click", askSize);

const boxes = document.querySelectorAll(".gridbox");
boxes.forEach((box) => box.addEventListener("click", colorBoxBlack));
