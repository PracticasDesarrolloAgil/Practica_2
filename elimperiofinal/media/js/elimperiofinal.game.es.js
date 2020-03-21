// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "6f90ee17-e0b7-4666-91c8-d0ba3e1ce0bc";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* Situaciones */
undum.game.situations = {
	start: new undum.SimpleSituation(
		"<p class='transient'><b>ANTES DE EMPEZAR...</b></br>\
		</br>\
		En el lejano mundo de Scadrial, mil años atrás, el Héroe de las Eras\
		que auguraban las profecías ascendió a la divinidad en el Pozo de la Ascensión\
		para poner fin al terrible mal que acechaba a la humanidad conocida como la\
		Profundidad. Aunque la Profundidad fue derrotada, el Héroe adoptó el título de\
		Lord Legislador, unificó todo el mundo e instauró el Imperio Final. Para mantener\
		controlada a toda la humanidad estableció el Ministerio de Acero, creó a los\
		Inquisidores de acero como sus ejecutores, a los Kandra como sus espías y a\
		los Koloss como sus violentos soldados.</br>\
		</br>\
		Tras su ascensión convirtió a sus aliados en nobles, de los que desciende la\
		actual nobleza, y los convirtió en los primeros nacidos de la bruma. Aquellos que\
		no los apoyaron fueron convertidos en skaa, la clase trabajadora del Imperio Final,\
		y la gran mayoría acabó convirtiéndose en siervos o esclavos. Como consecuencia\
		también de su ascensión la naturaleza de todo el planeta cambió. Surgieron montes\
		de ceniza, muchas zonas se volvieron inhabitables e infértiles y por la noche comenzó\
		a surgir una densa bruma que lo cubría todo.</br>\
		</br>\
		En la actualidad, lo que sería el siglo XVIII de nuestro mundo, una joven ladrona\
		llamada Vin conoció a una peculiar banda de ladrones que le permitió unirse a ellos.\
		Al poco tiempo el líder de la banda, Kelsier, descubrió que Vin era una nacida de la\
		bruma al igual que él pero ella no lo sabía. Kelsier decidió entrenarla para que\
		aprendiese a usar sus poderes y le reveló un golpe que la banda estaba planeando,\
		acabar con el Lord Legislador.</br>\
		</br>\
		Meses después, tras haberse infiltrado entre la nobleza y provocar una guerra entre\
		las casas nobles  más importantes y formar un ejército rebelde, Kelsier destruyó los\
		Pozos de Hathsin y con ello acabó con los suministros de Atium del Lord Legislador.\
		En respuesta a este ataque, el Lord Legislador ordenó realizar ejecuciones públicas\
		masivas de skaa en Luthadel, la capital del Imperio. En medio de las ejecuciones\
		Kelsier se enfrentó al Lord Legislador para impedir las ejecuciones pero fue asesinado.</br>\
		</br>\
		Los skaa, tras presenciar cómo alguien había sido capaz de enfrentarse al Lord\
		Legislador y hartos de los abusos de la nobleza y el Lord Legislador, se rebelaron.\
		Con la nobleza destruyéndose a sí misma en una guerra de casas y una rebelión skaa,\
		la capital del Imperio estaba al borde del colapso. Aprovechando esta situación,\
		la banda de Kelsier envió a su ejército rebelde a la ciudad para apoyar la rebelión\
		skaa pero si no acababan pronto con el Lord Legislador tarde o temprano los matarían\
		a todos. Para evitar que la rebelión fuera aplastada y los miembros de la banda\
		fuesen capturados y ejecutados, Vin se dirigió hacia el palacio del Lord Legislador\
		para matarle.</br>\
		</br>\
		<a href='entrada'>Jugar</a></p>"
	),
    entrada: new undum.SimpleSituation(
        "<h1>Entrada a Kredik Shaw</h1>\
        <p>Vin se dirigió hacia Kredik Shaw. Del cielo de color rojo cubierto de\
		nubes comenzó a caer ceniza. A lo lejos se podía ver reflejado en las brumas\
		las antorchas de los skaa. La revuelta estaba ganando adeptos y cada\
		vez se iban acercando más al palacio.</p>\
        \
        <p>Cuatro guardias nerviosos guardaban la entrada de palacio por la\
		que Vin y Kelsier entraron la última vez. Vin se acercó avanzó tranquila\
		hacia ellos. Uno de los guardias la apuntó con su lanza.</p>\
		\
		<p class='transient'>Podría hacerles frente atacándoles con monedas\
		quemando <a href='acero_situacion1'>acero</a> o incluso\
		pelear contra ellos quemando <a href='peltre_situacion1'>peltre</a>. Aunque\
		simplemente podría atacarles con sus <a href='dagas_situacion1'>dagas de cristal</a> y\
		guardar esos metales para más tarde si le hicieran falta. Otra opción sería\
		aplacarles quemando <a href='laton_situacion1'>latón</a> y no perder tiempo luchando\
		con aquellos guardias.</p>"
    ),
    acero_situacion1: new undum.SimpleSituation(
        "<p>Rápidamente, antes de que los guardias pudieran reaccionar, Vin\
		sacó un puñado de monedas. Quemó acero y lanzó las monedas hacia los\
		sorprendidos guardias. Los pequeños proyectiles alcanzaron a los guardias\
		atravesándoles el pecho, los brazos, las piernas y el cuello. Vin pasó\
		por encima de los guardias que yacían muertos sobre un charco de sangre que\
		enseguida comenzó a formarse. Matándolos se aseguraba de que no pudieran alertar\
		a más guardias, además, un guardia muerto era un problema menos del que preocuparse\
		cuando encontrara al Lord Legislador.</p>\
		\
		<p class='transient'><a href='pasillo'>Continuar</a></p>"
    ),
	dagas_situacion1: new undum.SimpleSituation(
		"<p>Sin mediar palabra, Vin sacó sus dagas de cristal. Con una increíble\
		destreza y agilidad uno a uno los guardias fueron cayendo. Al pasar por su lado,\
		uno de los guardias que seguí vivo la agarró por el tobillo. El guardia, que tenía\
		un profundo corte en la garganta, emitió una especie de gruñido ahogado por la sangre\
		que le manaba de la boca. A los pocos segundos el guardia murió. Vin se quedó un rato\
		mirando los cuerpos de los guardias. Había cambiado mucho en tan poco tiempo. Hace\
		apenas un año no era más que una muchacha insegura que sobrevivía a duras penas con\
		una banda de ladrones. Ahora, aunque movida por la ira tras la reciente muerte de\
		Kelsier, se había convertido en una asesina.</p>\
		\
		<p class='transient'><a href='pasillo'>Continuar</a></p>"
	),
	laton_situacion1: new undum.SimpleSituation(
		"<p>Vin no quería tener que pelear contra aquellos guardias. Si quería tener alguna\
		posibilidad de vencer al Lord Legislador tendría que conservar todas sus fuerzas.\
		Decidió aplacar sus emociones quemando latón como le había enseñado Kelsier durante\
		su entrenamiento.\
			- Os conozco - dijo en voz baja-. Habéis trabajado en las fábricas, las minas y\
			las fraguas. Sabíais que tarde o temprano os matarían y vuestras familias morirían\
			de hambre. Por eso acudisteis al Lord Legislador y os unisteis a su guardia.\
		Los hombres se miraron sorprendidos.\
			- Aquella luz amarillenta que se ve a lo lejos es una enorme rebelión skaa que se\
			dirige hacia aquí. No os culpo por vuestras decisiones, pero se avecina una época\
			de cambios. Podéis ir con ellos, se encuentran en la plaza donde esta tarde asesinaron\
			al superviviente de Hathsin. Vuestra formación y conocimiento pueden serles de ayuda.\
		Vin percibió miedo e incertidumbre en aquellos hombres. Con mucha delicadeza fue aplacando\
		esas emociones mientras quemaba latón. De repente uno de los guardias se arrancó la insignia\
		de su uniforme y se dirigió hacia la plaza. Los demás dudaron un momento, después lo siguieron,\
		dejándole libre a Vin la entrada a palacio.</p>\
		\
		<p class='transient'><a href='pasillo'>Continuar</a></p>"
	),
	peltre_situacion1: new undum.SimpleSituation(
		"<p>Los guardias, dispuestos a luchar, apuntaron a Vin con sus lanzas y avanzaron con\
		cautela hacia ella. Vin no tenía escapatoria. Si quemaba acero y se empujaba en el aire\
		adentrándose en el palacio, los guardias darían la voz de alarma a los demás guardias e\
		inquisidores. Si eso ocurría tarde o temprano acabarían capturándola. La única opción\
		que tenía era luchar contra ellos, pero si lo iba a hacer cuerpo a cuerpo lo mejor sería\
		quemar peltre.</p>\
		\
		<p>Uno de los guardias se abalanzó sobre ella. Vin quemó peltre lo que le permitió esquivar\
		el ataque y arrebatarle la lanza. Con su fuerza aumentada por el poder del peltre, Vin golpeó\
		en la nuca con el mango de la lanza al guardia que la atacó. La lanza se partió por la mitad\
		y el hombre cayó fulminado al suelo. Los otros tres guardias atacaron a la vez. Vin lanzó el\
		trozo de lanza que tenía la punta de piedra a uno de los guardias. El hombre bajó la mirada\
		y vio como le atravesaba el pecho un trozo de lanza, después cayó al suelo de rodillas y murió.\
		Antes de que los otros dos guardias le golpeasen, Vin saltó hacia la espalda de uno de los\
		soldados y le partió el cuello de una patada.</p>\
		\
		<p>El último guardia se detuvo un momento al ver que era el último que quedaba en pie, acto\
		seguido se volvió para atacar a Vin. Repitiendo el mismo movimiento que hizo con el primer guardia,\
		esquivó el ataque y le quitó la lanza asestando un veloz golpe contra el guardia desarmado.\
		Gracias al peltre Vin no se sentía cansada y no necesitó parar un momento para recuperar\
		el aliento, por lo que siguió su camino hacia el interior del palacio.</p>\
		\
		<p class='transient'><a href='pasillo'>Continuar</a></p>"
	),
	pasillo: new undum.SimpleSituation(
	"<h1>Pasillo de Entrada</h1>\
	<p>Vin atravesó el pasillo, pasando al lado de una sala de guardia. Justo cuando iba\
	a enfilar el siguiente pasillo un guardia salió de la sala y la vio. Enseguida dio la\
	voz de alarma y los demás guardias entraron corriendo en el pasillo. Era un grupo demasiado\
	grande para que ella sola pudiese hacerles frente. El lugar en el que se encontraba tampoco\
	le era de mucha ayuda, ya que las dimensiones del pasillo no le permitían maniobrar con tanta\
	libertad como podía hacerlo en el exterior.</p>\
	\
	<p class='transient'> No tenía muchas opciones, al no poder luchar contra tantos enemigos en un lugar cerrado.\
	Podría quemar <a href='estanio_situacion2'>estaño</a> con la esperanza de poder ver algo en el pasillo que le pudiera ser de\
	ayuda. Aunque también podría <a href='acero2_situacion2'>lanzarles las últimas monedas</a> que le quedaba y huir mientras\
	trataban de ponerse a salvo. O simplemente aumentar su velocidad quemando <a href='peltre_situacion2'>peltre</a> y salir\
	corriendo.</p>"
	),
	estanio_situacion2: new undum.SimpleSituation(
	"<p>Al quemar estaño todos sus sentidos se volvieron más agudos. De repente,\
	una fuerte luz cegó a Vin. Al quemar estaño su vista se había vuelto demasiado\
	sensible, de modo que la luz que emitían las linternas que alumbraban el pasillo\
	la deslumbraron. Uno de los guardias alcanzó a golpearla con su bastón en el\
	hombro izquierdo. El fuerte dolor hizo que reaccionara, apagó su estaño y siguió\
	corriendo por el pasillo. Mientras lo hacía se fijó en aquellas linternas, más en\
	concreto en los soportes metálicos de las linternas. Si quemaba <a href='acero_situacion2'>acero</a> se podría\
	impulsar hacia delante empujando aquellos soportes.</p>"
	),
	acero_situacion2: new undum.SimpleSituation(
	"<p>Así lo hizo, quemó acero y unas líneas azules que apuntaban hacia los soportes\
	de metal aparecieron ante los ojos de Vin. Empujó con todas sus fuerzas y salió\
	despedida en dirección contraria a los guardias, atravesando el pasillo. Cuando las\
	voces de los aquellos hombres apenas se escuchaba dejó de impulsarse, estaba tan\
	lejos que ni corriendo podrían alcanzarla. Continuó sin prisa, entrando en otro\
	pasillo que daba a una cámara central abovedada.</p>\
	\
	<p class='transient'><a href='camara'>Continuar</a></p>"
	),
	acero2_situacion2: new undum.SimpleSituation(
	"<p>Vin cogió las pocas monedas que le quedaban. No sería suficiente para acabar\
	con todos los guardias, pero confiaba en que hiriesen a unos cuantos y los\
	entretuviesen. Lanzó las monedas al aire y las empujó contra los guardias. Se\
	escuchó los gritos de algunos soldados que fueron alcanzados por los proyectiles.\
	Durante un momento se quedaron quietos intentando protegerse de nuevas monedas que\
	Vin pudiera lanzarles. Para cuando se recuperaron del ataque Vin ya había\
	desaparecido a través del pasillo. Intentaron perseguirla pero ella ya estaba\
	demasiado lejos. Cuando sus voces apenas se oían, VIn dejó de correr. Pasó a otro\
	pasillo que desembocaba en una cámara central abovedada.</p>\
	\
	<p class='transient'><a href='camara'>Continuar</a></p>"
	),
	peltre_situacion2: new undum.SimpleSituation(
	"<p>Aunque no le serviría para enfrentarse a ellos, sí que le permitiría huir de\
	ellos. Al quemar peltre podría correr más rápido que cualquier ser humano normal.\
	Quemó el metal y echó a correr por el pasillo. En pocos instantes se encontró tan\
	lejos de ellos que apenas se les podía oír. Llegó a un pasillo que le llevó a una\
	sala central abovedada.</p>\
	\
	<p class='transient'><a href='camara'>Continuar</a></p>"
	),
	camara: new undum.SimpleSituation(
	"<h1>Cámara Central Abovedada</h1>\
	<p>Dentro de aquella enorme cámara, con suelos de mármol negro y grandes braseros en los\
	rincones, había otro edificio justo en el centro custodiado por dos inquisidores. Vin\
	se acercó a aquellos seres que parecían observarla. Aunque no sabía de qué manera lo hacían\
	ya que en el lugar donde deberían tener los ojos había dos enormes clavos que sobresalían\
	por la parte trasera de sus cabezas. Eran mucho más altos que ella, uno de ellos medía por\
	lo menos medio metro más que Vin.</p>\
	\
	<p>- Te hemos estado buscando - dijo un inquisidor mientras sonreía.\
	No era la primera vez que Vin pisaba aquella cámara. La última vez lo hizo acompañada\
	por Kelsier. Sea lo que fuese que hubiera en aquel edificio tenía que ser importante para\
	que estuviera protegido por dos inquisidores. Eso fue lo que en la anterior ocasión\
	intentaron descubrir, si lo que allí estaba guardado estaba relacionado con el poder del\
	Lord Legislador.</p>\
	\
	<p class='transient'>Para poder deshacerse de los inquisidores tenía que actuar rápido. Si quemaba <a href='atium_situacion3'>Atium</a> podría\
	realizar un ataque por sorpresa anteponiendose a sus movimientos, pero corría el peligro de\
	que ellos utilizaran también Atium. Si eso ocurría, Vin no podría ver qué harían los inquisidores\
	ni los inquisidores podrían ver lo que haría ella, o peor aún, que sus reservas de Atium fuesen mayor que las de Vin y\
	se quedase sin Atium antes que ellos. Aunque tenía un as bajo la manga. No estaba segura de\
	cómo podían ver aquellos seres, pero sí sabía que al igual que ella también podían quemar acero y hierro,\
	lo que significa que pueden percibir fuentes cercanas de metal. Arrojarles un puñado de\
	<a href='polvo_situacion3'>polvo metálico</a> provocaría que los inquisidores viesen una línea azul apuntando hacia cada\
	grano de metal. De este modo durante un tiempo quedarían “cegados” dándole a ella el tiempo\
	suficiente para entrar en aquel extraño edificio y descubrir qué había en su interior.</p>"
	),
	atium_situacion3: new undum.SimpleSituation(
	"<p>Al comenzar a quemar Atium surgieron dos sombras idénticas a esos dos inquisidores.\
	Se dirigían hacia ella mientras empuñaban sus hachas de obsidiana. Tenía que hacer algo\
	antes de que esa visión se materializase y fuese alcanzada por esas afiladas hachas de\
	piedra. Tenía un plan para el cual tendría que dar un empujón quemando <a href='acero_situacion3'>acero</a>.</p>"
	),
	acero_situacion3: new undum.SimpleSituation(
	"<p>Antes de dirigirse hacia el palacio del Lord Legislador se le ocurrió una idea,\
	cogió unas puntas de flecha de piedra y les colocó un aro de metal alrededor de sus astiles.\
	De debajo de la capa sacó dos puñados de puntas de flecha, avivó acero y dio un fuerte\
	empujón dirigiendo los proyectiles hacia los inquisidores. Estos intentaron protegerse,\
	empujando las puntas de flecha en dirección contraria. Al hacer esto los anillos de metal\
	se desprendieron de las puntas de flecha, sin embargo las puntas de piedra siguieron su\
	trayectoria inicial. Los dos se quedaron sorprendidos mientras eran atravesados de punta\
	a punta por las puntas de flecha. Uno cayó al suelo, el otro aguantó a duras penas en pie.\
	Aprovechando que apenas podían moverse por sus heridas, Vin corrió y entró en aquel edificio.</p>\
	\
	<p class='transient'><a href='edificio'>Continuar</a></p>"
	),
	polvo_situacion3: new undum.SimpleSituation(
	"<p>Cogió un puñado de polvo de peltre y se lo lanzó a los inquisidores. De repente, una\
	nube densa de color azul apareció ante las caras de los inquisidores impidiendoles ver.\
	Vin enseguida supo que su idea había funcionado al ver cómo aquellos dos habían reaccionado.\
	Después corrió hacia la puerta del edificio interior pasando entre los dos inquisidores.</p>\
	\
	<p class='transient'><a href='edificio'>Continuar</a></p>"
	),
	edificio: new undum.SimpleSituation(
	"<h1>Edificio Interior</h1>\
	<p>Continuará...</p>"
	),
};

// ---------------------------------------------------------------------------
/* Id de la situacion inicial */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Grupos de propiedades */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};
// ---------------------------------------------------------------------------
/* Propiedades */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )
};
// ---------------------------------------------------------------------------
/* Inicializacion */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>You are starting on an exciting journey.</p>");
};

/* Audio */
var audio = document.getElementById("myAudio");
var img = document.getElementById("sound");
var mute = false;
function sound() {
	if (mute == false) {
		audio.play();
		mute = true;
		img.src = "media/img/sound-on.png";
		img.title= "Sonido activado";
	}
	else{
		audio.pause();
		mute = false
		img.src = "media/img/sound-off.png";
		img.title = "Sonido desactivado";
	}
};

/* Ventana 1 */
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var span1 = document.getElementsByClassName("close")[0];
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

/* Ventana 2 */
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close")[1];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
} 

/* Ventana 3 */
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var span3 = document.getElementsByClassName("close")[2];
btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
} 

/* Ventana 4 */
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var span4 = document.getElementsByClassName("close")[3];
btn4.onclick = function() {
  modal4.style.display = "block";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
} 

/* Ventana 5 */
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var span5 = document.getElementsByClassName("close")[4];
btn5.onclick = function() {
  modal5.style.display = "block";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
} 

/* Ventana 6 */
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var span6 = document.getElementsByClassName("close")[5];
btn6.onclick = function() {
  modal6.style.display = "block";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
} 

/* Ventana 7 */
var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("myBtn7");
var span7 = document.getElementsByClassName("close")[6];
btn7.onclick = function() {
  modal7.style.display = "block";
}
span7.onclick = function() {
  modal7.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
} 

/* Ventana 8 */
var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("myBtn8");
var span8 = document.getElementsByClassName("close")[7];
btn8.onclick = function() {
  modal8.style.display = "block";
}
span8.onclick = function() {
  modal8.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
} 

/* Ventana 9 */
var modal9 = document.getElementById("myModal9");
var btn9 = document.getElementById("myBtn9");
var span9 = document.getElementsByClassName("close")[8];
btn9.onclick = function() {
  modal9.style.display = "block";
}
span9.onclick = function() {
  modal9.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
} 
