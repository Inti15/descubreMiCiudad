var nav=document.getElementById("nav");
var buttonPlaces=document.getElementById("places");
var buttonGame=document.getElementById("game");

function showBar(){
	var countScroll = document.body.scrollTop;
	if(countScroll>408.8){
		nav.style.display="block";
	} else{
		nav.style.display="none";
	}
}

document.addEventListener("scroll", showBar);


    var textoA= [];
    var numeroImagen=[];

    var modal = document.getElementById("modal");
	var imagenes= document.getElementsByClassName("img");
	var imagenM = document.getElementsByClassName("img0")[0];
	var texto = document.getElementsByClassName("texto");
	var borrar = document.getElementsByClassName("cerrar")[0];

	    borrar.addEventListener("click",ocultar);
	    var longitud= imagenes.length;
      

    for (var i = 0; i < longitud; i++) {
    	imagenes[i].addEventListener("click",mostrar);
    	   textoA.push(texto[i]);
    	   numeroImagen.push(i)
       }
    
 function mostrar () {
         modal.style.display="block";
         imagenM.src= this.src
      }

function ocultar () {
  	modal.style.display="none";
  }
