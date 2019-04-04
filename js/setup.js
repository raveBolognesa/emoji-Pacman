let w, h, w2, h2
// var boton = document.querySelector("#start-button")

function sound() {
    this.sound = document.createElement("audio");
    this.sound.src = "pac-man-theme-remix-by-arsenic1987.mp3";
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



function noise() {
    this.noise = document.createElement("audio");
    this.noise.src = "pain.mp3";
    this.noise.setAttribute("preload", "auto");
    this.noise.setAttribute("controls", "none");
    this.noise.style.display = "none";
    document.body.appendChild(this.noise);
    this.play = function(){
        this.noise.play();
    }
    this.stop = function(){
        this.noise.pause();
    }
}

 var noiseDead = new noise();

 function yeah() {
     this.yeah = document.createElement("audio");
     this.yeah.src = "yeah.mp3";
     this.yeah.setAttribute("preload", "auto");
     this.yeah.setAttribute("controls", "none");
     this.yeah.style.display = "none";
     document.body.appendChild(this.yeah);
     this.play = function(){
         this.yeah.play();
     }
     this.stop = function(){
         this.yeah.pause();
     }
 }
 
  var yeahGood = new yeah();

  

  function knock() {
    this.knock = document.createElement("audio");
    this.knock.src = "knock.mp3";
    this.knock.setAttribute("preload", "auto");
    this.knock.setAttribute("controls", "none");
    this.knock.style.display = "none";
    document.body.appendChild(this.knock);
    this.play = function(){
        this.knock.play();
    }
    this.stop = function(){
        this.knock.pause();
    }
}

 var knockGood = new knock();