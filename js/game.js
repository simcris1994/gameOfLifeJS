const gridWidth = 1500;
const gridHeight = 750;
const cols = 250;
const rows = 150;

const canvas = $('<canvas/>')
    .attr({
        width: gridWidth,
        height: gridHeight
    })
    .appendTo('body');

const context = canvas.get(0).getContext("2d");

function readFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        const grid = new Grid(gridWidth, gridHeight, cols, rows);
        LifReader.read(reader.result, cols, rows, grid.cells);
        grid.drawBoard();

        window.setInterval(move, 16);

        function move() {
            grid.move();
        }

    };

    reader.onerror = function() {
        console.log(reader.error);
    };

}