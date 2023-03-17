function askSize() {
  prompt("Enter grid size");
}

let grid_btn = document.getElementById(grid - size);
grid_btn.addEventListener("click", askSize());
