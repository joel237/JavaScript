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
var debutPositionLeftPressedY=300;
var debutPositionRightPressedY=100;
var debutPositionDownPressed=200;
var debutPositionUpPressed=0;
var bornSupSantaX=144;
const widthSanta =70;
const heightSanta=100;
const width=800;
const height=600;
var goLeft=false;
var goRight=false;
var goUp=false;
var goDown=false;
texture.src = "../Js/texture.jpg";
santaClause.src="../Js/santa.png"


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTexture();
    drawSantaClaus() ;
    if(rightPressed) {
        if(intervalBetweenSantaY!=debutPositionRightPressedY)
        {
            intervalBetweenSantaY=debutPositionRightPressedY;
            intervalBetweenSantaX=0;
        }else
        {
            intervalBetweenSantaX=intervalBetweenSantaX+72;
        }

        if(intervalBetweenSantaX==bornSupSantaX)
            intervalBetweenSantaX=0;
        if(dxSanta<width-50) // On enleve 50 pour que Santa ne disparesse pas completement sur le bord
            dxSanta += 2;
            // console.log("la dxSanta"+dxSanta);
    }
    else if(leftPressed) {

        if(intervalBetweenSantaY!=debutPositionLeftPressedY )
        {
            intervalBetweenSantaY=debutPositionLeftPressedY;
            intervalBetweenSantaX=0;
        }else
        {
            intervalBetweenSantaX=intervalBetweenSantaX+72;
        }

        if(intervalBetweenSantaX==bornSupSantaX)
            intervalBetweenSantaX=0;
        if(dxSanta>2) // nous allons l'aisser deux pixel pour que Santa apparesse complettement
            dxSanta -= 2;

    }
    else if(downPressed)
    {
        if(intervalBetweenSantaY!=debutPositionDownPressed)
        {
            intervalBetweenSantaY=debutPositionDownPressed;
            intervalBetweenSantaX=0;
        }else
        {
            intervalBetweenSantaX=intervalBetweenSantaX+72;
        }

        if(intervalBetweenSantaX==bornSupSantaX)
            intervalBetweenSantaX=0;
        if(dySanta<height-70) // meme chose on evite que Santa disparer du coup on enleve 60 de la hauteur
             dySanta+=2;
    }
    else if(upPressed)
    {
        if(intervalBetweenSantaY!=debutPositionUpPressed)
        {
            intervalBetweenSantaY=debutPositionUpPressed;
            intervalBetweenSantaX=0;
        }else
        {
            intervalBetweenSantaX=intervalBetweenSantaX+72;
        }

        if(intervalBetweenSantaX==bornSupSantaX)
            intervalBetweenSantaX=0;
        if(dySanta>-15)
        dySanta-=2;
    }


}




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

        upPressed=true;   }
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
function drawSapin() {
    
}

function drawSantaClaus() {
    ctx.drawImage(santaClause,intervalBetweenSantaX,intervalBetweenSantaY, widthSanta, heightSanta, dxSanta, dySanta, 54, 64);

}

setInterval(draw, 10);