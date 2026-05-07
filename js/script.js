let range = document.getElementById("range");
let blocksGrid = document.getElementById("blocksGrid");
let mode;

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
        let square = 100 / size;
        createDiv.style.width = square + "%";
        createDiv.style.height = square + "%";
        createDiv.style.cursor = "pointer";

        createDiv.addEventListener("mouseover", function(e) {
            if (mode === "random") {
                let red, green, blue;
                red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }
        });

    }
}

function randomColor() {
    mode = "random";
}

function buttonClear() {
    mode = "clear"
}