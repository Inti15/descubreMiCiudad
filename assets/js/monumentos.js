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


//GAMING

var total=0;
var reiniciar = document.getElementById("reiniciar");
function recargar(){
  location.reload();
}
function arrastrar(evento){
  evento.dataTransfer.setData("texto",evento.target.id);
  
}

function soltar(evento){
  evento.preventDefault();
  var data = evento.dataTransfer.getData("texto");
  if (data<7){
    evento.target.appendChild(document.getElementById(data));
    document.getElementById("resultado").innerHTML="✔"
    document.getElementById("resultado").style.color="green";
    total++
    if (total==6){
      document.getElementById("resultado").innerHTML="♛ GANASTE ♛"
      document.getElementById("resultado").style.color="white";
    }
  }else{
    document.getElementById("resultado").innerHTML="✘"
    document.getElementById("resultado").style.color="#800000";
    }
    
}

function permitirSoltar(evento){
  evento.preventDefault();
}

document.addEventListener("click", recargar);