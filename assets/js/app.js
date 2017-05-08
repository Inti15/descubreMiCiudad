var tarjetasColor = document.getElementsByClassName("datos");
var padre, hijo;
var index = 0;

for (var i = 0; i < tarjetasColor.length; i++) {
  padre = tarjetasColor[i].parentNode;
  padre.addEventListener("mouseover",mostrarInfo);
  padre.addEventListener("mouseout", ocultarInfo);
  index = i+1;
}

function mostrarInfo() {
  // estilo();
  hijo = this.firstElementChild;
  hijo.style.display = "block";
  // clases();
}

function ocultarInfo() {
hijo.style.display = "none";

}
