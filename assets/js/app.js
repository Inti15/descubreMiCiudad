var slideIndex = 1;

mostrarImg(slideIndex);

// function plusImg(n) {
//   mostrarImg(slideIndex += n);
// }

function imgActual(n) {
  mostrarImg(slideIndex = n);
}

function mostrarImg(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  var circulos = document.getElementsByClassName("circulo");

  if (n<1) {
    slideIndex = x.length;
  }

  // for (i = 0; i < x.length; i++) {
  //   x[i].style.display = "none";
  // }

  for (i = 0; i < circulos.length; i++) {
    circulos[i].className = circulos[i].className.replace("relleno", "");
  }
  x[slideIndex-1].style.display = "block";
  circulos[slideIndex-1].className += "relleno";
}
