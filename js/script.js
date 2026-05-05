let range = document.getElementById("range");
let blocksGrid = document.getElementById("blocksGrid");

range.addEventListener("input", function(e) {
    gridValue = e.target.value;
    document.getElementById("resolution").innerText = "Resolution: " + gridValue + "x" + gridValue;
    createGrid(gridValue);
});

function createGrid(size) {
    blocksGrid.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        let createDiv = document.createElement("div");
        blocksGrid.appendChild(createDiv);
        createDiv.classList.add("pixel");
        let largura = 100 / size;
        createDiv.style.width = largura + "%";
        createDiv.style.height = largura + "%";
    }
}