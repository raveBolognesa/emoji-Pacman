var amigo = new Image();
amigo.src = "./images/amigo.png";

class Fantasma {
    constructor(a,b,ctx, r) {
        this.posX = a;
        this.posY = b;
        this.ctx = ctx;
        this.radius = r;
        this.matriz = Matrix;
        this.obstaculos = [];
        this.colision = 0;
        this.direction = "Left";
        this.arrDirections = ["Left", "Right", "Top", "Bottom"];
        this.random = Math.floor(Math.random() * 3)
    }
    drawBall() {
        this.ctx.drawImage(amigo, this.posX, this.posY, this.radius * 2.5, this.radius * 2);
    }
    move() {}


    colisionRigth() {
        for (let firstindex = 0; firstindex < this.matriz.length; firstindex++) {
            for (let index = 0; index < this.matriz[firstindex].length; index++) {
                if (this.matriz[firstindex][index] === 1) {
                    if (index * 40 + 40 === this.posX && firstindex * 40 === this.posY) {
                        return false
                    }
                }
            }
        }
    }
    colisionLeft() {
        for (let firstindex = 0; firstindex < this.matriz.length; firstindex++) {
            for (let index = 0; index < this.matriz[firstindex].length; index++) {
                if (this.matriz[firstindex][index] === 1) {
                    if (index * 40 - 40 === this.posX && firstindex * 40 === this.posY) {
                        return false
                    }
                }
            }
        }
    }
    colisionTop() {
        for (let firstindex = 0; firstindex < this.matriz.length; firstindex++) {
            for (let index = 0; index < this.matriz[firstindex].length; index++) {
                if (this.matriz[firstindex][index] === 1) {
                    if (index * 40 === this.posX && firstindex * 40 + 40 === this.posY) {
                        return false
                    }
                }
            }
        }
    }
    colisionBottom() {
        for (let firstindex = 0; firstindex < this.matriz.length; firstindex++) {
            for (let index = 0; index < this.matriz[firstindex].length; index++) {
                if (this.matriz[firstindex][index] === 1) {
                    if (index * 40 === this.posX && firstindex * 40 - 40 === this.posY) {
                        return false
                    }
                }
            }
        }
    }
    moving(player) {
        var change = 0;
        if (change %10 === 0 ){
            this.direction = this.arrDirections[Math.floor(Math.random() * 4)]
        }
        if (this.direction === "Right") {
          if (this.posX === 0 && this.posY === 360) {
            this.posX = 760;
          } else if (this.colisionRigth() === false) {
            this.direction = this.arrDirections[Math.floor(Math.random() * 4)]
            this.colision++;
          } else {
            this.posX -= 40;
          }
        }
        if (this.direction === "Left") {
          if (this.posX === 760 && this.posY === 360) {
            this.posX = 0;
          } 
          else if (this.colisionLeft() === false) {
            this.direction = this.arrDirections[Math.floor(Math.random() * 4)]
              this.colision++;
            } else if (760 === this.posX) {
            this.posX += 0;
          } else {
            this.posX += 40;
          }
        }
        if (this.direction === "Top") {
          if (0 === this.posY) {
            this.posY -= 0;
          } else if (this.colisionTop() === false) {
            this.direction = this.arrDirections[Math.floor(Math.random() * 4)]
              this.colision++;
          }else {
            this.posY -= 40;
          }
        }
        if (this.direction === "Bottom") {
          if (560 === this.posY) {
            this.posY += 0;
          } else if (this.colisionBottom() === false) {
            this.direction = this.arrDirections[Math.floor(Math.random() * 4)]
              this.colision++;
          }else {
            this.posY += 40;
          }
        }


        if (change % 20 === 0){
            if (player.posX < this.posX){
                this.direction = "Right"
            } else if (player.posY < this.posY){ this.direction = "Top"}
            else if (player.posX > this.posX){
                this.direction = "Left"
            } else if (player.posY > this.posY){ this.direction = "Bottom"}
        }
    }
}