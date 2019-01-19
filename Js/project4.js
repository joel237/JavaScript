window.onload=function () {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    const texture = new Image();
    const santaClause=new Image();
    const tree=new Image();
    const lutin=new Image();
    const boule=new Image();
    var rightPressed = false;
    var leftPressed = false;
    var downPressed=false;
    var upPressed=false;
    var LutinBouge=true;
    var RunJeux=true;

    var cadeaux=100;
    var argent=600;
    var temps=0;
    texture.src = "../Js/texture.jpg";
    santaClause.src="../Js/santa.png";
    tree.src="../Js/tree.png";
    lutin.src="../Js/lutin.png";
    boule.src="../Js/boule.jpg";

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

    var positionBoule=[[356,857,284,307],[654,854,278,309],[219,522,282,300],[73,169,286,319]]; // 4 Boule de noel seron soichie de manier aleatoir

    var  sapinDecorerPosition = [
        [288, 213,68,77],
        [416, 191,63,94],[96,133,95,124],[0,259,95,127],[96,259,100,127]];

var vitesseLutins=10;
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
                        this.Vx += vitesseLutins;

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
                        this.Vx -= vitesseLutins;

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
                        this.Vy += vitesseLutins;
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
                        this.Vy -= vitesseLutins;
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
            this.afficher=false;

            this.dx=getRandomInt(width-80);
            this.dy=getRandomInt(height-95);
        }

        draw() {
            if(this.afficher)
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
    AjoutLutin(sapin1);


    function AjoutLutin(sapin){
        if(RunJeux)
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
                    if(RunJeux)
                    sapin.suprimer();
                }
                break;

            }
            case "decorer":
            {

                    if(RunJeux)
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
        testSapin(sapin1);
        testSapin(sapin2);
        if(sapin1.afficher===false && sapin2.afficher===false)
        {
            AjoutLutin(sapin1);
            sapin1.afficher=true;
        }
        else
        {
            if(sapin1.afficher===false)
                AjoutLutin(sapin1);
            else
                AjoutLutin(sapin2);

            sapin1.afficher=true;
            sapin2.afficher=true;
        }
        sapin1.draw();
        sapin2.draw();
        dessineLutins();

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
                    }            else
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
                    }                else
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
                    }
                else
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
                    }
                else
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
    document.addEventListener("keypress", entryPress,false);






    function pause() {
        ctx.beginPath();
        s.off();
        s3.off();
        s2.off();
        s4.off();
        s5.off();
        ctx.font ="bold 70px sans-serif";
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        var centreX = width/2;
        var centreY = height/2;
        ctx.font =" bold 30px sans-serif";
        ctx.strokeText("Argent Restant: "+ argent.toString(),centreX,centreY-120);
        ctx.fillText("Argent Restant: "+ argent.toString(),centreX,centreY-120);
        ctx.strokeText("Cadeaux Restant: "+ cadeaux.toString(),centreX,centreY-80);
        ctx.fillText("Cadeaux Restant: "+ cadeaux.toString(),centreX,centreY-80);
        ctx.strokeText("Temps: "+conversion_seconde_heure(temps).toString(),centreX,centreY-40);
        ctx.fillText("Temps: "+conversion_seconde_heure(temps).toString(),centreX,centreY-40);
        ctx.strokeText("Pause",centreX,centreY-180);
        ctx.fillText("Pause",centreX,centreY-180);
        ctx.strokeText("appuyer sur espace pour rejouer",centreX,centreY +60);
        ctx.fillText("appuyer sur espace pour rejouer",centreX,centreY +60);
        ctx.closePath();
    }





    function entryPress(e) {
        switch (e.keyCode) {
            case (32):
            {

                if(RunJeux)
                {
                    if(cadeaux<=0 || argent<=0)
                        document.location.reload();

                    RunJeux=false;
                    s.off();
                    s3.off();
                    s2.off();
                    s4.off();
                    s5.off();


                }
                else
                {
                    RunJeux=true;
                    if(cadeaux<=0 || argent<=0)
                        document.location.reload();
                }
                break;
            }
            default:
                break;
        }

    }

    var s3=new sound("../Js/footsteps_snow_4.mp3");
    function keyDownHandler(e) {

        s3.on();
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
        s3.off();
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
    let indiceBoule1 = getRandomInt(4);
    var Vxboule1=getRandomInt(width-80);
    var Vyboule1=getRandomInt(height-90);
    let indiceBoule2 = getRandomInt(4);
    var Vxboule2=getRandomInt(width-80);
    var Vyboule2=getRandomInt(height-90);
function drawBoule1() {
      //  alert("Un boule de noel");
    ctx.drawImage(boule,positionBoule[indiceBoule1][0],positionBoule[indiceBoule1][1], positionBoule[indiceBoule1][2],positionBoule[indiceBoule1][3] ,Vxboule1, Vyboule1, 44, 74);
}
    function drawBoule2() {
        //  alert("Un boule de noel");
        ctx.drawImage(boule,positionBoule[indiceBoule2][0],positionBoule[indiceBoule2][1], positionBoule[indiceBoule2][2],positionBoule[indiceBoule2][3] ,Vxboule2, Vyboule2, 44, 74);
    }


    function dessineLutins()
    {
        // console.log("Nombre de lutin "+ listeDeLutins.length);
        for (var i=0;listeDeLutins.length;i++)
        {
            listeDeLutins[i].drawLutin();
        }

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
    ctx.beginPath();
        ctx.font = "20px Arial";


        ctx.fillStyle = "#000";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1;

        ctx.strokeText("Cadeau: "+cadeaux, 90, 20);
        ctx.fillText("Cadeau: "+cadeaux, 90, 20);

        ctx.strokeText("Argent: "+argent, 370, 20);
        ctx.fillText("Argent: "+argent, 370, 20);
        ctx.strokeText("Temps: "+conversion_seconde_heure(temps),600,20);
        ctx.fillText("Temps: "+conversion_seconde_heure(temps),600,20);


        ctx.closePath();
    }
var tempsAttrapez=0;
var s4= new sound("../Js/Emotisound-hoho.wav");
var s5= new sound("../Js/Ho Ho Ho St Nick-SoundBible.com-1954250969.mp3");
    function draw() {

        if(RunJeux)
        temps=temps+10; // le temps en milliseconds
        if(temps==190000)
            vitesseLutins=vitesseLutins+20;// la vitesse augmente de 20
        ctx.clearRect(0, 0, canvas.width, canvas.height); // je commence par effacer l'ecran

        drawTexture();

      if(tempsAttrapez===0)
      {
          if(temps>=70000 && temps<85000)
          {
            if(LutinBouge)
              {
                  drawBoule1();
                  atrapeBoule1();
              }
              else
                  tempsAttrapez=temps;

          }else if(temps>=150000 && temps<165000)
          {

              if(LutinBouge)
              {
                  drawBoule2();
                  atrapeBoule2();
              }
              else
                  tempsAttrapez=temps;

          }
      }
      if(!LutinBouge && RunJeux)
          s5.on();
      // apres collision
       if(tempsAttrapez!=0)
       {
           if(temps>=tempsAttrapez && temps<tempsAttrapez+15000)
                LutinBouge=false;
           if(temps>=tempsAttrapez+15000)
           {
               tempsAttrapez=0;
               LutinBouge=true;
           }

       }
       if(tempsAttrapez===0)
       {
           LutinBouge===true;
       }
        sapin1.draw();
        sapin2.draw();
        santa.draw();
        if(cadeaux<=0 || argent<=0)
        {

            RunJeux=false;
            if(cadeaux<=0)
            {
                gameOver(" Vous avez gagnez ");
            }else
            {
                gameOver(" Vous avez perdu ");
            }


        }
        if(RunJeux)
        {
            moveSanta();
            drawScore();
        }else if(cadeaux>0 && argent>0)
        {
            pause();
        }
        if(!RunJeux)
        {
            s.off();
            s2.off();
            s3.off();
            s4.off();
            s5.off();
        }

       // lutins.drawLutin();
        dessineLutins();
        // sapin1.draw();
        //   drawListeSapins();
    }






    function gameOver(message)

    {
        s.off();
        s2.off();
        s3.off();
        s4.off();
        s5.off();

        let argentOucadeaux="";
        if(argent<=0)
        {
            argentOucadeaux="Cadeaux restant: " + cadeaux.toString();
        }
        else
            argentOucadeaux="Argent restant: " + argent.toString();


        ctx.font ="bold 70px sans-serif";
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        var centreX = width/2;
        var centreY = height/2;
        ctx.strokeText(message,centreX,centreY - 180);
        ctx.fillText(message,centreX,centreY - 180);
        ctx.font =" bold 30px sans-serif";
        ctx.strokeText(argentOucadeaux,centreX,centreY-60);
        ctx.fillText(argentOucadeaux,centreX,centreY-60);
        ctx.strokeText("appuyer sur espace pour rejouer",centreX,centreY - 120);
        ctx.fillText("appuyer sur espace pour rejouer",centreX,centreY - 120);
        ctx.closePath();


    }






    var s=new sound("../Js/hohoho.wav");

    function collisionDetection(sapin) {
        if(sapin.afficher)
        {
            if(santa.dxSanta > sapin.dx-40 && santa.dxSanta < sapin.dx+40 && santa.dySanta > sapin.dy-47 && santa.dySanta < sapin.dy+47)
            {
                switch (sapin.getStatue()) {
                    case "nonDecorer":
                    {
                        cadeaux=cadeaux-5;
                        if(cadeaux<0)
                            cadeaux=0;
                        break;
                    }
                    case "decorer":
                    {
                        cadeaux=cadeaux-10;
                        if(cadeaux<0)
                            cadeaux=0;
                        break;
                    }

                }
                sapin.suprimer();
                if(RunJeux)
                s.on();
                drawListeSapins();
                return true;
            }else
                return false;
        }else
            return false;

    }

    var s2=new sound("../Js/sf-laugh-elf-creature-01.mp3");

  function collisionLutin(lutin) {

      if(santa.dxSanta > lutin.Vx-40 && santa.dxSanta < lutin.Vx+40 && santa.dySanta > lutin.Vy-47 && santa.dySanta < lutin.Vy+47)
      {
          console.log("colision");
          if(RunJeux)
            s2.on();
          argent-=5;
          if(argent<0)
              argent=0;
          return true;
      }else
          return false;
  }
  function collisionAllLutin() {
      for (var i=0;listeDeLutins.length;i++)
      {
         if (collisionLutin(listeDeLutins[i]))
             return true;
      }
      return false;

  }
function atrapeBoule1() {
    if(santa.dxSanta > Vxboule1-40 && santa.dxSanta < Vxboule1+40 && santa.dySanta > Vyboule1-47 && santa.dySanta < Vyboule1+47)
    {
        LutinBouge=false;
    }

        }


    function atrapeBoule2() {
        if(santa.dxSanta > Vxboule2-40 && santa.dxSanta < Vxboule2+40 && santa.dySanta > Vyboule2-47 && santa.dySanta < Vyboule2+47)
            LutinBouge=false;

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
        else if(upPressed && !collisionDetection(sapin1) && !collisionDetection(sapin2)  )
        {
            santa.move('up');

        }
        //collisionDetection();

    }

    function walkLutin()
    {
        if(LutinBouge && RunJeux)
        for (var i=0;listeDeLutins.length;i++)
        {
            listeDeLutins[i].marche();

        }
    }
    setInterval(draw, 10);
    setInterval( drawListeSapins,10000);
    setInterval(collisionAllLutin,10);
    setInterval( walkLutin,300);
    // setTimeout(drawChangeObject, 10000);




}