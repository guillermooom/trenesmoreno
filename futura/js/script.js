if (document.addEventListener) {
	window.addEventListener("load", inicio);
} else if (document.attachEvent) {
	window.attachEvent("onload", inicio);
}

function inicio(){
   let tema = document.getElementById("tema");

   if (document.addEventListener) {
		tema.addEventListener("click", cambio_tema);
	} else if (document.attachEvent) {
		tema.attachEvent("click", cambio_tema);
	}
}

function cambio_tema(){
	let tex = tema.innerHTML;
	let cuerpo = document.body;

	if(tex == "Tema Oscuro"){
		tema.innerHTML="Tema Claro";

		//aplicando estilos
		cuerpo.style.backgroundColor = "#202020";
		cuerpo.style.color="white"

	}else if(tex == "Tema Claro"){
		tema.innerHTML="Tema Oscuro";

		//aplicando estilos
		cuerpo.style.backgroundColor = "white";
		cuerpo.style.color="#202020"
	}
}
