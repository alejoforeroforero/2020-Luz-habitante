var introPopup;
var textoPopup;
var descargaPopup;
var contenedorProyectos;

var creditosOn = false;

function construirPc()
{
	crearContenedores();
}

function construirMoviles()
{
	alert('Este proyecto funciona sólo en computadoras');
	
	crearContenedores();	
}

function crearContenedores()
{
	descargaPopup = cE('div', document.body);
	descargaPopup.id = 'descargaPopup';
	
	var img = cE('img', descargaPopup)
	img.src = 'a2imagenes/loading.gif';
	
	introPopup = cE('div', document.body);
	introPopup.id = 'introPopup';
	
	textoPopup = cE('div', document.body);
	textoPopup.id = 'textoPopup';
	
	contenedorProyectos = cE('div', document.body);	
	contenedorProyectos.innerHTML = '';
	contenedorProyectos.style.width = window.innerWidth + 'px';
	contenedorProyectos.style.height = window.innerHeight + 'px';
	contenedorProyectos.id = 'contenedorProyectos';	
	
	crearPopupInicio();	
	
	/*******/
	
	var divCreditos = cE('div', document.body);
	divCreditos.id = 'divCreditos';
	
	var div = cE('div', divCreditos);
	div.innerHTML = '<b>Título: </b>Luz habitante</br>' +
	'<b>Autores: </b>Angel David Hurtado, Enya Loboguerrero, Valeria Borda Hernandez, Martha Catalina Gómez y Alejandro Forero</br>' +
	'Programación Web: Alejandro Forero</br>' +
	'<b>Técnica: </b>Video, fotografía, sonido, Html5 y JavaScript</br>' +
	'<b>Año:</b> 2020</br></br>' +
	'A través de la mirada…. </br>' +
'La mirada al otro…</br>' +
'La mirada a lo otro…</br>' +
'Aquello que pasamos desapercibido…</br>' +
'Lo pequeño…</br>' +
'Lo fugaz…</br>' +
'Lo existente…</br>' +
'Lo habitante…</br>' +
'El habitante continuo de los espacios, el jugador, el acompañante eterno.</br>' +
'El invisible, que nos ofrece sus constantes danzas y paisajes.</br>' +
'El día mismo, y el pequeño de la noche. </br>' +
'.</br>' +
'.</br>' +
'Este proyecto vuelve hacia la luz, hacia la mirada de todo lo que pasamos desapercibido en lo cotidiano. La sensibilidad desde el confinamiento.';
	
	var div = cE('div', divCreditos);
	div.className = 'cerrar';
	
	var span = cE('span', div);		
	span.innerHTML = 'x';
	
	span.addEventListener('click', function()
	{
		divCreditos.style.display = 'none';	
		creditosOn = false;	
	});
	
	var infoCreditos = cE('div', document.body);
	infoCreditos.id = 'infoCreditos';
	infoCreditos.innerHTML = 'i';	
	
	infoCreditos.addEventListener('click', function()
	{
		if(!creditosOn)
		{
			divCreditos.style.display = 'block';
			creditosOn = true;
		}
		else
		{
			divCreditos.style.display = 'none';
			creditosOn = false;			
		}
	});			
}

function crearPopupInicio()
{
	var div = cE('div', introPopup);
	div.id = 'tituloIntro';
	div.innerHTML = 'LUZ HABITANTE';
	
	var div = cE('div', introPopup);
	div.innerHTML = 'Este proyecto fue realizado durante el aislamiento obligatorio decretado por la pandemia del COVID-19 en el año 2020.<br> '+
	'Te invitamos a recorrer este Sitio web con una actitud contemplativa y hacer uso de audífonos para escuchar todos los matices sonoros.';
	
	var div = cE('div', introPopup);
	div.id = 'cBoton';
	
	var span = cE('span', div);
	span.innerHTML = 'ENTRAR';
	span.className = 'boton';
	span.onclick = function()
	{
		introPopup.style.display = 'none';
		luz();
	}		
}