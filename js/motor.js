var panel = document.getElementById("parametros");

function draw() {
  var cName = () => {
    var rew = document.getElementById("input").value;
    if (rew.length >= 3) {
      return rew
    } else {
      return `un ${document.getElementById("mySelect").value}`
    }
  };
  var radius = 20;
  var coco = new Coco(360, 40, ctx, radius);
  var puntos = 1;
  var framecounter = 0;
  var fondo = new Fondo(ctx);
  var fantasma = new Fantasma(280, 360, ctx, radius);
  var fantasma2 = new Fantasma(360, 360, ctx, radius);
  var fantasma3 = new Fantasma(400, 360, ctx, radius);
  var fantasma4 = new Fantasma(440, 360, ctx, radius);
  fondo.cearMatriz();
  setInterval(function () {


    var end = (coco, puntos) => {
      if (coco.life === 7 && puntos === 3) {
        setTimeout(() => {

          location.reload()
        }, 4000);
      }
    }
    end(coco, puntos);
    if (coco.life === 0 && puntos === 1) {
      this.ctx.clearRect(0, 0, w, h);
      ctx.font = "60px Staatliches";
      ctx.fillText(`☠︎︎︎︎☠︎ ${cName()} ☠︎︎︎︎☠︎`, 250, 300);
      ctx.fillText(`☠︎︎︎︎☠︎  ha muerto ☠︎︎︎︎☠︎`, 250, 370);
      coco.matriz = Matrix2;
      fantasma.matriz = Matrix2;
      fantasma2.matriz = Matrix2;
      fantasma3.matriz = Matrix2;
      fantasma4.matriz = Matrix2;

      fantasma.posX = 280;
      fantasma.posY = 360;
      fantasma2.posX = 360;
      fantasma2.posY = 360;
      fantasma3.posX = 400;
      fantasma3.posY = 360;
      fantasma4.posX = 440;
      fantasma4.posY = 360;
      setTimeout(() => {

        location.reload()

        fondo.matriz = Matrix2;
        fondo.nuevaMatriz = [];
        fondo.cearMatriz();
        fondo.colision(coco);
        fondo.pintar();
      }, 1500)
      setTimeout(() => {

        fantasma.posX = 280;
        fantasma.posY = 360;
        fantasma2.posX = 360;
        fantasma2.posY = 360;
        fantasma3.posX = 400;
        fantasma3.posY = 360;
        fantasma4.posX = 440;
        fantasma4.posY = 360;
        fantasma.moving(coco);
        fantasma.drawBall();
        fantasma2.moving(coco);
        fantasma2.drawBall();
        fantasma3.moving(coco);
        fantasma3.drawBall();
        fantasma4.moving(coco);
        fantasma4.drawBall();
        coco.drawBall();
        coco.checkGameOver(fantasma, fantasma2, fantasma3, fantasma4);

      }, 1500);

    } else if (coco.life < 7) {
      this.ctx.clearRect(0, 0, w, h)
      fondo.colision(coco);
      framecounter++;
      fantasma.moving(coco);
      fantasma.drawBall();
      fantasma2.moving(coco);
      fantasma2.drawBall();
      fantasma3.moving(coco);
      fantasma3.drawBall();
      fantasma4.moving(coco);
      fantasma4.drawBall();
      coco.drawBall();
      coco.checkGameOver(fantasma, fantasma2, fantasma3, fantasma4);
      fondo.pintar();
    } else if (coco.life === 7 && puntos === 1) {
      this.ctx.clearRect(0, 0, w, h);
      ctx.font = "60px Staatliches";
      ctx.fillText("Nivel 2!  Reestart", 200, 300);
      coco.matriz = Matrix2;
      fantasma.matriz = Matrix2;
      fantasma2.matriz = Matrix2;
      fantasma3.matriz = Matrix2;
      fantasma4.matriz = Matrix2;

      fantasma.posX = 280;
      fantasma.posY = 360;
      fantasma2.posX = 360;
      fantasma2.posY = 360;
      fantasma3.posX = 400;
      fantasma3.posY = 360;
      fantasma4.posX = 440;
      fantasma4.posY = 360;
      setTimeout(() => {

        fondo.matriz = Matrix2;
        fondo.nuevaMatriz = [];
        fondo.cearMatriz();
        fondo.colision(coco);
        fondo.pintar();
      }, 1500)
      setTimeout(() => {
        puntos = 2;

        fantasma.posX = 280;
        fantasma.posY = 360;
        fantasma2.posX = 360;
        fantasma2.posY = 360;
        fantasma3.posX = 400;
        fantasma3.posY = 360;
        fantasma4.posX = 440;
        fantasma4.posY = 360;

        fantasma.moving(coco);
        fantasma.drawBall();
        fantasma2.moving(coco);
        fantasma2.drawBall();
        fantasma3.moving(coco);
        fantasma3.drawBall();
        fantasma4.moving(coco);
        fantasma4.drawBall();
        coco.drawBall();
        coco.checkGameOver(fantasma, fantasma2, fantasma3, fantasma4);

      }, 1500);

    } else if (coco.life === 7 && puntos === 2) {
      this.ctx.clearRect(0, 0, w, h);
      ctx.font = "60px Staatliches";
      ctx.fillText(`Nivel ${puntos+1}!  Reestart`, 200, 300);
      coco.matriz = Matrix3;
      fantasma.matriz = Matrix3;
      fantasma2.matriz = Matrix3;
      fantasma3.matriz = Matrix3;
      fantasma4.matriz = Matrix3;

      fantasma.posX = 280;
      fantasma.posY = 360;
      fantasma2.posX = 360;
      fantasma2.posY = 360;
      fantasma3.posX = 400;
      fantasma3.posY = 360;
      fantasma4.posX = 440;
      fantasma4.posY = 360;
      setTimeout(() => {

        fondo.matriz = Matrix3;
        fondo.nuevaMatriz = [];
        fondo.cearMatriz();
        fondo.colision(coco);
        fondo.pintar();
      }, 1500)
      setTimeout(() => {

        puntos = 3;
        fantasma.posX = 280;
        fantasma.posY = 360;
        fantasma2.posX = 360;
        fantasma2.posY = 360;
        fantasma3.posX = 400;
        fantasma3.posY = 360;
        fantasma4.posX = 440;
        fantasma4.posY = 360;

        fantasma.moving(coco);
        fantasma.drawBall();
        fantasma2.moving(coco);
        fantasma2.drawBall();
        fantasma3.moving(coco);
        fantasma3.drawBall();
        fantasma4.moving(coco);
        fantasma4.drawBall();
        coco.drawBall();
        coco.checkGameOver(fantasma, fantasma2, fantasma3, fantasma4);
      }, 1500);



    } else if (coco.life === 7 && puntos === 3) {
      this.ctx.clearRect(0, 0, w, h);
      ctx.font = "60px Staatliches";
      puntos = 3;
      ctx.fillText(`Fin, Reestart!`, 200, 300);


      coco.matriz = Matrix4;
      fantasma.matriz = Matrix4;
      fantasma2.matriz = Matrix4;
      fantasma3.matriz = Matrix4;
      fantasma4.matriz = Matrix4;

      fantasma.posX = 280;
      fantasma.posY = 360;
      fantasma2.posX = 360;
      fantasma2.posY = 360;
      fantasma3.posX = 400;
      fantasma3.posY = 360;
      fantasma4.posX = 440;
      fantasma4.posY = 360;
      setTimeout(() => {

        fondo.matriz = Matrix4;
        fondo.nuevaMatriz = [];
        fondo.cearMatriz();
        fondo.colision(coco);
        fondo.pintar();
      }, 1500)
      setTimeout(() => {

        fantasma.posX = 280;
        fantasma.posY = 360;
        fantasma2.posX = 360;
        fantasma2.posY = 360;
        fantasma3.posX = 400;
        fantasma3.posY = 360;
        fantasma4.posX = 440;
        fantasma4.posY = 360;

        fantasma.moving(coco);
        fantasma.drawBall();
        fantasma2.moving(coco);
        fantasma2.drawBall();
        fantasma3.moving(coco);
        fantasma3.drawBall();
        fantasma4.moving(coco);
        fantasma4.drawBall();
        coco.drawBall();
        coco.checkGameOver(fantasma, fantasma2, fantasma3, fantasma4);

      }, 1500);

    }

    panel.innerHTML = `<p style="font-size: 20px;color: orange;">Tu eres:  ${cName()}</p>
    <p style="font-size: 20px;color: orange;">Your lifes:   <span>${coco.paintHearts()}</span></span></p>
    <p style="font-size: 20px;color: #76CBDA;">My Pos-X: ${coco.posX} & My PosY : ${coco.posY}</p>
    <p style="font-size: 20px;color: orange;">Framecounter:  ${framecounter}</p>
    <p style="font-size: 20px;color: orange;">Nivel de juego:  ${puntos}</p>`;


  }, 100 / puntos);


}