//right menu// 




//left menu//




//top menu//





//buttom menu//








//Map//
//definer componenter//
var myGamePiece;
var blueblock;
var dank;
var troll;


//define area//
var myGameArea;

//updatere canvas og komponeneter//
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.update();
    blueblock.update();
    dank.update();
    troll.update();
}

//Canvas//
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1519;
        this.canvas.height = 734;
        document.backgroundColor = "#CCCCCC";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

//create component function//
function component(width, height, color, x, y, type) {
    if (type === "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        if (type === "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}


//to start game call this //
//every object should have diffrent name//
// (width, height, color, x, y, type) //
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
    blueblock = new component(15, 15, "blue", 30, 20);
    dank = new component(50, 50, "image/porn.jpg", 30, 100, "image");
    troll = new component(400, 400, "image/troll.jpg", 400, 200, "image");
}
