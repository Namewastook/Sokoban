const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     WOB   WOWOW",
    "W WBW WWW WWWWW WBWBW",
    "W WOW BOW   BOW W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W WOB W   W W     W W",
    "W WWWWW W W W W W W F",
    "S     W W W W W W WWW",
    "WWWWW WBW W W W W WOW",
    "W     WOW W   W W WBW",
    "W WWWWWWW WWWWW W W W",
    "W     BOW       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let thing = document.getElementsByClassName("boxOn")

function checkWin() {
    if (thing.length === 10)
        setTimeout(function () {
            alert("You have solved the puzzle! But can you find the hidden exit?")()
        }, 1)
}

function changeImage() {
    let img = document.getElementById('player');
    img.src = images[z];
    z++;

    if (z >= images.length) {
        z = 0;
    }

    setTimeout("changeImage()", 75);
}
let images = [];
let z = 0;

images[0] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMDxQGjO5u1xkirnz6-P-BfOs2sMB7De9027GzPaBXZPZMnEOjg";
images[1] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMDxQGjO5u1xkirnz6-P-BfOs2sMB7De9027GzPaBXZPZMnEOjg";


setTimeout("changeImage()", 75);


const main = document.getElementById("maze");

for (let i = 0; i < map.length; i++) {
    let row = map[i];
    let mazeBoard = document.createElement("div");
    mazeBoard.classList.add("mazeRow");
    for (let j = 0; j < row.length; j++) {
        let wall = document.createElement("div");
        wall.dataset.rowIndex = i;
        wall.dataset.cellIndex = j;
        mazeBoard.appendChild(wall);

        switch (row[j]) {
            case "W":
                wall.classList.add("borderWall");
                wall.dataset.cellType = "border";
                break;

            case "S":
                wall.setAttribute("id", "start");
                wall.dataset.cellType = "start";
                break;

            case " ":
                wall.classList.add("blankSpace");
                wall.dataset.cellType = "floor";
                break;

            case "F":
                wall.setAttribute("id", "finish");
                wall.dataset.cellType = "end";
                break;

            case "O":
                wall.classList.add("id", "location");
                wall.dataset.cellType = "location"
                break;

            case "B":
                wall.classList.add("id", "box")
                wall.dataset.cellType = "box";
                break

            case "X":
                wall.classList.add("id", "boxOn")
                wall.dataset.cellType = "boxOn";
                break
        }
    }
    main.appendChild(mazeBoard);
}

const player = document.getElementById("player");
const box = document.getElementById("box")
const floor = document.getElementById("floor")


let start = document.getElementById("start");
start.appendChild(player);

let currentPosition = start;


document.addEventListener('keydown', (event) => {


    switch (event.key) {

        case 'ArrowUp':
            let nextPositionUp = Number(currentPosition.dataset.rowIndex) - 1;
            let nextMoveUp = document.querySelector("[data-row-index = '" + nextPositionUp + "'][data-cell-index = '" + currentPosition.dataset.cellIndex + "']");
            let twoMoveUp = document.querySelector("[data-row-index = '" + (nextPositionUp - 1) + "'][data-cell-index = '" + currentPosition.dataset.cellIndex + "']");
            if (nextMoveUp.dataset.cellType === "floor") {
                nextMoveUp.appendChild(player);
                currentPosition = nextMoveUp;
            } else if (nextMoveUp.dataset.cellType === "box") {
                nextMoveUp.classList.remove("box")
                nextMoveUp.classList.add("blankSpace")
                twoMoveUp.classList.add("boxOn")
                nextMoveUp.appendChild(player)
                currentPosition = nextMoveUp
                checkWin()
            }
            break;

        case 'ArrowDown':
            let nextPositionDown = Number(currentPosition.dataset.rowIndex) + 1;
            let nextMoveDown = document.querySelector("[data-row-index = '" + nextPositionDown + "'][data-cell-index = '" + currentPosition.dataset.cellIndex + "']");
            let twoMoveDown = document.querySelector("[data-row-index = '" + (nextPositionDown + 1) + "'][data-cell-index = '" + currentPosition.dataset.cellIndex + "']");
            if (nextMoveDown.dataset.cellType === "floor") {
                nextMoveDown.appendChild(player);
                currentPosition = nextMoveDown;
            } else if (nextMoveDown.dataset.cellType === "box") {
                nextMoveDown.classList.remove("box")
                nextMoveDown.classList.add("blankSpace")
                twoMoveDown.classList.add("boxOn")
                nextMoveDown.appendChild(player)
                currentPosition = nextMoveDown
                checkWin()
            }
            break;

        case 'ArrowLeft':
            let nextPositionLeft = Number(currentPosition.dataset.cellIndex) - 1;
            let nextMoveLeft = document.querySelector("[data-row-index = '" + currentPosition.dataset.rowIndex + "'][data-cell-index = '" + nextPositionLeft + "']");
            let twoMoveLeft = document.querySelector("[data-row-index = '" + (currentPosition.dataset.rowIndex) + "'][data-cell-index = '" + (nextPositionLeft - 1) + "']");
            if (nextMoveLeft.dataset.cellType === "floor") {
                nextMoveLeft.appendChild(player);
                currentPosition = nextMoveLeft;
            } else if (nextMoveLeft.dataset.cellType === "box") {
                nextMoveLeft.classList.remove("box")
                nextMoveLeft.classList.add("blankSpace")
                twoMoveLeft.classList.add("boxOn")
                nextMoveLeft.appendChild(player)
                currentPosition = nextMoveLeft
                checkWin()
            }
            break;

        case 'ArrowRight':
            let nextPositionRight = Number(currentPosition.dataset.cellIndex) + 1;
            let nextMoveRight = document.querySelector("[data-row-index = '" + currentPosition.dataset.rowIndex + "'][data-cell-index = '" + nextPositionRight + "']");
            let twoMoveRight = document.querySelector("[data-row-index = '" + (currentPosition.dataset.rowIndex) + "'][data-cell-index = '" + (nextPositionRight + 1) + "']");
            if (nextMoveRight.dataset.cellType === "floor") {
                nextMoveRight.appendChild(player);
                currentPosition = nextMoveRight;
            } else if (nextMoveRight.dataset.cellType === "box") {
                nextMoveRight.classList.remove("box")
                nextMoveRight.classList.add("blankSpace")
                twoMoveRight.classList.add("boxOn")
                nextMoveRight.appendChild(player)
                currentPosition = nextMoveRight
                checkWin()
            } else if (nextMoveRight.dataset.cellType === "end") {
                nextMoveRight.appendChild(player);
                currentPosition = nextMoveRight;
                setTimeout(function () {
                    alert("You have found the hidden exit and solved the deadly puzzle! Congratulations!");
                }, 1)
            }
            break;
    }
})