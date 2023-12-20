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
		tema.attachEvent("onclick", cambio_tema);
	}
}

function cambio_tema(){
	let tex = tema.getAttribute("color");
	let cuerpo = document.body;
	let menu = document.getElementById("menu");
	let ima = document.getElementById("imagenBtn");

	if(tex == "oscuro"){
		tema.setAttribute("color","claro");

		//cambio imagen
		ima.src = "img/sun.png";

		//aplicando estilos
		cuerpo.style.backgroundColor = "#202020";
		cuerpo.style.color="white";
		menu.style.backgroundColor = "#333";

	}else if(tex == "claro"){
		tema.setAttribute("color","oscuro");

		//cambio imagen
		ima.src = "img/moon.png";

		//aplicando estilos
		cuerpo.style.backgroundColor = "white";
		cuerpo.style.color="#202020";
		menu.style.backgroundColor = "#16c810";
	}
}
