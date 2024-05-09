
//Assignment 3: Snake_ADT
// atoms
 const id = x => x;
const konst = x => y => x;

// booleans
const F = konst(id);
const T = konst;

// elements
const pair = x => y => f => f(x)(y);
const fst = p => p(T);
const snd = p => p(F);

const Left = x => f => g => f(x);
const Right = x => f => g => g(x);
const either = e => f => g => e(f)(g);

// const north = {dx:  0, dy: -1};
// const east  = {dx:  1, dy:  0};
// const south = {dx:  0, dy:  1};
// const west  = {dx: -1, dy:  0};

const north = pair( 0)(-1);
const east  = pair( 1)( 0);
const south = pair( 0)( 1);
const west  = pair(-1)( 0);

let direction = north;

const clockwise = [north, east, south, west, north];
const countercw = [north, west, south, east, north];

let snake = [
    pair (10) (5),   //{x: 10, y: 5},
    pair(10)(6),     //{x: 10, y: 6},
    pair(10)(7),     //{x: 10, y: 7},
    pair(10)(8),     //{x: 10, y: 8},
];
let food =  pair(15)(15); // {x: 15, y: 15};

function snakeEquals(a, b) {
}

function changeDirection(orientation) {
    const indx = orientation.indexOf(direction);
    direction = orientation[indx + 1]
}

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    const rightArrow = 39;
    const leftArrow  = 37;
    window.onkeydown = evt => {
        const orientation = (evt.keyCode === rightArrow) ? clockwise : countercw;
        changeDirection(orientation);
    };

    //GameLoop
    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 5);
}

function nextBoard() {
    const maxX = 20;
    const maxY = 20;
    const oldHead = snake[0];

    function inBounds(x, max) {
        if (x < 0)   { return max - 1 }
        if (x > max) { return 0 }
        return x
    }

    const head = {
        x: inBounds(oldHead.x + direction.dx, maxX),
        y: inBounds(oldHead.y + direction.dy, maxY)
    };

    if (snakeEquals(food, head)) {  // have we found any food?
        food.x = Math.floor(Math.random() * 20);   // place new food at random location
        food.y = Math.floor(Math.random() * 20);
    } else {
        snake.pop() // no food found => no growth despite new head => remove last element
    }
    snake.unshift(context, element) // put head at front of the list
}

function display(context) {

    // clear
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // draw all elements
    context.fillStyle = "cyan";
    snake.forEach(element =>
        fillBox(context, element)
    );
    context.fillStyle = "green";
    fillBox(context, snake[0]);
    // draw food
    context.fillStyle = "red";
    fillBox(context, food);
}

function fillBox(context, element) {
    context.fillRect(fst(element) * 20 + 1, snd(element) * 20 + 1, 18, 18);
}

/* KeyEvents
const spaceBar = 32;
const leftArrow = 37;
const upArrow = 38;
const rightArrow = 39;
const downArrow = 40;
window.onkeydown = (evt) => {
    /* code with keys */


