const santaClause=new Image();
santaClause.src="../Js/santa.png";
       class Santa {
static intervalBetweenSantaY;
static intervalBetweenSantaX;
static dxSanta;
static dySanta;
    static
        constructor() {

            this.dxSanta = 0;
            this.dySanta = 0;
            this.intervalBetweenSantaX = 0; // la distance entre les Santas 72
            this.intervalBetweenSantaY = 0;
            this.widthSanta = 70;
            this.heightSanta = 100;

            this.debutPositionLeftPressedY=300;
            this.debutPositionRightPressedY=100;
            this.debutPositionDownPressed=200;
            this.debutPositionUpPressed=0;
            this.bornSupSantaX=144;
        }

      static  draw() {
            ctx.drawImage(santaClause, this.intervalBetweenSantaX, this.intervalBetweenSantaY, this.widthSanta, this.heightSanta, this.dxSanta, this.dySanta, 54, 64);

        }

        static move(direction) {
            switch (direction) {
                case('right'): {
                    if (this.intervalBetweenSantaY != this.debutPositionRightPressedY) {
                        this.intervalBetweenSantaY = this.debutPositionRightPressedY;
                        this.intervalBetweenSantaX = 0;
                    } else {
                        this.intervalBetweenSantaX = this.intervalBetweenSantaX + 72;
                    }

                    if (this.intervalBetweenSantaX == this.bornSupSantaX)
                        this.intervalBetweenSantaX = 0;
                    if (this.dxSanta < 800 - 50) // On enleve 50 pour que Santa ne disparesse pas completement sur le bord
                        this.dxSanta += 2;
                    break;
                }
                case('left'): {
                    if (this.intervalBetweenSantaY != this.debutPositionLeftPressedY) {
                        this.intervalBetweenSantaY = this.debutPositionLeftPressedY;
                        this.intervalBetweenSantaX = 0;
                    } else {
                        this.intervalBetweenSantaX = this.intervalBetweenSantaX + 72;
                    }

                    if (this.intervalBetweenSantaX == this.bornSupSantaX)
                        this.intervalBetweenSantaX = 0;
                    if (this.dxSanta > 2) // nous allons l'aisser deux pixel pour que Santa apparesse complettement
                        this.dxSanta -= 2;
                    break;
                }
                case('down'): {
                    if (this.intervalBetweenSantaY != this.debutPositionDownPressed) {
                        this.intervalBetweenSantaY = this.debutPositionDownPressed;
                        this.intervalBetweenSantaX = 0;
                    } else {
                        this.intervalBetweenSantaX = this.intervalBetweenSantaX + 72;
                    }

                    if (this.intervalBetweenSantaX == this.bornSupSantaX)
                        this.intervalBetweenSantaX = 0;
                    if (this.dySanta < 600 - 70) // meme chose on evite que Santa disparer du coup on enleve 60 de la hauteur
                        this.dySanta += 2;
                    break;
                }
                case('up'): {
                    if (this.intervalBetweenSantaY != this.debutPositionUpPressed) {
                        this.intervalBetweenSantaY = this.debutPositionUpPressed;
                        this.intervalBetweenSantaX = 0;
                    } else {
                        this.intervalBetweenSantaX = this.intervalBetweenSantaX + 72;
                    }

                    if (this.intervalBetweenSantaX == this.bornSupSantaX)
                        this.intervalBetweenSantaX = 0;
                    if (this.dySanta > -15)
                        this.dySanta -= 2;
                    break;
                }
                default: {
                    console.log('bla bla bla');
                    break;
                }
            }

        }


    }

export default {Santa};