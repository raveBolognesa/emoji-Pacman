let w, h, w2, h2
// var boton = document.querySelector("#start-button")


function sound() {
    this.sound = document.createElement("audio");
    this.sound.src = "../emoji-Pacman/mp3/pac-man-theme-remix-by-arsenic1987.mp3";
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

 var myMusic = new sound();

function setup(canvas, draw) {
    function setCanvasDimensions() {
        canvas.setAttribute("height", 600)
        canvas.setAttribute("width", 800)
        myMusic.play();
    }

    w = 800
    h = 600
    w2 = w / 2
    h2 = h / 2

    setCanvasDimensions()
    draw()

    function hideHtml() {
        document.getElementById("main").classList.toggle("hola");
        document.querySelector(".canvas").setAttribute("id","canvasContainer");
      }
      hideHtml()
}

