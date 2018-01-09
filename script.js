//Map//
//definer componenter//
var myGamePiece;
var blueblock;
var dank;
var troll;
var gamebackground;


//define area//
var myGameArea;

//updatere canvas og komponeneter//
function updateGameArea() {
    myGameArea.clear();
    gamebackground.update();
    myGamePiece.update();
    blueblock.update();
    dank.update();
    troll.update();
    
}

//Canvas//
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1080;
        this.canvas.height = 1080;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};
function setup(){
    
}


//create component function//
function Component(width, height, color, x, y, type) {
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
    };
}


//to start game call this //
//every object should have diffrent name//
// (width, height, color, x, y, type) //
function startGame() {
    myGameArea.start();
    gamebackground = new Component(1519, 734, "image/background.jpg", 0, 0, "image");
    myGamePiece = new Component(30, 30, "red", 10, 120);
    blueblock = new Component(15, 15, "blue", 30, 20);
    dank = new Component(50, 50, "image/porn.jpg", 30, 100, "image");
    troll = new Component(400, 400, "image/troll.jpg", 400, 200, "image");
}


//right menu   Upgrades// 




//left menu   FSU / Buildings//




//top menu    Resources//





//buttom menu   Hideable buttons / Save, Load //





