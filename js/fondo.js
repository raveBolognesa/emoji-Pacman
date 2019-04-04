var bonus1 = new Image();
bonus1.src = "./images/Donut.png";
bonus1.state = true;


var bonus2 = new Image();
bonus2.src = "./images/Donut2.png";
bonus2.state = true;


var bonus3 = new Image();
bonus3.src = "./images/Donut3.png";
bonus3.state = true;


class Circulos {
    constructor(x, y, ctx) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = 30;
    }
    drawBall() {
        // console.log(this)
        this.ctx.beginPath();
        this.ctx.fillStyle = "#FF8E00";
        this.ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

class Fondo {
    constructor(ctx) {
        this.ctx = ctx;
        this.nuevaMatriz = [];
        this.matriz = Matrix;
        this.color = "#FF8E00";
    }
    pintarBonus() {
        this.ctx.drawImage(
            bonus1,
            40,
            40,
            40,
            40
        );
        this.ctx.drawImage(
            bonus2,
            720,
            40,
            40,
            40
        );
        this.ctx.drawImage(
            bonus3,
            360,
            520,
            40,
            40
        );
    }
    changeColor() {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.x * 40 + 20, this.y * 40 + 20, 10, 0, 2 * Math.PI);
        ctx.fill();
    }
    drawBall() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x * 40 + 20, this.y * 40 + 20, 10, 0, 2 * Math.PI);
        ctx.fill();
    }

    cearMatriz() {
        for (let firstindex = 0; firstindex < this.matriz.length; firstindex++) {
            for (let index = 0; index < this.matriz[firstindex].length; index++) {
                if (this.matriz[firstindex][index] === 1) {
                    this.nuevaMatriz.push(
                        new Circulos(index * 40 + 20, firstindex * 40 + 20, ctx)
                    );
                }
            }
        }

    }

    colision(playerPosition) {

        for (let firstindex = 0; firstindex < this.matriz.length; firstindex++) {
            for (let index = 0; index < this.matriz[firstindex].length; index++) {
                if (this.matriz[firstindex][index] === 1) {

                    if (index * 40 === playerPosition.posX && firstindex * 40 === playerPosition.posY) {
                        return false
                    }
                }
            }
        }
    }

    pintar() {
        this.nuevaMatriz.map(currentItem => {
            currentItem.drawBall();
        });
        this.pintarBonus()
    }
    pintarRojo() {

        this.color = "#FFF";

    }
}
