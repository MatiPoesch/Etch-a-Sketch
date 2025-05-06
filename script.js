document.addEventListener("DOMContentLoaded", () => {
    generate();
})

function generate(gridSize=16) {
    const container = document.querySelector("#container");
    let squareSize = Math.floor(860/gridSize);
    for (let i = 1; i <= gridSize*gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        div.style.flexBasis=`${squareSize}`+"px";
        div.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor="rgb(74,184,221)";
            setTimeout(() => {
                e.target.style.backgroundColor="rgb(100,125,136)"
            }, 1000);
        })
        container.appendChild(div);
    }
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    let size = prompt("How many squares per side?")
    reset();
    generate(size);
})
function reset() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}

