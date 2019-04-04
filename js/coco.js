var mySelect = document.getElementById("mySelect").value;

var coco = new Image();
coco.src = `./images/${mySelect}.png`;
var amigo2 = new Image();
amigo2.src = "./images/unicornio.png";


function noise() {
    this.noise = document.createElement("audio");
    this.noise.src = "../mp3/pain.mp3";
    this.noise.setAttribute("preload", "auto");
    this.noise.setAttribute("controls", "none");
    this.noise.style.display = "none";
    document.body.appendChild(this.noise);
    this.play = function () {
        this.noise.play();
    }
    this.stop = function () {
        this.noise.pause();
    }
}

var noiseDead = new noise();

function yeah() {
    this.yeah = document.createElement("audio");
    this.yeah.src = "../mp3/yeah.mp3";
    this.yeah.setAttribute("preload", "auto");
    this.yeah.setAttribute("controls", "none");
    this.yeah.style.display = "none";
    document.body.appendChild(this.yeah);
    this.play = function () {
        this.yeah.play();
    }
    this.stop = function () {
        this.yeah.pause();
    }
}

var yeahGood = new yeah();



function knock() {
    this.knock = document.createElement("audio");
    this.knock.src = "../mp3/knock.mp3";
    this.knock.setAttribute("preload", "auto");
    this.knock.setAttribute("controls", "none");
    this.knock.style.display = "none";
    document.body.appendChild(this.knock);
    this.play = function () {
        this.knock.play();
    }
    this.stop = function () {
        this.knock.pause();
    }
}

var knockGood = new knock();



class Coco {
    constructor(we, he, ctx, r) {
        this.mySelect = document.getElementById("mySelect").value;
        this.posX = we;
        this.posY = he;
        this.ctx = ctx;
        this.radius = r;
        this.setListeners();
        this.imagen = coco;
        this.matriz = Matrix;
        console.log(this.matriz)
        this.obstaculos = [];
        this.state = "alive";
        this.colision = 0;
        this.life = 3;
        this.direction = "Left";
        this.arrDirections = ["Left", "Right", "Top", "Bottom"];
        this.movimientos = []
    }
    soundlevel() {
        if (this.life === 7) {

            knockGood.play();
        }
    }
    drawBall() {
        coco.src = `./images/${this.mySelect}.png`;
        this.ctx.drawImage(
            this.imagen,
            this.posX,
            this.posY,
            this.radius * 2,
            this.radius * 2
        );
    }
    deadCoco() {
        if (this.state === "dead") {
            this.ctx.clearRect(0, 0, w, h);
            ctx.font = "60px Staatliches";
            puntos = 3;
            ctx.fillText(`game over!`, 200, 300);
            setTimeout(() => {

                location.reload()
            }, 2000);
        } else {
            return false
        }
    }
    checkGameOver(p, o, i, ty) {
        if (p.posX === this.posX && p.posY === this.posY) {
            noiseDead.play();
            this.life--
        } else if (o.posX === this.posX && o.posY === this.posY) {
            noiseDead.play();
            this.life--
        } else if (i.posX === this.posX && i.posY === this.posY) {
            noiseDead.play();
            this.life--
        } else if (ty.posX === this.posX && ty.posY === this.posY) {
            noiseDead.play();
            this.life--
        }
    }
    paintHearts() {
        const heart = () => {
            return `\t♥️`
        };
        if (this.life === 7) {
            this.posX = 360;
            this.posy = 40;
            setTimeout(() => {
                this.life = 3
                this.level++
            }, 1000);

            return heart() + heart() + heart() + heart() + heart() + heart() + heart()
        } else if (this.life === 6) {
            return heart() + heart() + heart() + heart() + heart() + heart()
        } else if (this.life === 5) {
            return heart() + heart() + heart() + heart() + heart()
        } else if (this.life === 4) {
            return heart() + heart() + heart() + heart()
        } else if (this.life === 3) {
            return heart() + heart() + heart()
        } else if (this.life === 2) {
            return heart() + heart()
        } else if (this.life === 1) {
            return heart()
        } else if (this.life === 0) {
            // alert("☠️☠️ Game Over ☠️☠️")
            setTimeout(() => {

                location.reload()
            }, 1500);
        }
    }
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

    ifBonus1() {
        this.soundlevel();
        if (this.posX === 40 && this.posY === 40 && bonus1.state === true) {
            this.imagen = amigo2
            bonus1.src = ""
            bonus1.state = false
            yeahGood.play()

            this.life++
            setTimeout(() => {
                this.imagen = coco;
                bonus1.src = "./images/Donut.png";
                bonus1.state = true
            }, 4000);
        }
    }
    ifBonus2() {
        this.soundlevel();

        if (this.posX === 720 && this.posY === 40 && bonus1.state === true) {
            this.imagen = amigo2
            bonus2.src = ""
            bonus2.state = false
            yeahGood.play()

            this.life++
            setTimeout(() => {
                this.imagen = coco;
                bonus2.src = "./images/Donut2.png";
                bonus2.state = true
            }, 4000);
        }
    }
    ifBonus3() {
        this.soundlevel();

        if (this.posX === 360 && this.posY === 520 && bonus1.state === true) {
            this.imagen = amigo2
            bonus3.src = ""
            bonus3.state = false
            yeahGood.play()

            this.life++
            setTimeout(() => {
                this.imagen = coco;
                bonus3.src = "./images/Donut3.png";
                bonus3.state = true
            }, 4000);
        }
    }


    setListeners() {
        document.onkeydown = function (event) {
            if (event.keyCode === 37) {
                if (this.posX === 0 && this.posY === 360) {
                    this.posX = 760;
                } else if (this.colisionRigth() === false) {
                    this.posX += 0;
                    this.colision++;
                } else {
                    this.posX -= 40;
                    this.ifBonus1();
                    this.ifBonus2();
                    this.ifBonus3();
                }
            }
            if (event.keyCode === 39) {
                if (this.posX === 760 && this.posY === 360) {
                    this.posX = 0;
                } else if (this.colisionLeft() === false) {
                    this.posX += 0;
                    this.colision++;
                } else if (760 === this.posX) {
                    this.posX += 0;
                } else {
                    this.posX += 40;
                    this.ifBonus1();
                    this.ifBonus2();
                    this.ifBonus3();
                }
            }
            if (event.keyCode === 38) {
                if (0 === this.posY) {
                    this.posY -= 0;
                } else if (this.colisionTop() === false) {
                    this.posY -= 0;
                    this.colision++;
                } else {
                    this.posY -= 40;
                    this.ifBonus1();
                    this.ifBonus2();
                    this.ifBonus3();
                }
            }
            if (event.keyCode === 40) {
                if (560 === this.posY) {
                    this.posY += 0;
                } else if (this.colisionBottom() === false) {
                    this.posY += 0;
                    this.colision++;
                } else {
                    this.posY += 40;
                    this.ifBonus1();
                    this.ifBonus2();
                    this.ifBonus3();
                }
            }

        }.bind(this);
    }
}