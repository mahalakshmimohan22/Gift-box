let button = document.getElementById("generateButton");
button.addEventListener("click", generator);
var k = 1;
var old = 0;
function generator() {
  let n = document.getElementById("textBox").value;
  n = parseInt(old) + parseInt(n);
  for (; k <= n; k++) {
    var grid = document.createElement("div");
    grid.classList.add("myDiv");
    document.getElementById("grid").appendChild(grid);
    grid.innerHTML += k;
    old = document.getElementById("grid").lastElementChild.innerHTML;
  }
}