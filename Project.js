window.onload=function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    const texture = new Image();
    const santaClause=new Image();
    const tree=new Image();
    var rightPressed = false;
    var leftPressed = false;
    var downPressed=false;
    var upPressed=false;
    texture.src = "../Js/texture.jpg";
    santaClause.src="../Js/santa.png";
    tree.src="../Js/tree.png";

    const debutPositionLeftPressedY=300;
    const debutPositionRightPressedY=100;
    const debutPositionDownPressed=200;
    const debutPositionUpPressed=0;
    const bornSupSantaX=144;

    const width=800;
    const height=600;
    var  sapinPosition = [
        [290, 211],
        [354, 211],
        [475, 204]
    ]; // nous allons travallier avec 3 sapin decoré

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    class Sapin{
        constructor()
        {
            let indicePosition = getRandomInt(3);
            this.sx=sapinPosition[indicePosition][0];
            this.sy=sapinPosition[indicePosition][1];
            this.dx=getRandomInt(width-50);
            this.dy=getRandomInt(height-70);
        }

        changeSapin()
        {
            // console.log('in change sapin');
            let indicePosition = getRandomInt(3);
            this.sx=sapinPosition[indicePosition][0];
            this.sy=sapinPosition[indicePosition][1];
            this.dx=getRandomInt(width-50);
            this.dy=getRandomInt(height-70);
        }
        draw() {

            ctx.drawImage(tree,this.sx,this.sy, 62,85 ,this.dx, this.dy, 54, 54);
        }

    }


    class Santa{
        constructor(){
            this.dxSanta=0;
            this.dySanta=0;
            this.intervalBetweenSantaX=0; // la distance entre les Santas 72
            this.intervalBetweenSantaY=0;
            this.widthSanta =70;
            this.heightSanta=100;
        }
        draw() {
            ctx.drawImage(santaClause,this.intervalBetweenSantaX,this.intervalBetweenSantaY, this.widthSanta, this.heightSanta, this.dxSanta, this.dySanta, 54, 64);

        }
        move(direction)
        {
            switch (direction) {
                case('right'):
                {
                    if(this.intervalBetweenSantaY!=debutPositionRightPressedY)
                    {
                        this.intervalBetweenSantaY=debutPositionRightPressedY;
                        this.intervalBetweenSantaX=0;
                    }else
                    {
                        this.intervalBetweenSantaX=this.intervalBetweenSantaX+72;
                    }

                    if(this.intervalBetweenSantaX==bornSupSantaX)
                        this.intervalBetweenSantaX=0;
                    if(this.dxSanta<width-50) // On enleve 50 pour que Santa ne disparesse pas completement sur le bord
                        this.dxSanta += 2;
                    break;
                }
                case('left'):
                {
                    if(this.intervalBetweenSantaY!=debutPositionLeftPressedY )
                    {
                        this.intervalBetweenSantaY=debutPositionLeftPressedY;
                        this.intervalBetweenSantaX=0;
                    }else
                    {
                        this.intervalBetweenSantaX=this.intervalBetweenSantaX+72;
                    }

                    if(this.intervalBetweenSantaX==bornSupSantaX)
                        this.intervalBetweenSantaX=0;
                    if(this.dxSanta>2) // nous allons l'aisser deux pixel pour que Santa apparesse complettement
                        this.dxSanta -= 2;
                    break;
                }
                case('down'):
                {
                    if(this.intervalBetweenSantaY!=debutPositionDownPressed)
                    {
                        this.intervalBetweenSantaY=debutPositionDownPressed;
                        this.intervalBetweenSantaX=0;
                    }else
                    {
                        this.intervalBetweenSantaX=this.intervalBetweenSantaX+72;
                    }

                    if(this.intervalBetweenSantaX==bornSupSantaX)
                        this.intervalBetweenSantaX=0;
                    if(this.dySanta<height-70) // meme chose on evite que Santa disparer du coup on enleve 60 de la hauteur
                        this.dySanta+=2;
                    break;
                }
                case('up'):
                {
                    if(this.intervalBetweenSantaY!=debutPositionUpPressed)
                    {
                        this.intervalBetweenSantaY=debutPositionUpPressed;
                        this.intervalBetweenSantaX=0;
                    }else
                    {
                        this.intervalBetweenSantaX=this.intervalBetweenSantaX+72;
                    }

                    if(this.intervalBetweenSantaX==bornSupSantaX)
                        this.intervalBetweenSantaX=0;
                    if(this.dySanta>-15)
                        this.dySanta-=2;
                    break;
                }
                default:
                {
                    console.log('bla bla bla');
                    break;
                }
            }

        }


    }


    var santa=new Santa(); // create a new santa
    var sapin=new Sapin();



    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        switch(e.keyCode)
        {
            case(39):
            {
                rightPressed=true;
                break;
            }
            case(37):
            {
                leftPressed=true;
                break;
            }
            case(38):
            {
                upPressed=true;
                break;
            }
            case(40):
            {
                downPressed=true;
            }
            default:
            {
                // console.log('Sorry, Bla bla bla');
            }
        }

    }

    function keyUpHandler(e) {
        switch(e.keyCode)
        {
            case(39):
            {
                rightPressed=false;
                break;
            }
            case(37):
            {
                leftPressed=false;
                break;
            }
            case(38):
            {
                upPressed=false;
                break;
            }
            case(40):
            {
                downPressed=false;
            }
            default:
            {
                // console.log('Sorry, Bla bla bla');
            }
        }

    }

    function drawTexture() {
        ctx.drawImage(texture, 0,0,800, 600);

    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // je commence par effacer l'ecran
        drawTexture();
        sapin.draw();


        santa.draw();

        moveSanta();
    }
    function drawChangeObject() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // je commence par effacer l'ecran
        drawTexture();
        sapin.changeSapin();
        santa.draw();
        sapin.draw();
        moveSanta();
    }


    function moveSanta()
    {
        if(rightPressed) {
            santa.move('right');
        }
        else if(leftPressed) {

            santa.move('left');


        }
        else if(downPressed)
        {
            santa.move('down');
        }
        else if(upPressed)
        {
            santa.move('up');

        }

    }
    setInterval(draw, 10)
    setInterval(drawChangeObject,10000);
    // setTimeout(drawChangeObject, 10000);




}