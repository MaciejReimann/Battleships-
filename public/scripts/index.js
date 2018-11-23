const helper = require("./helper");

window.addEventListener("click", () => helper());

helper();

console.log("Hello from index.js!")

/* 
HELPERS

function fixedBias(percentage) {
    returns 0 || 1 with percentage probability
}

function createGrid(x, y, callback) {
    create 2d array of points with callback stored in "props" of each point
    it has to return function;
}
const grid = greateGrid(10, 10)
maze(1, 1) // "wall" , i.e. returns Grid(x, y)[x][y]["props"]

function getEscapeRoute(startPoint, endPoint) {
    return [] of points with escape route; if it's empty, no escape
}
*/


/*
const p = require("pointHelpers").createPoint;

0.Initialize state: 

const state = {
    maze,

}

1.Collect input from user: 

const w = inputs.width.value;
const h = inputs.height.value;
const d = inputs.slider.value || .5; 
User either puts in the percentage of wall density, or draws the maze on the mazeBoard;
Drawing will be 2.0 release feature

const startPoint = p(0, 0);
const startPoint = p(w / 2, h / 2);

function createEscapableMaze(w, h) {
    let maze = createMaze(w, h);
    return escapeMaze(maze).length ? escapeRoute(maze) : createEscapableMaze(w, h)
}

function createMaze(w, h, d) {
    function density () {
        return fixedBias(d)
    }
    return createGrid(w, h, () => generateMazeField(density))
}

function handleClick() {
    state.maze = createMaze(w, h, d);
}

2. Animate path finding
-> render as callback to getEscapeRoute, fired each time the routeLength has changed

*/