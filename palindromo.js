function isPalindromo(phrase) {

	// Para poder realizar la comprobacion necesitamos hacer algunas cosas antes
	
	// Convertimos la frase a minusculas
	phrase = phrase.toLowerCase();

	// Sustituimos vocales acentuadas por no acentuadas
	[{ from: 'ü', to: 'u'} , {from: 'é', to: 'e'}, { from: 'á', to: 'a'}, {from: 'í', to: 'i'}, {from: 'ó', to: 'o'} ,{from: 'ú', to: 'u'}].map(x => {
		phrase = phrase.replace(x.from, x.to);	
	});

	// Eliminamos los espacios en blanco...
	phrase = phrase.split(" ").join("");
	
	// Y obtenemos una copia "del derecho" 
	var original_phrase = phrase;

	// Invertimos la frase
	phrase = phrase.split("").reverse().join("");

	// Por ultimo comparamos
	return ((phrase == original_phrase)? true:false);
}


var p1 = "Dábale arroz a la zorra el abad";
var p2 = "No es palindromica";
var p3 = "No subas abusón";
var p4 = "Logra Casillas allí sacar gol";
var p5 = "Proyecto MILMA Será lodo o dólares";

isPalindromo(p1)?console.log("p1 cierta"):console.log("p1 no lo es");
isPalindromo(p2)?console.log("p2 cierta"):console.log("p2 no lo es");
isPalindromo(p3)?console.log("p3 cierta"):console.log("p3 no lo es");
isPalindromo(p4)?console.log("p4 cierta"):console.log("p4 no lo es");
isPalindromo(p5)?console.log("p5 cierta"):console.log("p5 no lo es");

