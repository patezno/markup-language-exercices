var formElement = null;

var numeroSecreto = null;
var numeroSecreto2 = null;
var numeroSecreto3 = null;

var respuestaSelect = null;
var respuestaSelect2 = null;

var respuestasCheckbox = [];
var respuestasCheckbox2 = [];
var respuestasCheckbox3 = [];


var respuestasRadioButton = [];
var respuestasRadioButton2 = [];

var nota = 0;

//nota de la prueba sobre 3 puntos (hay 3 preguntas)
//****************************************************************************************************
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.

window.onload = function() {

	//CORREGIR al apretar el botón

	// A la variable formElement guardam tots els elements del formulari

	formElement = document.getElementById('form');

	formElement.onsubmit = function() {

		inicializar();

		if (comprobar()) {

			corregirNumber();

			corregirSelect();

			corregirCheckbox();

			corregirRadioButton();

			corregirSelect2();

			corregirNumber2();

			corregirCheckbox2();

			corregirRadioButton2();

			corregirCheckbox3();

			corregirNumber3();

			presentarNota();

		}

		return false;

	}


	// Cream XMLHttpRequest i ho guardam a la variable xhttp

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {

			gestionarXml(this);

		}
	}
	;

	// Damunt XMLHttpRequest cridam al métode .open on l'indicam quin si volem GET o POST i la ruta del xml

	xhttp.open("POST", "https://raw.githack.com/patezno/Markup-Language-Exercices/master/Ejercicio 14/xml/preguntas.xml", true);

	xhttp.send();

}


/*-------------------------------FUNCIONS------------------------------*/

// Recuperamos los datos del fichero XML
// xmlDOC es el documento leido XML.

function gestionarXml(dadesXml) {

	var xmlDoc = dadesXml.responseXML;

	//Parse XML to xmlDoc


	//NUMBER
	//Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto


	/*-------------------------------INPUT------------------------------*/

	var tituloInput = xmlDoc.getElementsByTagName("title")[0].innerHTML;
	ponerDatosInputHtml(tituloInput);
	numeroSecreto = parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);


	var tituloInput2 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
	ponerDatosInput2Html(tituloInput2);
	numeroSecreto2 = parseInt(xmlDoc.getElementsByTagName("answer")[6].innerHTML);


	var tituloInput3 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
	ponerDatosInput3Html(tituloInput3);
	numeroSecreto3 = parseInt(xmlDoc.getElementsByTagName("answer")[12].innerHTML);


	/*-------------------------------SELECT------------------------------*/

	//SELECT
	//Recuperamos el título y las opciones, guardamos la respuesta correcta
	var tituloSelect = xmlDoc.getElementsByTagName("title")[1].innerHTML;
	var opcionesSelect = [];
	var nopt = xmlDoc.getElementById("pregunta_02").getElementsByTagName('option').length;
	for (i = 0; i < nopt; i++) {
		opcionesSelect[i] = xmlDoc.getElementById("pregunta_02").getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosSelectHtml(tituloSelect,opcionesSelect);
	respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);


	//SELECT2
	//Recuperamos el título y las opciones, guardamos la respuesta correcta
	var tituloSelect2=xmlDoc.getElementsByTagName("title")[4].innerHTML;
	var opcionesSelect2 = [];
	var nopt = xmlDoc.getElementById("pregunta_05").getElementsByTagName('option').length;
	for (i = 0; i < nopt; i++) {
		opcionesSelect2[i] = xmlDoc.getElementById("pregunta_05").getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosSelect2Html(tituloSelect2,opcionesSelect2);
	respuestaSelect2=parseInt(xmlDoc.getElementsByTagName("answer")[4].innerHTML);


	/*-------------------------------CHECKBOX------------------------------*/

	//CHECKBOX
	//Recuperamos el título y las opciones, guardamos las respuestas correctas
	var tituloCheckbox = xmlDoc.getElementsByTagName("title")[3].innerHTML;
	var opcionesCheckbox = [];
	var nopt = xmlDoc.getElementById("pregunta_04").getElementsByTagName('option').length;


	for (i = 0; i < nopt; i++) {

		opcionesCheckbox[i] = xmlDoc.getElementById("pregunta_04").getElementsByTagName('option')[i].innerHTML;

	}


	ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);

	var nres = xmlDoc.getElementById("pregunta_04").getElementsByTagName("answer").length;


	for (i = 0; i < nres; i++) {

		respuestasCheckbox[i] = xmlDoc.getElementById("pregunta_03").getElementsByTagName("answer")[i].innerHTML;

	}


	//CHECKBOX2
	//Recuperamos el título y las opciones, guardamos las respuestas correctas


	var tituloCheckbox2 = xmlDoc.getElementsByTagName("title")[4].innerHTML;
	var opcionesCheckbox2 = [];
	var nopt = xmlDoc.getElementById("pregunta_05").getElementsByTagName("option").length;


	for (i = 0; i < nopt; i++) {

		opcionesCheckbox2[i] = xmlDoc.getElementById("pregunta_05").getElementsByTagName("option")[i].innerHTML;

	}


	ponerDatosCheckbox2Html(tituloCheckbox2, opcionesCheckbox2);

	var nres = xmlDoc.getElementById("pregunta_05").getElementsByTagName("answer").length;


	for (i = 0; i < nres; i++) {

		respuestasCheckbox2[i] = xmlDoc.getElementById("pregunta_05").getElementsByTagName("answer")[i].innerHTML;

	}


	//CHECKBOX3
	//Recuperamos el título y las opciones, guardamos las respuestas correctas

	var tituloCheckbox3 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
	var opcionesCheckbox3 = [];
	var nopt = xmlDoc.getElementById("pregunta_06").getElementsByTagName("option").length;


	for (i = 0; i < nopt; i++) {

		opcionesCheckbox3[i] = xmlDoc.getElementById("pregunta_06").getElementsByTagName("option")[i].innerHTML;

	}


	ponerDatosCheckbox3Html(tituloCheckbox3,opcionesCheckbox3);

	var nres = xmlDoc.getElementById("pregunta_06").getElementsByTagName("answer").length;


	for (i = 0; i < nres; i++) {

		respuestasCheckbox3[i] = xmlDoc.getElementById("pregunta_06").getElementsByTagName("answer")[i].innerHTML;

    }


    /*-------------------------------RADIO------------------------------*/


    // PRIMERA PREGUNTA RADIO //


	var tituloRadioButton = xmlDoc.getElementsByTagName("title")[0].innerHTML; // Primera pregunta
	var opcionesRadioButton = []; // Array buit on guardarem les opcions
    var nopt = xmlDoc.getElementById("pregunta_00").getElementsByTagName("option").length; // Nombre d'opcions de la pregunta_00


    // Omplim l'array opcionesRadioButton amb cada opció

	for (i = 0; i < nopt; i++) {

        opcionesRadioButton[i] = xmlDoc.getElementById("pregunta_00").getElementsByTagName("option")[i].innerHTML;

    }


    // Guardam el titol de la pregunta_00 i les seves opcions

    ponerDatosRadioButtonHtml(tituloRadioButton, opcionesRadioButton);


    // Calculam quantes respostes té la pregunta

    var nres = xmlDoc.getElementById("pregunta_00").getElementsByTagName("answer").length;


    // Guardam al array buit respuestasRadioButton cada resposta que tengui la pregunta

	for (i = 0; i < nres; i++) {

        respuestasRadioButton[i] = xmlDoc.getElementById("pregunta_00").getElementsByTagName("answer")[i].innerHTML;

    }


    // SEGONA PREGUNTA RADIO //

    var tituloRadioButton2 = xmlDoc.getElementsByTagName("title")[2].innerHTML;
    var opcionesRadioButton2 = [];
    var nopt = xmlDoc.getElementById("pregunta_02").getElementsByTagName("option").length;


	for (i = 0; i < nopt; i++) {

        opcionesRadioButton2[i] = xmlDoc.getElementById("pregunta_02").getElementsByTagName("option")[i].innerHTML;

    }


    ponerDatosRadioButton2Html(tituloRadioButton2, opcionesRadioButton2);


    var nres = xmlDoc.getElementById("pregunta_02").getElementsByTagName("answer").length;


	for (i = 0; i < nres; i++) {

        respuestasRadioButton2[i] = xmlDoc.getElementById("pregunta_02").getElementsByTagName("answer")[i].innerHTML;

    }


}
//****************************************************************************************************

/*-------------------------------CORRECCIÓ PREGUNTES-------------------------------*/

// CORRECIÓ INPUT //

//implementación de la corrección

function corregirNumber() {


	//Vosotros debéis comparar el texto escrito con el texto que hay en el xml
	//en este ejemplo hace una comparación de números enteros

	var s=formElement.elements[0].value;

	if (s==numeroSecreto) {

		darRespuestaHtml("P1: Exacto!");
		nota +=1;

	} else {

		if (s>numeroSecreto) darRespuestaHtml("P1: Te has pasado"); else darRespuestaHtml("P1: Te has quedado corto");

	}
}


function corregirNumber2() {
	//Vosotros debéis comparar el texto escrito con el texto que hay en el xml
	//en este ejemplo hace una comparación de números enteros
	var s=formElement.elements[11].value;
	if (s==numeroSecreto2) {
		darRespuestaHtml("P6: Eso es!!");
		nota +=1;
	} else {
		if (s>numeroSecreto2) darRespuestaHtml("P6: Te has pasadoo"); else darRespuestaHtml("P6: Te has quedado cortoo");
	}
}


function corregirNumber3() {
	//Vosotros debéis comparar el texto escrito con el texto que hay en el xml
	//en este ejemplo hace una comparación de números enteros
	var s=formElement.elements[24].value;
	if (s==numeroSecreto3) {
		darRespuestaHtml("P10: Eso es!!");
		nota +=1;
	} else {
		if (s>numeroSecreto3) darRespuestaHtml("P10: Te has pasadoo"); else darRespuestaHtml("P10: Te has quedado cortoo");
	}
}


// CORRECIÓ SELECTS //

function corregirSelect() {
	//Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
	//para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
	//luego comparar ese value con el value guardado en answer
	var sel = formElement.elements[1];
	if (sel.selectedIndex-1==respuestaSelect) {
		//-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
		darRespuestaHtml("P2: Correcto");
		nota +=1;
	} else darRespuestaHtml("P2: Incorrecto");
}


function corregirSelect2() {
	//Compara el índice seleccionado con el valor del íncide que hay en el xml (<answer>2</answer>)
	//para implementarlo con type radio, usar value para enumerar las opciones <input type='radio' value='1'>...
	//luego comparar ese value con el value guardado en answer
	var sel2 = formElement.elements[10];
	if (sel2.selectedIndex-1==respuestaSelect2) {
		//-1 porque hemos puesto una opción por defecto en el select que ocupa la posición 0
		darRespuestaHtml("P5: Correcto");
		nota +=1;
	} else darRespuestaHtml("P5: Incorrecto");
}


// CORRECIÓ CHECKBOX //

//Si necesitáis ayuda para hacer un corregirRadio() decirlo, lo ideal es que a podáis construirla modificando corregirCheckbox

function corregirCheckbox() {


	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]

	var f = formElement;
	var escorrecta = [];
	var correctas = 0;
	var incorrectas = 0;
	var notaPregunta = 0;

	for (i = 0; i < f.color.length; i++) {


		//"color" es el nombre asignado a todos los checkbox

		if (f.color[i].checked) {

			escorrecta[i]=false;

			for (j = 0; j < respuestasCheckbox.length; j++) {

				if (i == respuestasCheckbox[j]) escorrecta[i] = true;

			}


			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.

			if (escorrecta[i]) {

				nota += (1.0 / respuestasCheckbox.length);
				notaPregunta += 0.5;
				correctas += 1;


				//dividido por el número de respuestas correctas

			} else {

				nota -=1.0/respuestasCheckbox.length;


				//dividido por el número de respuestas correctas

				notaPregunta -=0.5;

				incorrectas +=1;

			}
		}
	}

	darRespuestaHtml("Question 4: Corrects -> (" + correctas + ") Incorrects -> (" + incorrectas + ") Mark: " + notaPregunta);

}


function corregirCheckbox2() {

	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]
	var f = formElement;
	var escorrecta = [];
	var correctas = 0;
	var incorrectas = 0;
	var notaPregunta = 0;


	for (i = 0; i < f.color1.length; i++) {


		//"color" es el nombre asignado a todos los checkbox
		if (f.color1[i].checked) {

			escorrecta[i] = false;

			for (j = 0; j < respuestasCheckbox2.length; j++) {

				if (i == respuestasCheckbox2[j]) escorrecta[i] = true;

			}

			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje.

			if (escorrecta[i]) {

				nota += (1.0 / respuestasCheckbox2.length);
				notaPregunta += 0.5;
				correctas += 1;

				//dividido por el número de respuestas correctas

			} else {

				nota -= (1.0 / respuestasCheckbox2.length);
				//dividido por el número de respuestas correctas
				notaPregunta -= 0.5;
				incorrectas += 1;

			}
		}
	}
	darRespuestaHtml("Question 5: Corrects -> (" + correctas + ") Incorrects -> (" + incorrectas + ") Mark: " + notaPregunta);
}


function corregirCheckbox3() {

	//Para cada opción mira si está checkeada, si está checkeada mira si es correcta y lo guarda en un array escorrecta[]

	var f = formElement;
	var escorrecta = [];
	var correctas = 0;
	var incorrectas = 0;
	var notaPregunta = 0;

	for (i = 0; i < f.color2.length; i++) {


		//"color" es el nombre asignado a todos los checkbox

		if (f.color2[i].checked) {

			escorrecta[i] = false;

			for (j = 0; j < respuestasCheckbox3.length; j++) {

				if (i == respuestasCheckbox3[j]) escorrecta[i] = true;

			}


			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje

			if (escorrecta[i]) {

				nota += (1.0 / respuestasCheckbox3.length);
				notaPregunta += 0.5;
				correctas += 1;

				//dividido por el número de respuestas correctas

			} else {

				nota -= (1.0 / respuestasCheckbox3.length);

				//dividido por el número de respuestas correctas

				notaPregunta -= 0.5;

				incorrectas += 1;

			}
		}
	}

	darRespuestaHtml("Question 6: Corrects-> (" + correctas + ") Incorrects-> (" + incorrectas + ") Mark: " + notaPregunta);
}


// CORRECIÓ RADIO //

function corregirRadioButton() {


	/*Para cada opción mira si está checkeada, si está checkeada,
	 mira si es correcta y lo guarda en el array escorrecta[]*/

	var f = formElement;
	var escorrecta = [];

	for (i = 0; i < f.radio.length; i++) {


		//"radio" es el valor asignado al atributo name de cada input type radio

		if (f.radio[i].checked) {

			escorrecta[i] = false;


			/* Recorr s'array de respuestasRadioButton, algo innecesari
			perque a nes input type radio només hi ha 1 resposta vàlida*/

			for (j = 0; j < respuestasRadioButton.length; j++) {

				if (i == respuestasRadioButton[j]) escorrecta[i] = true;

			}


			//si es correcta sumamos y ponemos mensaje, si no es correcta restamos y ponemos mensaje

			if (escorrecta[i]) {


				// Això és igual d'innecessari

				nota += (1.0 / respuestasRadioButton.length);


				//dividido por el número de respuestas correctas

				darRespuestaHtml("Question 1: Correct! :)");

			} else {

				darRespuestaHtml("Question 1: Wrong :|");

			}
		}
	}
}


function corregirRadioButton() {


	/*Para cada opción mira si está checkeada, si está checkeada,
	 mira si es correcta y lo guarda en el array escorrecta[]*/

	var f = formElement;
	var escorrecta = [];

	for (i = 0; i < f.radio.length; i++) {


		if (f.radio[i].checked) {


			escorrecta[i] = false;

			for (j = 0; j < respuestasRadioButton2.length; j++) {

				if (i == respuestasRadioButton2[j]) escorrecta[i] = true;

			}


			if (escorrecta[i]) {


				nota += (1.0 / respuestasRadioButton2.length);

				darRespuestaHtml("Question 3: Correct! :)");


			} else {

				darRespuestaHtml("Question 3: Wrong :|");

			}
		}
	}
}


/****************************************************************************************************/

// Aquí se ponen los resultados del XML en el HTML //

/*-------------------FUNCIONES INPUT----------------------*/

function ponerDatosInputHtml(titulo) {

	document.getElementById("tituloInput").innerHTML = titulo;

}


function ponerDatosInput2Html(titulo) {

	document.getElementById("tituloInput2").innerHTML = titulo;

}


function ponerDatosInput3Html(titulo) {

	document.getElementById("tituloInput3").innerHTML = titulo;

}



/*-------------------FUNCIONES SELECT----------------------*/

function ponerDatosSelectHtml(t,opt) {
	document.getElementById("tituloSelect").innerHTML = t;
	var select = document.getElementsByTagName("select")[0];
	for (i = 0; i < opt.length; i++) {
		var option = document.createElement("option");
		option.text = opt[i];
		option.value=i+1;
		select.options.add(option);
	}
}
function ponerDatosSelect2Html(t,opt) {
	document.getElementById("tituloSelect2").innerHTML=t;
	var select = document.getElementsByTagName("select")[1];
	for (i = 0; i < opt.length; i++) {
		var option = document.createElement("option");
		option.text = opt[i];
		option.value=i+1;
		select.options.add(option);
	}
}

/*-------------------FUNCIONES CHECKBOX----------------------*/

function ponerDatosCheckboxHtml(t, opt) {


	var checkboxContainer = document.getElementById('divPregunta_04');
	document.getElementById('pregunta_04').innerHTML = t;


	for (i = 0; i < opt.length; i++) {

		var input = document.createElement("input");
		var label = document.createElement("label");

		label.innerHTML = opt[i];
		label.setAttribute("for", "color_" + i);
		input.type = "checkbox";
		input.name = "color";
		input.id = "color_" + i;
		;

		checkboxContainer.appendChild(input);
		checkboxContainer.appendChild(label);
		checkboxContainer.appendChild(document.createElement("br"));

	}
}


function ponerDatosCheckbox2Html(t, opt) {


	var checkbox2Container = document.getElementById('divPregunta_05');
	document.getElementById('pregunta_05').innerHTML = t;


	for (i = 0; i < opt.length; i++) {


		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML = opt[i];
		label.setAttribute("for", "color1_" + i);
		input.type = "checkbox";
		input.name = "color1";
		input.id = "color1_" + i;
		;

		checkbox2Container.appendChild(input);
		checkbox2Container.appendChild(label);
		checkbox2Container.appendChild(document.createElement("br"));


	}
}


function ponerDatosCheckbox3Html(t, opt) {


	var checkbox3Container=document.getElementById('divPregunta_06');
	document.getElementById('pregunta_06').innerHTML = t;

	for (i = 0; i < opt.length; i++) {


		var input = document.createElement("input");
		var label = document.createElement("label");

		label.innerHTML = opt[i];
		label.setAttribute("for", "color2_" + i);
		input.type = "checkbox";
		input.name = "color2";
		input.id = "color2_" + i;
		;


		checkbox3Container.appendChild(input);
		checkbox3Container.appendChild(label);
		checkbox3Container.appendChild(document.createElement("br"));


	}


}


/*-------------------FUNCIONES RADIO----------------------*/


function ponerDatosRadioButtonHtml(titulo, opciones) {


	// Guardam a la variable RadioButtonContainer l'id del div del html on es generaran els input radio

	var RadioButtonContainer = document.getElementById("divPregunta_00");


	// Relacionam la part del HTML(esquerra) amb la part de l'XML(dreta)

	document.getElementById("pregunta_00").innerHTML = titulo;


	// Per a cada opció es crea un input i un label amb els seus atributs i es fica dintre de RadioButtonContainer

	for (i = 0; i < opciones.length; i++) {


		// Dedins les variables guardam un input i un label

		var input = document.createElement("input");

		var label = document.createElement("label");


		// Dedins l'etiqueta label posam el primer element de l'array opciones

		label.innerHTML = opciones[i];


		// A l'etiqueta label li posam l'atribut for i el valor "resposta" + 1

		label.setAttribute("for", "resposta" + i);

		input.type = "radio";

		input.name = "radio";

		input.id = "resposta" + i;
		;


		// Agregam 3 etiquetes fills a RadioButtonContainer, que és un div

		RadioButtonContainer.appendChild(input);
		RadioButtonContainer.appendChild(label);
		RadioButtonContainer.appendChild(document.createElement("br"));


	}

}


function ponerDatosRadioButton2Html(titulo, opciones) {


	var RadioButton2Container = document.getElementById("divPregunta_02");

	document.getElementById("pregunta_02").innerHTML = titulo;

	for (i = 0; i < opciones.length; i++) {

		var input = document.createElement("input");

		var label = document.createElement("label");

		label.innerHTML = opt[i];

		label.setAttribute("for", "resposta" + i);

		input.type = "radio";

		input.name = "radio2";

		input.id = "resposta" + i;
		;

		RadioButton2Container.appendChild(input);
		RadioButton2Container.appendChild(label);
		RadioButton2Container.appendChild(document.createElement("br"));


	}
}


//****************************************************************************************************


//Gestionar la presentación de las respuestas

function darRespuestaHtml(r) {

	var p = document.createElement("p");
	var node = document.createTextNode(r);
	p.appendChild(node);
	document.getElementById('resultadosDiv').appendChild(p);

}


function presentarNota() {

	darRespuestaHtml("Nota: " + nota + " puntos sobre 10");

}

function inicializar() {

	document.getElementById('resultadosDiv').innerHTML = "";
	nota = 0.0;

}


//Comprobar que se han introducido datos en el formulario

function comprobar() {

	var f = formElement;
	var checkedCheckbox = false;
	var checkedCheckbox2 = false;
	var checkedCheckbox3 = false;
	var checkedRadioButton = false;
	var checkedRadioButton2 = false;

	for (i = 0; i < f.color.length; i++) {


		//"color" es el nombre asignado a todos los checkbox

		if (f.color[i].checked) checkedCheckbox = true;

	}


	for (i = 0; i < f.color1.length; i++) {

		if (f.color1[i].checked) checkedCheckbox2 = true;

	}


	for (i = 0; i < f.color2.length; i++) {

		if (f.color2[i].checked) checkedCheckbox3 = true;

	}


	for (i = 0; i < f.Monjon.length; i++) {

		if (f.radio[i].checked) checkedRadioButton = true;

	}


	for (i = 0; i < f.Monjon1.length; i++) {

		if (f.radio2[i].checked) checkedRadioButton2 = true;

	}


	if (f.elements[0].value=="") {

		f.elements[0].focus();
		alert("Escribe un numero en la primera pregunta");
		return false;

	} else if (f.elements[1].selectedIndex==0) {

		f.elements[1].focus();
		alert("Selecciona una opcion en la segunda pregunta");
		return false;

	} else if (!checkedCheckbox) {

		document.getElementsByTagName("h3")[2].focus();
		alert("Selecciona las opciones de la pregunta 3 ");
		return false;

	} else if (!checkedRadioButton) {

		document.getElementsByTagName("h3")[3].focus();
		alert("Selecciona una opcion de la pregunta 4 ");
		return false;

	} else if (f.elements[10].selectedIndex == 0) {

		f.elements[10].focus();
		alert("Selecciona una opcion de la pregunta 5");
		return false;

	} else if (f.elements[11].value == "") {

		f.elements[11].focus();
		alert("Escribe un numero en la pregunta 6 ");
		return false;

	} else if (!checkedCheckbox2) {

		document.getElementsByTagName("h3")[6].focus();
		alert("Selecciona las opciones de la pregunta 7 ");
		return false;

	} else if (!checkedRadioButton2) {

		document.getElementsByTagName("h3")[7].focus();
		alert("Selecciona una opcion de la pregunta 8");
		return false;

	} else if (!checkedCheckbox3) {

		document.getElementsByTagName("h3")[8].focus();
		alert("Selecciona las opciones de la penultima pregunta");
		return false;

	} else if (f.elements[24].value == "") {

		f.elements[24].focus();
		alert("Escribe un numero en la ultima pregunta");
		return false;

	} else  return true;


}
