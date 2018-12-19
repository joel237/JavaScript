var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var texture = new Image();
var santaClause=new Image();
var dxSanta=0;
var dySanta=0;
var rightPressed = false;
var leftPressed = false;
var downPressed=false;
var upPressed=false;
var intervalBetweenSantaX=0; // la distance entre les Santas 72
var intervalBetweenSantaY=0;
texture.src = "../Js/texture.jpg";
santaClause.src="../Js/santa.png";


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode==38)
    {

        upPressed=true;
    }
    else if(e.keyCode==40)
    {
        downPressed=true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode==38)
    {
        upPressed=false;
    }
    else if(e.keyCode==40)
    {
        downPressed=false;
    }

}


function drawTexture() {
    ctx.drawImage(texture, 0,0,800, 600);

}
function drawSantaClaus() {
    ctx.drawImage(santaClause,intervalBetweenSantaX,intervalBetweenSantaY, 80, 100, dxSanta, dySanta, 54, 64);

}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTexture();
    drawSantaClaus() ;
    if(rightPressed) {
        dxSanta += 2;
    }
    else if(leftPressed) {
        dxSanta -= 2;
    }
    else if(downPressed)
    {
        dySanta+=2;
    }
    else if(upPressed)
    {
        if(intervalBetweenSantaX==144)
            intervalBetweenSantaX=0;
        intervalBetweenSantaX=intervalBetweenSantaX+72;
        dySanta-=2;
    }


}
setInterval(draw, 10);