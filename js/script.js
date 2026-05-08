let range = document.getElementById("range");
let blocksGrid = document.getElementById("blocksGrid");
let mode;
let selectColor = document.getElementById("inputColor");
let mouseSituation;

range.addEventListener("input", function(e) {
    gridValue = e.target.value;
    document.getElementById("resolution").innerText = "Resolution: " + gridValue + "x" + gridValue;
    createGrid(gridValue);
});

window.addEventListener("mousedown", function(e) {
    mouseSituation = true;
});

window.addEventListener("mouseup", function(e) {
    mouseSituation = false;
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
            if (mouseSituation === true) {
                if (mode === "random") {
                    let red, green, blue;
                    red = Math.floor(Math.random() * 256);
                    green = Math.floor(Math.random() * 256);
                    blue = Math.floor(Math.random() * 256);
                    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                } else if (mode === "color") {
                    e.target.style.backgroundColor = selectColor.value;
                }
            }
        });
    }
}

function randomColor() {
    mode = "random";
}

function buttonClear() {
    let pixel = document.querySelectorAll(".pixel");
    pixel.forEach(pixel => {
        pixel.style.backgroundColor = '';
    });
}

function color() {
    mode = "color";
}