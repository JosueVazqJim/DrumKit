//a cada elemento con la clase "drum" que encuentre, se le agrega un event listener que escucha el
//evento "click" y ejecuta la función "hadleClick
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    //preparamos el sonido de acuerdo a la letra
    let audio = new Audio(sonido(this.textContent));
    audio.play();
    //new Audio("./sounds/tom-1.mp3").play();

    //agregamos la animación al boton para que cambie de color cada vez que se presiona
    buttonAnimation(this.textContent);
  });
}

//añadimos un evento de teclado que escucha el evento "keydown" y
//de acuerdo a la tecla presionada, ejecuta la función "Sonido"
document.addEventListener("keydown", function (event) {
  let audio = new Audio(sonido(event.key));
  audio.play();
  //agregamos la animación al boton para que cambie de color cada vez que se presiona
  buttonAnimation(event.key);
});

//funcion que asigna un sonido de acuerdo al valor del boton
function sonido(letra) {
  switch (letra) {
    case "w":
      return "./sounds/tom-1.mp3";
    case "a":
      return "./sounds/tom-2.mp3";
    case "s":
      return "./sounds/tom-3.mp3";
    case "d":
      return "./sounds/tom-4.mp3";
    case "j":
      return "./sounds/snare.mp3";
    case "k":
      return "./sounds/crash.mp3";
    case "l":
      return "./sounds/kick-bass.mp3";
    default:
      console.log("Opción no reconocida");
      break;
  }
}

//funcion que agrega la animación al boton que se presionó
function buttonAnimation(currentKey) {
  //se le agrega la clase "pressed" al boton que se presionó
  document.querySelector("." + currentKey).classList.add("pressed");
  //se le quita la clase "pressed" al boton que se presionó después de 100ms, asi es la sintaxis de setTimeout
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
  return;
}
