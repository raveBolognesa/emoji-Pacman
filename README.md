[![N|Solid](https://ravebolognesa.github.io/emoji-Pacman2/images/logo.png)](https://ravebolognesa.github.io/emoji-Pacman2/)

# Emoji - Pacman

Es un remake de el clasico pacman dandole un estilo mas moderno y juvenil.

  - Usamos html css y js
  - Usando emojis ya que son UTF-8
  - Magic

### Código importante

Me diverti especialmente con la implementacion de la seleccion de personaje manipulando el DOM, no tiene una gran complejidad pero me resulto lo9 más curioso.

Html...

```sh
$ <h2 class="🐱">
$     Eres un
$     <select id="mySelect" class="🐱">
$       <option value="gato">🐱</option>
$       <option value="caca">💩</option>
$       <option value="cerdo">🐷</option>
$       <option value="beer">🍺</option>
$     </select>
$     Emoji
$   </h2>
```

Js...

```sh
$ coco.src = `./images/${mySelect}.png`;
$ ....
$ this.mySelect = document.getElementById("mySelect").value;
$ ....
```


License
----

Rafa
