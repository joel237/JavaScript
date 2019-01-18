    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    const texture = new Image();
    const santaClause=new Image();
    const tree=new Image();
    const lutin=new Image();
    var rightPressed = false;
    var leftPressed = false;
    var downPressed=false;
    var upPressed=false;

    var cadeaux=100;
    var argent=100;
    var temps=0;
    texture.src = "../Js/texture.jpg";
    santaClause.src="../Js/santa.png";
    tree.src="../Js/tree.png";
    lutin.src="../Js/lutin.png";

    const debutPositionLeftPressedY=300;
    const debutPositionRightPressedY=100;
    const debutPositionDownPressed=200;
    const debutPositionUpPressed=0;
    const bornSupSantaX=144;

    const debutPositionDownLutin=0;
    const  debutPositionLeftLutin=32;
    const  debutPositionRightLutin=64;
    const  debutPositionUpLutin=96;
    const bornSupLutin=97;

    const width=800;
    const height=600;
    var  sapinNonDecorerPosition = [
        [0, 133,96,125],
        [0, 386,95,124]
    ]; // nous allons travallier avec 3 sapin decoré

    var  sapinDecorerPosition = [
        [288, 213,68,77],
        [416, 191,63,94],[96,133,95,124],[0,259,95,127],[96,259,100,127]];


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    class Lutin
    {
        constructor()
        {
            this.dxLutin=0;
            this.dyLutin=0;
            this.statueLutin='immobile';
            this.Vx=getRandomInt(width-50);
            this.Vy=getRandomInt(height-70);


        }
        marche(){
        var choix=Math.trunc(Math.random()*4);
        switch(choix){
            case 0:
            {
                if(this.dyLutin!=debutPositionRightLutin)
                {
                    this.dyLutin=debutPositionRightLutin;
                    this.dxLutin=0;
                }
                else
                {
                    this.dxLutin=this.dxLutin+33;
                }

                if(this.dxLutin>bornSupLutin)
                    this.dxLutin=0;
                if(this.Vx<width-50)
                    this.Vx += 10;

                break;
            }
            case 1:
            {
                if(this.dyLutin!=debutPositionLeftLutin)
                {
                    this.dyLutin=debutPositionLeftLutin;
                    this.dxLutin=0;
                }
                else
                {
                    this.dxLutin=this.dxLutin+33;
                }

                if(this.dxLutin>bornSupLutin)
                    this.dxLutin=0;
                if(this.Vx>2)
                    this.Vx -= 10;

                break;
            }
            case 2:
            {
                if(this.dyLutin!=debutPositionDownLutin)
                {
                    this.dyLutin=debutPositionDownLutin;
                    this.dxLutin=0;
                }
                else
                {
                    this.dxLutin=this.dxLutin+33;
                }

                if(this.dxLutin>bornSupLutin)
                    this.dxLutin=0;
                if(this.Vy<height-70)
                    this.Vy += 10;
                break;
            }
            case 3:
            {
                if(this.dyLutin!=debutPositionUpLutin)
                {
                    this.dyLutin=debutPositionUpLutin;
                    this.dxLutin=0;
                }
                else
                {
                    this.dxLutin=this.dxLutin+33;
                }

                if(this.dxLutin>bornSupLutin)
                    this.dxLutin=0;
                if(this.Vy>-15)
                    this.Vy -= 10;

                break;

            }
            default:
            {
                console.log("cette cas n'existe pas ");
                break;
            }

        }


    }
    drawLutin()
    {
        ctx.drawImage(lutin,this.dxLutin,this.dyLutin, 33,31 ,this.Vx, this.Vy, 54, 84);
    }


    }








    class Sapin{
        constructor()
        {

            let sapinRand=getRandomInt(10);
            if(sapinRand<=3)
            {
                let indicePosition = getRandomInt(5);
                this.statue="decorer";
                this.sx=sapinDecorerPosition[indicePosition][0];
                this.sy=sapinDecorerPosition[indicePosition][1];
                this.sw=sapinDecorerPosition[indicePosition][2];
                this.sh=sapinDecorerPosition[indicePosition][3];


            }
            else
            {
                let indicePosition = getRandomInt(2);
                this.statue="nonDecorer";
                this.sx=sapinNonDecorerPosition[indicePosition][0];
                this.sy=sapinNonDecorerPosition[indicePosition][1];

                this.sw=sapinNonDecorerPosition[indicePosition][2];
                this.sh=sapinNonDecorerPosition[indicePosition][3];


            }
            this.temps=0;
            this.afficher=false;

            this.dx=getRandomInt(width-50);
            this.dy=getRandomInt(height-70);
        }

        suprimer()
        {
            let sapinRand=getRandomInt(9);
            if(sapinRand<=3)
            {
                let indicePosition = getRandomInt(5);
                this.statue="decorer";
                this.sx=sapinDecorerPosition[indicePosition][0];
                this.sy=sapinDecorerPosition[indicePosition][1];
                this.sw=sapinDecorerPosition[indicePosition][2];
                this.sh=sapinDecorerPosition[indicePosition][3];

            }
            else
            {
                let indicePosition = getRandomInt(2);
                this.statue="nonDecorer";
                this.sx=sapinNonDecorerPosition[indicePosition][0];
                this.sy=sapinNonDecorerPosition[indicePosition][1];

                this.sw=sapinNonDecorerPosition[indicePosition][2];
                this.sh=sapinNonDecorerPosition[indicePosition][3];

            }
            this.temps=0;

            this.dx=getRandomInt(width-80);
            this.dy=getRandomInt(height-95);
            AjoutLutin(this);

        }

        draw() {
            if(this.afficher==true)
            ctx.drawImage(tree,this.sx,this.sy, this.sw,this.sh ,this.dx, this.dy, 80, 95);
        }
        getStatue()
        {
            return this.statue;
        }
        getTemps()
        {
            return this.temps
        }
        setTemps(temp)
        {
            this.temps=temp;
        }

    }

   // var sapin=new Sapin();
   // var sapins=new Sapin[10];
   // var sapins : Sapin[] = new Sapin[10];

   // for (var i = 0; i < sapins.Length; i++) {
    //    sapins[i] = new Sapin()
   // } nous allons travallier avec 5 sapin
var sapin1=new Sapin();
    sapin1.afficher=true;
    var sapin2=new Sapin();
    var sapin3=new  Sapin();
    var sapin4=new Sapin();
    var sapin5=new Sapin();
    var lutins=new Lutin();

    var listeDeLutins=[];
   // listeDeLutins.push(lutins);
    AjoutLutin(sapin1);


    function AjoutLutin(sapin){
        switch(sapin.statue)
        {
            case "decorer" :
            {
              listeDeLutins.push(new Lutin());
                listeDeLutins.push(new Lutin());

                break;


            }
            case "nonDecorer":
            {

                listeDeLutins.push(new Lutin());
                break;
            }
            default:
                break;

        }
    }

    function ajouLutin() {
        listeDeLutins.push(new Lutin());

    }






function testSapin(sapin) {
    switch (sapin.getStatue()) {

        case "nonDecorer":
        {
            if(sapin.getTemps()===0)
            {
                sapin.setTemps(10);
            }
           else
            {
                sapin.suprimer();
            }
            break;

        }
        case "decorer":
        {
                sapin.suprimer();

            break;
        }
        default:
        {
            console.log("se sapin n'existe pas");


            break;
        }


    }

}
    function drawListeSapins() {
        sapin2.afficher=true;
        testSapin(sapin1);
        testSapin(sapin2);
       // if( !testSapin(sapin1))
       /// if(!testSapin(sapin2))
        sapin1.draw();
        sapin2.draw();
        dessineLutins();

}

    function dessineLutins()
    {
       // console.log("Nombre de lutin "+ listeDeLutins.length);
        for (var i=0;listeDeLutins.length;i++)
        {
            listeDeLutins[i].drawLutin();
        }

    }

    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.on = function(){
            this.sound.play();
        }
        this.off = function(){
            this.sound.pause();
        }
    }



    class Santa{
        constructor(){
            this.dxSanta=getRandomInt(width-50);
            this.dySanta=getRandomInt(height-70);


            this.intervalBetweenSantaX=0; // la distance entre les Santas 72
            this.intervalBetweenSantaY=getRandomInt(4)*100;
            this.widthSanta =70;
            this.heightSanta=100;
        }
        draw() {
            ctx.drawImage(santaClause,this.intervalBetweenSantaX,this.intervalBetweenSantaY, this.widthSanta, this.heightSanta, this.dxSanta, this.dySanta, 54, 84);

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
                        this.dxSanta += 10;
                    break;
                }
                case('left'):
                {
                    if(this.intervalBetweenSantaY!=debutPositionLeftPressedY )
                    {
                        this.intervalBetweenSantaY=debutPositionLeftPressedY;
                        this.intervalBetweenSantaX=0;
                    }                    else
                    {
                        this.intervalBetweenSantaX=this.intervalBetweenSantaX+72;
                    }

                    if(this.intervalBetweenSantaX==bornSupSantaX)
                        this.intervalBetweenSantaX=0;
                    if(this.dxSanta>2) // nous allons l'aisser deux pixel pour que Santa apparesse complettement
                        this.dxSanta -= 10;
                    break;
                }
                case('down'):
                {
                    if(this.intervalBetweenSantaY!=debutPositionDownPressed)
                    {
                        this.intervalBetweenSantaY=debutPositionDownPressed;
                        this.intervalBetweenSantaX=0;
                    }                    else
                    {
                        this.intervalBetweenSantaX=this.intervalBetweenSantaX+72;
                    }

                    if(this.intervalBetweenSantaX==bornSupSantaX)
                        this.intervalBetweenSantaX=0;
                    if(this.dySanta<height-70) // meme chose on evite que Santa disparer du coup on enleve 60 de la hauteur
                        this.dySanta+=10;
                    break;
                }
                case('up'):
                {
                    if(this.intervalBetweenSantaY!=debutPositionUpPressed)
                    {
                        this.intervalBetweenSantaY=debutPositionUpPressed;
                        this.intervalBetweenSantaX=0;
                    }                    else
                    {
                        this.intervalBetweenSantaX=this.intervalBetweenSantaX+72;
                    }

                    if(this.intervalBetweenSantaX==bornSupSantaX)
                        this.intervalBetweenSantaX=0;
                    if(this.dySanta>-15)
                        this.dySanta-=10;
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
    function conversion_seconde_heure(time) {
        time=time*0.001;
        var reste=time;
        var result='';
        var nbHours=Math.floor(reste/3600);
        reste -= nbHours*3600;

        var nbMinutes=Math.floor(reste/60);
        reste -= nbMinutes*60;

        var nbSeconds=Math.floor(reste);
        if(nbHours<10)
            result='0'+nbHours+': ';
        else
            result=nbHours+': ';

        if(nbMinutes<10)
            result=result+'0'+nbMinutes+': ';
        else
            result=result+nbMinutes+': ';
        if(nbSeconds<10)
            result=result+'0'+nbSeconds+' ';
        else
            result=result+nbSeconds+' ';

        return result;
    }

    var santa =new Santa()

    function drawScore() {
        ctx.font = "20px Arial";
        ctx.fillStyle = "#ff313b";
        ctx.fillText("Cadeau: "+cadeaux, 8, 20);
        ctx.fillText("Argent: "+argent, 150, 20);
        ctx.fillText("Temps: "+conversion_seconde_heure(temps),600,20);
    }

    function draw() {
        temps=temps+10; // le temps en milliseconds       ctx.clearRect(0, 0, canvas.width, canvas.height); // je commence par effacer l'ecran
        if(temps===10000)
        {
            if(sapin1.getStatue()==="decorer")
            {
                AjoutLutin();
            }
            else{
                AjoutLutin(sapin1);
            }

        }


        drawTexture();
        santa.draw();
        moveSanta();
        sapin1.draw();
        sapin2.draw();
        drawScore();
        dessineLutins();
      //  lutins.drawLutin();
       // sapin1.draw();
     //   drawListeSapins();
    }




    function collisionDetection(sapin) {
        if(santa.dxSanta > sapin.dx-40 && santa.dxSanta < sapin.dx+40 && santa.dySanta > sapin.dy-47 && santa.dySanta < sapin.dy+47)
        {
            var s=new sound("../Js/hohoho.wav");
            switch (sapin.getStatue()) {
                case "nonDecorer":
                {
                    cadeaux=cadeaux-5;
                    break;
                }
                case "decorer":
                {
                    cadeaux=cadeaux-10;
                    break;
                }
                default:
                    break;

            }
            sapin.suprimer();
            s.on();
            return true;
        }else
            return false;
    }



    function moveSanta()
    {

        if(rightPressed && !collisionDetection(sapin1) && !collisionDetection(sapin2) ) {

                santa.move('right');
        }
        else if(leftPressed && !collisionDetection(sapin1) && !collisionDetection(sapin2) ) {

            santa.move('left');


        }
        else if(downPressed && !collisionDetection(sapin1) && !collisionDetection(sapin2) )
        {
            santa.move('down');
        }
        else if(upPressed && !collisionDetection(sapin1) && !collisionDetection(sapin2) )
        {
            santa.move('up');

        }
        //collisionDetection();

    }
    function walkLutin()
    {
        for (var i=0;listeDeLutins.length;i++)
        {
            listeDeLutins[i].marche();

        }
    }
    setInterval(draw, 10);
   setInterval( drawListeSapins,10000);
    setInterval( walkLutin,300);
    // setTimeout(drawChangeObject, 10000);




