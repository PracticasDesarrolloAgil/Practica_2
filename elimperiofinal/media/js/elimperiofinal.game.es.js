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
        "<h1>Entrada a Kredik Shaw</h1>\
		<img src='media/img/entrada.jpg' class='float_center'>\
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
		quemando <a onclick='reducir(pb_a)' href='acero_situacion1'>acero</a> o incluso\
		pelear contra ellos quemando <a onclick='reducir(pb_p)' href='./peltre-boost'>peltre</a>. Aunque\
		simplemente podría atacarles con sus <a href='dagas_situacion1'>dagas de cristal</a> y\
		guardar esos metales para más tarde si le hicieran falta. Otra opción sería\
		aplacarles quemando <a onclick='reducir(pb_l)' href='laton_situacion1'>latón</a> y no perder tiempo luchando\
		con aquellos guardias.</p>",
		{
            actions: {
                "peltre-boost": function(character, system, action) {
						if (character.qualities.salud < 12) {
							system.setQuality("salud", character.qualities.salud+2);
						}
						system.setQuality("fuerza", character.qualities.fuerza+10);
						system.setQuality("agilidad", character.qualities.agilidad+10);
						system.setQuality("resistencia", character.qualities.resistencia+10);
					
						system.doLink("peltre_situacion1");
				}
            }
        }
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
		<p class='transient'><a onclick='progreso(); ayuda(1);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("pasillo");
				}
            }
        }
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
		<p class='transient'><a onclick='progreso(); ayuda(1);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("pasillo");
				}
            }
        }
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
		<p class='transient'><a onclick='progreso(); ayuda(1);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("pasillo");
				}
            }
        }
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
		<p class='transient'><a onclick='progreso(); ayuda(1);' href='./pasillo-action'>Continuar</a></p>",
		{
			actions: {
				"pasillo-action": function(character, system, action) {
						if (character.qualities.salud > 12) {
							system.setQuality("salud", 12);
						}
						system.setQuality("fuerza", 4);
						system.setQuality("agilidad", 6);
						system.setQuality("resistencia", 5);
						//system.setQuality("progreso", character.qualities.progreso+10);
						
						system.doLink("pasillo");
				}
            }
		}
	),
	pasillo: new undum.SimpleSituation(
		"<h1>Pasillo de Entrada</h1>\
		<img src='media/img/pasillo.jpg' class='float_right'>\
		<p>Vin atravesó el pasillo, pasando al lado de una sala de guardia. Justo cuando iba\
		a enfilar el siguiente pasillo un guardia salió de la sala y la vio. Enseguida dio la\
		voz de alarma y los demás guardias entraron corriendo en el pasillo. Era un grupo demasiado\
		grande para que ella sola pudiese hacerles frente. El lugar en el que se encontraba tampoco\
		le era de mucha ayuda, ya que las dimensiones del pasillo no le permitían maniobrar con tanta\
		libertad como podía hacerlo en el exterior.</p>\
		\
		<p class='transient'> No tenía muchas opciones, al no poder luchar contra tantos enemigos en un lugar cerrado.\
		Podría quemar <a onclick='reducir(pb_e)' href='./estanio-boost'>estaño</a> con la esperanza de poder ver algo en el pasillo que le pudiera ser de\
		ayuda. Aunque también podría <a onclick='reducir(pb_a)' href='acero2_situacion2'>lanzarles las últimas monedas</a> que le quedaba y huir mientras\
		trataban de ponerse a salvo. O simplemente aumentar su velocidad quemando <a onclick='reducir(pb_p)' href='./peltre-boost'>peltre</a> y salir\
		corriendo.</p>",
		{
            actions: {
                "estanio-boost": function(character, system, action) {
						system.setQuality("vision", character.qualities.vision+10);
						system.setQuality("salud", character.qualities.salud-2);
					
						system.doLink("estanio_situacion2");
				},
				"peltre-boost": function(character, system, action) {
						if (character.qualities.salud < 12) {
							system.setQuality("salud", character.qualities.salud+2);
						}
						system.setQuality("fuerza", character.qualities.fuerza+10);
						system.setQuality("agilidad", character.qualities.agilidad+10);
						system.setQuality("resistencia", character.qualities.resistencia+10);
						
						system.doLink("peltre_situacion2");
				}
            }
        }
	),
	estanio_situacion2: new undum.SimpleSituation(
		"<p>Al quemar estaño todos sus sentidos se volvieron más agudos. De repente,\
		una fuerte luz cegó a Vin. Al quemar estaño su vista se había vuelto demasiado\
		sensible, de modo que la luz que emitían las linternas que alumbraban el pasillo\
		la deslumbraron. Uno de los guardias alcanzó a golpearla con su bastón en el\
		hombro izquierdo. El fuerte dolor hizo que reaccionara, apagó su estaño y siguió\
		corriendo por el pasillo. Mientras lo hacía se fijó en aquellas linternas, más en\
		concreto en los soportes metálicos de las linternas. Si quemaba <a onclick='reducir(pb_a)' href='./estanio-decrease'>acero</a> se podría\
		impulsar hacia delante empujando aquellos soportes.</p>",
		{
            actions: {
                "estanio-decrease": function(character, system, action) {
						system.setQuality("vision", 7);
					
						system.doLink("acero_situacion2");
				}
            }
        }
	),
	acero_situacion2: new undum.SimpleSituation(
		"<p>Así lo hizo, quemó acero y unas líneas azules que apuntaban hacia los soportes\
		de metal aparecieron ante los ojos de Vin. Empujó con todas sus fuerzas y salió\
		despedida en dirección contraria a los guardias, atravesando el pasillo. Cuando las\
		voces de los aquellos hombres apenas se escuchaba dejó de impulsarse, estaba tan\
		lejos que ni corriendo podrían alcanzarla. Continuó sin prisa, entrando en otro\
		pasillo que daba a una cámara central abovedada.</p>\
		\
		<p class='transient'><a onclick='progreso(); ayuda(2);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("camara");
				}
            }
        }
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
		<p class='transient'><a onclick='progreso(); ayuda(2);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("camara");
				}
            }
        }
	),
	peltre_situacion2: new undum.SimpleSituation(
		"<p>Aunque no le serviría para enfrentarse a ellos, sí que le permitiría huir de\
		ellos. Al quemar peltre podría correr más rápido que cualquier ser humano normal.\
		Quemó el metal y echó a correr por el pasillo. En pocos instantes se encontró tan\
		lejos de ellos que apenas se les podía oír. Llegó a un pasillo que le llevó a una\
		sala central abovedada.</p>\
		\
		<p class='transient'><a onclick='progreso(); ayuda(2);' href='./camara-action'>Continuar</a></p>",
		{
			actions: {
				"camara-action": function(character, system, action) {
						if (character.qualities.salud > 12) {
							system.setQuality("salud", 12);
						}
						system.setQuality("fuerza", 4);
						system.setQuality("agilidad", 6);
						system.setQuality("resistencia", 5);
						//system.setQuality("progreso", character.qualities.progreso+10);
						
						system.doLink("camara");
				}
            }
		}
	),
	camara: new undum.SimpleSituation(
		"<h1>Cámara Central Abovedada</h1>\
		<img src='media/img/camara.jpg' class='float_right'>\
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
		<p class='transient'>Para poder deshacerse de los inquisidores tenía que actuar rápido. Si quemaba <a onclick='reducir(pb_at)' href='atium_situacion3'>Atium</a> podría\
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
		piedra. Tenía un plan para el cual tendría que dar un empujón quemando <a onclick='reducir(pb_a)' href='acero_situacion3'>acero</a>.</p>"
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
		<p class='transient'><a onclick='progreso(); ayuda(3)' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("edificio");
				}
            }
        }
	),
	polvo_situacion3: new undum.SimpleSituation(
		"<p>Cogió un puñado de polvo de peltre y se lo lanzó a los inquisidores. De repente, una\
		nube densa de color azul apareció ante las caras de los inquisidores impidiendoles ver.\
		Vin enseguida supo que su idea había funcionado al ver cómo aquellos dos habían reaccionado.\
		Después corrió hacia la puerta del edificio interior pasando entre los dos inquisidores.</p>\
		\
		<p class='transient'><a onclick='progreso(); ayuda(3);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("edificio");
				}
            }
        }
	),
	edificio: new undum.SimpleSituation(
		"<h1>Edificio Interior</h1>\
		<img src='media/img/edificio_interior.jpg' class='float_right'>\
		<p>	Esperaba que los inquisidores tardaran en recuperarse el tiempo suficiente así ella podría\
		echar un vistazo al interior de ese edificio y con un poco de suerte encontrar algo que le pudiera\
		ser de ayuda contra el Lord Legislador.</p>\
		\
		<p>Vin comenzó a buscar desesperada. Aquella cámara solo tenía una salida, la entrada que custodiaban\
		los inquisidores. La habitación tenía las paredes decoradas con tapices, colgaban pieles teñidas de\
		varios colores. También había cuadros muy antiguos con lienzos amarillentos. Una chimenea ardía en el\
		centro de la habitación. Vin no vio nada extraño ni nada que le pudiera ser útil. Aquel sitio que\
		parecía una especie de estudio o despacho decorado con extraños objetos y adornos, como los cuernos\
		de alguna bestia o unos zapatos con una suela muy ancha.</p>\
		\
		<p>Dio un respingo al ver que algo se movía en el centro de la habitación. Junto a la chimenea había\
		un sillón que comenzó a girar revelando a un anciano arrugado y calvo que vestía ropa muy cara. Justo\
		cuando iba a intentar salir de aquella habitación unas manos la agarraron de los hombros. Intentó\ zafarse del inquisidor\
		pero era demasiado fuerte.</p>\
		\
		<p>- ¿Qué está pasando? - dijo el anciano mientras se ponía en pie.</p>\
		\
		<p>- Mis disculpas Lord Legislador - dijo el inquisidor.</br>\
		No puede ser, no se parece en nada al joven Lord Legislador contra el que se enfrentó Kelsier esta tarde.</p>\
		\
		<p>- Matadla - ordenó el Lord Legislador.</p>\
		\
		<p>- Mi señor hemos visto a esta muchacha con el skaa que mató esta tarde. Sabemos que hay alguien detrás\
		de esta rebelión skaa y de la guerra entre la nobleza, creemos que esta chica puede estar\
		implicada.- respondió el inquisidor con una voz chirriante.</p>\
		\
		<p>- Entonces averiguad todo lo que podáis y después deshazte de ella. - dijo el Lord Legislador casi sin fuerzas.</p>\
		\
		<p class='transient'>Tenía que conseguir escapar, quizás quemando <a onclick='reducir(pb_p)' href='./peltre-boost'>peltre</a> podría soltarse</p>",
		{
            actions: {
				"peltre-boost": function(character, system, action) {
						if (character.qualities.salud < 12) {
							system.setQuality("salud", character.qualities.salud+2);
						}
						system.setQuality("fuerza", character.qualities.fuerza+10);
						system.setQuality("agilidad", character.qualities.agilidad+10);
						system.setQuality("resistencia", character.qualities.resistencia+10);
						
						system.doLink("peltre_situacion4");
				}
            }
        }
	),
	peltre_situacion4: new undum.SimpleSituation(
		"<p class='once'>Vin seguía retorciéndose mientras avivaba peltre. Aún así el inquisidor la seguía sujetando y ni se inmutaba ante las\
		patadas que Vin le propinaba. En ese momento se acordó: el <a onclick='reducir(pb_m)' href='./peltre-decrease'>Undécimo metal</a>. Aún no lo había usado y no sabía qué efecto iba\
		a producir pero según Kelsier con ese metal podría enfrentarse al Lord Legislador.</p>",
		{
            actions: {
				"peltre-decrease": function(character, system, action) {
						if (character.qualities.salud > 12) {
							system.setQuality("salud", 12);
						}
						system.setQuality("fuerza", 4);
						system.setQuality("agilidad", 6);
						system.setQuality("resistencia", 5);
						
						system.doLink("undecimo_situacion4");
				}
            }
        }
	),
	undecimo_situacion4: new undum.SimpleSituation(
		"<p>Alzó la cabeza para mirar al anciano. Quemó el metal pero no sucedió nada. El corazón le latía tan fuerte\
		que parecía que le iba a estallar. En ese momento vio algo. Al lado del Lord Legislador había otro hombre.\
		Estaba segura que ese hombre no estaba ahí hace un momento. Ni siquiera lo había visto entrar.</p>\
		\
		<p>Tenía barba y vestía un atuendo de lana con una capa de piel de colores poco llamativos pero bien cortada.\
		Le resultaba familiar. Sus rasgos eran similares a los del hombre que había matado a Kelsier pero parecía mayor.\
		Permanecía de pie y parecía contento.</p>\
		\
		<p>Vin giró la cabeza y vio a otro hombre a su lado, un joven noble. Por su ropa diría que era un mercader y muy rico.\
		No entendía nada de lo que estaba sucediendo, entonces el metal se agotó.</p>\
		<p>El inquisidor la lanzó al suelo y mientras intentaba levantarse sintió un fuerte golpe. Después todo se volvió negro.</p>\
		\
		<p class='transient'><a onclick='progreso(); ayuda(4);' href='./celda-action'>Continuar</a></p>",
		{
            actions: {
                "celda-action": function(character, system, action) {
						system.setQuality("salud", character.qualities.salud-2);
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("celda");
				}
            }
        }
	),
	celda: new undum.SimpleSituation(
		"<h1>Celda</h1>\
		<img src='media/img/celda.jpg' class='float_right'>\
		<p>El inquisidor le arrojó una cuba de agua. Vin se despertó, aún le dolía la cabeza por el golpe. Mientras seguía\
		aturdida el inquisidor la alzó y le metió algo en la boca.</p>\
		\
		<p>- Trágatelo - ordenó mientras le retorcía el brazo.</br>\
		Trató de resistirse pero el dolor era demasiado intenso. Al final cedió y se tragó el trocito de metal.</p>\
		\
		<p class='once'>Bien, ahora quémalo. - le ordenó el inquisidor.</br>\
		Vin notó una nueva reserva de metal en su interior. Nunca antes había utilizado ese metal por lo que trató\
		de resistirse. No sabía qué metal era, si no era un metal alomántico podría hacerla enfermar o incluso matarla.\
		Tenía que <a href='./negarse-action'>resistirse</a>. Pero si no lo hacía el inquisidor no dudaría en torturarla hasta que <a href='./ceder-action'>cediese</a>.</p>",
		{
            actions: {
                "negarse-action": function(character, system, action) {
						system.setQuality("salud", character.qualities.salud-1);
					
						system.doLink("negarse_situacion5");
				},
				"ceder-action": function(character, system, action) {
				
					system.doLink("aluminio_situacion5");
				}
            }
        }
	),
	negarse_situacion5: new undum.SimpleSituation(
		"<p class='once'>Vin negó con la cabeza. El inquisidor respondió retorciéndole el brazo con más fuerza, hasta el punto que\
		Vin pensó que se lo iba a arrancar. Finalmente, Vin no pudo resistir el dolor y <a onclick='aluminio()' href='aluminio_situacion5'>quemó el extraño metal</a>.</p>"
	),
	aluminio_situacion5: new undum.SimpleSituation(
		"<p>De repente, dejó de notar sus reservas de metal. El inquisidor la arrojó al suelo, dio media vuelta y salió de la celda.\
		Vin se incorporó mientras se tocaba el brazo. Intentó encontrar alguna reserva de metal en su interior pero ni siquiera sentía\
		el metal que le había hecho tragar el inquisidor. No entendía nada, Kelsier nunca le habló de ese metal.</p>\
		\
		<p class='transient'><a onclick='progreso(); ayuda(5);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("mazmorras");
				}
            }
        }
	),
	mazmorras: new undum.SimpleSituation(
		"<h1>Mazmorras de Kredik Shaw</h1>\
		<img src='media/img/mazmorras.jpg' class='float_right'>\
		<p>Notaba una sensación extraña en aquel lugar. Era la misma sensación que sintió aquella tarde cuando el Lord Legislador\
		apareció en la plaza. Eso significaba que el Lord Legislador estaba cerca, por lo que tendría que estar encerrada en algún\
		lugar del palacio. No podía quemar cobre para protegerse de esa sensación de depresión que se retorcía en su interior.</p>\
		\
		<p>No sabía cuándo volvería el inquisidor así que comenzó a inspeccionar la celda. Tres de las cuatro paredes de la celda\
		eran barrotes y no tenía ni un solo mueble. Había otras dos celdas, una a cada lado. Trató de forcejear la puerta pero obviamente\
		el inquisidor la había cerrado con llave. Aparentemente no había nada a su alrededor que pudiera usar para escapar de allí.</p>\
		\
		<p class='once'>La habían dejado en ropa interior para asegurarse de que no llevaba metales escondidos. Se sentó en el suelo de piedra, encogida\
		de frío por la ropa húmeda. Cuando casi se dio por vencida vio en el exterior de la jaula la cuba con la que el inquisidor le\
		arrojó agua. Se fijó en el asa que parecía ser un <a onclick='mostrar1()' href='alambre_situacion6'>alambre</a> de metal, con el que quizás podría forzar la cerradura y escapar.</p>"
	),
	alambre_situacion6: new undum.SimpleSituation(
		"<p>Sacó un brazo de entre los barrotes, lo estiró todo lo que pudo para conseguir alcanzar la cuba. Finalmente, cuando el hombro\
		parecía que se le iba a dislocar, alcanzó con los dedos el borde de la cuba. Quitarle el asa le llevó más rato de lo que pensaba, seguro\
		que el peltre le habría facilitado el proceso. Sin perder más tiempo Vin comenzó a forzar la cerradura. Todavía recordaba algunos trucos\
		de su vida como ladrona, así que no le resultó muy difícil abrirla.</p>\
		\
		<p class='transient'><a onclick='mostrar1(); progreso(); ayuda(6);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("sala");
				}
            }
        }
	),
	sala: new undum.SimpleSituation(
		"<h1>Sala de Tortura</h1>\
		<img src='media/img/sala_tortura.jpg' class='float_right'>\
		<p>Vin salió de la jaula y atravesó un pasillo hasta llegar a una puerta. Abrió un poco la puerta para ver qué había al otro lado.\
		Era una habitación grande pero estaba vacía así que Vin entró en ella. Se sorprendió al ver que en el centro de la habitación había una\
		mesa grande con restos de sangre seca. Justo al lado de la mesa había otra más pequeña, estaba repleta de instrumentos afilados\
		colocados en fila.</p>\
		\
		<p>En ese momento comprendió que se encontraba en la sala de tortura. Si no se daba prisa, aquella habitación sería lo último que vería.\
		Había dos salidas, a la izquierda estaba el pasillo por el que había llegado, a la derecha había otro pasillo tan extenso que no podía\
		ver el final.</p>\
		\
		<p class='once'>Tenía que salir de ahí cuanto antes, no podía arriesgarse a que la pillasen los inquisidores ahora que estaba totalmente indefensa.\
		Estaba segura de que si intentaba escapar del palacio se encontraría con algún guardia, o peor aún, con un inquisidor. Si pudiese <a onclick='aumentar()' href='./buscar'>encontrar</a>\
		sus pertenencias todavía podría buscar al Lord Legislador, sin embargo, el inquisidor volvería en cualquier momento para interrogarla.\
		Quizás la mejor opción era llevarse uno de esos <a onclick='mostrar2(); fin();' href='./instrumento'>instrumentos de tortura afilados</a>, aunque no le sería de mucha ayuda si tenía que enfrentarse\
		a un inquisidor, era mejor que nada.</p>",
		{
            actions: {
                "instrumento": function(character, system, action) {
						//system.setQuality("progreso", 100);
						
						system.doLink("instrumento_situacion7");
				},
				"buscar": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
						
						system.doLink("buscar_situacion7");
				}
			}
        }
	),
	instrumento_situacion7: new undum.SimpleSituation(
		"<p>Se acercó a la mesa con los instrumentos, se fijó en una especie de cuchillo que parecía muy afilado y sin pensarselo mucho\
		lo cogió. Salió de la habitación por el pasillo de la derecha, aún llevando el cuchillo no se sentía muy segura. Se había\
		acostumbrado demasiado a usar metales y ahora que no podía hacerlo se sentía inútil. Incluso usando la alomancia enfrentarse\
		a un inquisidor era una locura pero si se encontraba con un grupo de guardias al menos podría hacerles frente quemando peltre.</p>\
		\
		<p>Por suerte la mayoría de los guardias habían acudido a la entrada principal de palacio para impedir el paso a los skaa.\
		Vin pudo escapar de Kredik Shaw sin tener que pelear, sin embargo ya era demasiado. En cuanto el Lord Legislador diera la\
		orden los skaa que estaban a las puertas del palacio serían masacrados.</p>"
	),
	buscar_situacion7: new undum.SimpleSituation(
		"<p>En un rincón de la habitación había un arcón. Vin se fijó en un trozo de tela oscura que asomaba del arcón. Rápidamente\
		se acercó y abrió el arcón. Dentro encontró su ropa (sus pantalones y su camisa) y al fondo estaba su capa. Buscó un bolsillo\
		oculto que tenía en su capa e introdujo la mano. Con los dedos lo tocó, un frasquito de cristal con el tapón aún puesto. Vin\
		siempre llevaba un frasco oculto con metales por si se quedaba sin reservas, por suerte, el inquisidor no lo encontró.</p>\
		\
		<p>Ingirió todo el contenido del frasquito, inmediatamente notó cómo aparecían sus reservas de metal en su interior. Sus dagas\
		de cristal también se encontraban ahí. Tan pronto hubo terminado de vestirse, salió corriendo por el pasillo de la derecha.</p>\
		\
		<p class='transient'><a onclick='progreso(); ayuda(7);' href='biblioteca'>Continuar</a></p>"
	),
	biblioteca: new undum.SimpleSituation(
		"<h1>Biblioteca</h1>\
		<img src='media/img/biblioteca.jpg' class='float_right'>\
		<p>Continuó avanzando por un entramado de pasillos interminables. De repente escuchó unos pasos acercarse. A su izquierda\
		había una puerta, sin pensarlo dos veces intentó abrirla. Por suerte no estaba cerrada con llave, pasó al interior de la\
		habitación volviendo a cerrar la puerta.</p>\
		\
		<p>Echó un vistazo rápido a la habitación por si había alguien más en ella. Aparentemente se encontraba vacía.\
		La habitación estaba repleta de estanterías llenas de libros. En su vida a penas había visto un par de libros ya que\
		estaban prohibidos. Aquel lugar tenía que ser la biblioteca personal del Lord Legislador.</p>\
		\
		<p>En un lado de la habitación Vin vio algo que llamó su atención, un atril. En él estaba colocado un libro\
		de aspecto muy viejo. Parecía que solo con mirarlo se iba a romper. Aún así algo había algo en el libro que le hacía\
		sentir la imperiosa necesidad de leerlo. Se acercó un poco más al atril, abrió el libro y comenzó a leer:</p>\
		\
		<p class='transient'><a onclick='mostrar3(); progreso(); ayuda(8);' href='./progreso'>Continuar</a></p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("patio");
				}
            }
        }
	),
	patio: new undum.SimpleSituation(
		"<h1>Patio del Palacio</h1>\
		<img src='media/img/patio.jpg' class='float_right'>\
		<p>Después de haber pasado por varias salas y pasillos Vin consiguió salir al exterior. Desde que se escondió en la biblioteca\
		no volvió a ver a nadie. El Lord Legislador habría enviado a la mayoría de los guardias a proteger las puertas del palacio.\
		El inquisidor que la iba a torturar ya sabría que se había escapado. Seguro que estaría buscándola por los laberínticos pasillos\
		de las mazmorras.</p>\
		\
		<p>Aún era de noche pero se podía ver en el horizonte un leve clarear, no faltaba mucho para el amanecer. Afuera la presión que\
		ejercía el Lord Legislador se podía sentir con mayor fuerza, una sensación que la aplacaba y le hacía sentir que no tenía ninguna\
		oportunidad de vencerle. Miró hacia arriba, buscando el origen de esos pulsos. Las numerosas torres se alzaban como miles de agujas\
		rectas y negras.</p>\
		\
		<p class='once'>Tenía que usar <a onclick='reducir(pb_h)' href='hierro_situacion9'>hierro</a> para buscar algún anclaje en un punto alto al que poder sujetarse, de esa\
		manera tendría una visión másamplia del palacio.</p>"
	),
	hierro_situacion9: new undum.SimpleSituation(
		"<p>Avivó hierro. Casi al instante unas cuantas líneas azules aparecieron ante sus ojos, apuntando hacia su pecho. Alzó la vista para ver hasta\
		donde llegaban, entonces, se fijó en una que apuntaba hacia la punta de una torre cercana. Tiró de esa línea con fuerza, lanzándose hasta la aguja\
		metálica de la torre.</p>\
		\
		<p>Desde arriba podía ver todos los pabellones y torres de Kredik Shaw. A lo lejos, a las afueras del palacio, se distinguía la\
		luz amarillenta de las antorchas de los skaa. Tenía que darse prisa, si los skaa entraban en el palacio el Lord Legislador los\
		masacraría a todos.</p>\
		\
		<p class='once'>Aunque desde su posición tenía una mejor visión que desde abajo, la oscuridad de la noche le dificultaba un poco el trabajo.\
		No tenía tiempo para esperar a que amaneciese, tenía que quemar <a onclick='reducir(pb_e)' href='./estanio-boost'>estaño</a>.</p>",
		{
            actions: {
                "estanio-boost": function(character, system, action) {
						system.setQuality("vision", character.qualities.vision+10);
					
						system.doLink("estanio_situacion9");
				}
            }
        }
	),
	estanio_situacion9: new undum.SimpleSituation(
		"<p>Todo se su entorno se volvió más claro en cuanto comenzó a quemar estaño. No solo su visión se volvió más aguda, sintió con\
		mayor fuerza el frío de la aguja húmeda a la que estaba sujeta. Miró a su alrededor, entonces lo vio. En una torre, más al centro\
		del palacio, distinguió una luz que atravesaba unas vidrieras tintadas.</p>\
		\
		<p>Vin se lanzó al vacío, agarrándose a distintos anclajes hasta llegar a la torre más cercana a aquella de las vidrieras iluminadas.\
		Tenía que estar en esa torre, podía sentir la presencia de él en el interior.</p>\
		\
		<p class='transient'><a onclick='progreso(); ayuda(9);' href='./estanio-decrease'>Continuar</a></p>",
		{
            actions: {
                "estanio-decrease": function(character, system, action) {
						system.setQuality("vision", 7);
						//system.setQuality("progreso", character.qualities.progreso+10);
						
						system.doLink("torre");
				}
			}
        }
	),
	torre: new undum.SimpleSituation(
		"<h1>Torre del Trono</h1>\
		<img src='media/img/trono.jpg' class='float_right'>\
		<p class='once'>Si se impulsaba lo suficientemente fuerte podría entrar en la torre atravesando las vidrieras. Avivando <a onclick='reducir(pb_h)' href='hierro_situacion10'>hierro</a> vería cualquier anclaje\
		dentro de la habitación en la que se encontraba el Lord Legislador.</p>"
	),
	hierro_situacion10: new undum.SimpleSituation(
		"<p>Volvió a quemar hierro, las líneas azules surgieron una vez más. Unas cuantas señalaban hacia el interior de la sala iluminada\
		atravesando las vidrieras. Se sujetó rodeando con los brazos la aguja de la torre sobre la que estaba, tiró con fuerza de una de esas\
		líneas azules para asegurarse de que el objeto del que tiraba estaba bien sujeto. Soltó la aguja y tiró con toda su fuerza. Salió\
		despedida por los aires en dirección hacia la habitación donde estaba el Lord Legislador.</p>\
		\
		<p class='once'>Las vidrieras estallaron en cientos de pequeños cristales de colores cuando Vin impactó contra ellas. Vin aterrizó sobre el suelo\
		lleno de trocitos de cristal, permaneciendo agazapada durante un momento. El Lord Legislador se encontraba en su trono impasible mientras\
		la observaba. No había nadie más en la sala, ni siquiera se sentían los pasos de los guardias dirigirse hacia allí. Era el momento perfecto\
		para <a href='./dagas-action'>atacar</a>.</p>",
		{
            actions: {
                "dagas-action": function(character, system, action) {
						system.setQuality("salud", character.qualities.salud-6);
					
						system.doLink("dagas_situacion10");
				}
            }
        }
	),
	dagas_situacion10: new undum.SimpleSituation(
		"<p>Vin sacó sus dagas y se abalanzó sobre el Lord Legislador. Como si fuera un muñeco de trapo la chica voló por los aires, acabando\
		estampada contra una columna.</p>\
		\
		<p>- Niña estúpida, ¿qué creías que iba a pasar? - dijo molesto el Lord Legislador. - Al final tendré que matarte yo mismo.</br>\
		¿Qué había ocurrido? No llegó siquiera a tocarla, además no llevaba ningún metal encima del que se pudiera empujar. El único metal\
		que tenía se encontraba en su interior pero no se podía tirar ni empujar del metal que llevase una persona en su cuerpo.</p>\
		\
		<p>Aturdida por el fuerte golpe intentó levantarse. En ese momento el Lord Legislador volvió a empujar, alzando a Vin en el\
		aire mientras era aplastada contra la columna. Le ardía el estómago, parecía como si una mano le estuviera destrozando las entrañas.\
		No era posible, <i>¿de verdad tenía tanto poder que podía empujar contra los metales de su estómago?</i></p>\
		\
		<p class='once'>Tenía que pensar algo rápido antes de que muriera aplastada. Peltre, si quemaba <a onclick='reducir(pb_p)' href='./peltre-boost'>peltre</a> su cuerpo se fortalecería y podría resistir\
		el dolor. Eso le daría un poco más de tiempo.</p>",
		{
            actions: {
				"peltre-boost": function(character, system, action) {
						if (character.qualities.salud < 12) {
							system.setQuality("salud", character.qualities.salud+2);
						}
						system.setQuality("fuerza", character.qualities.fuerza+10);
						system.setQuality("agilidad", character.qualities.agilidad+10);
						system.setQuality("resistencia", character.qualities.resistencia+10);
						
						system.doLink("peltre_situacion10");
				}
            }
        }
	),
	peltre_situacion10: new undum.SimpleSituation(
		"<p>Tan pronto como avivó peltre el dolor comenzó a disminuir. Ya no sentía que sus huesos se iban a romper con la facilidad con\
		la que se parte una rama seca al pisarla. No sabía cuánto más iba a aguantar, ¿qué podía hacer si no se podía mover? ¿De verdad\
		creía que iba a ganarle si ni Kelsier pudo? El Undécimo metal había resultado ser inútil. Una idea surgió en su mente, el metal\
		que le había obligado a quemar el inquisidor antes le era totalmente desconocido.</p>\
		<p><i>Si Kelsier nunco llegó a mencionarlo, ¿significaba\
		eso que el Undécimo metal no era realmente el “undécimo”?</i></p>\
		\
		<p>Sabía que los metales se iban en parejas: un metal básico, luego su aleación, cada uno haciendo cosas opuestas. El hierro tiraba,\
		el acero empujaba; el zinc tiraba, el latón empujaba; etc. Todos los metales excepto… el oro y el atium. Kelsier le había dicho que\
		era el metal más inútil de todo y que no le aconsejaba usarlo nunca. Sin embargo Vin lo ignoró, cogió oro y lo quemó. Aquel metal le\
		mostró una imagen de ella misma, se pudo ver a sí misma como si existieran dos Vin. Era una visión demasiado real, tan real que pudo\
		tocarla.</p>\
		\
		<p>Kelsier le dijo que ese metal mostraba a la persona que lo quemaba una versión de lo que podría haber sido si el pasado hubiera\
		sido distinto. El Undécimo metal había hecho algo parecido, en vez de mostrar el pasado de Vin le había mostrado a otras personas.\
		Algo se le escapaba.</p>\
		\
		<p class='once'><i>¿Podría ser que el Undécimo metal fuese una aleación de atium o de oro? Entonces si el oro y el aitum hacen cosas similares pero\
		diferentes, son como… Son como los demás metales que se agrupan de cuatro en cuatro. Están los físicos (hierro, acero, estaño, peltre),\
		los mentales (zinc, latón, cobre, bronce) y los que influyen sobre el tiempo (oro y su aleación, atium y su aleación). El <a onclick='reducir(pb_m)' href='./peltre-decrease'>Undécimo metal</a>\
		tenía que ser la pareja opuesta del oro.</i></p>",
		{
            actions: {
				"peltre-decrease": function(character, system, action) {
						if (character.qualities.salud > 12) {
							system.setQuality("salud", 12);
						}
						system.setQuality("fuerza", 4);
						system.setQuality("agilidad", 6);
						system.setQuality("resistencia", 5);
						
						system.doLink("undecimo_situacion10");
				}
            }
        }
	),
	undecimo_situacion10: new undum.SimpleSituation(
		"<p class='once'>Quemó el Undécimo metal, y como la vez anterior, el yo-pasado del Lord Legislador volvió a aparecer. Ahora tenía que <a onclick='reducir(pb_h)' href='hierro2_situacion10'>buscar</a> dónde agarrarse</p>"
	),
	hierro2_situacion10: new undum.SimpleSituation(
		"<p class='once'>Dio un tirón avivando hierro del soporte de una linterna que estaba a su derecha, saltando en esa dirección. Vin jadeó, libre del\
		empujón de acero. Se le había ocurrido una <a href='dagas2_situacion10'>idea</a>.</p>"
	),
	dagas2_situacion10: new undum.SimpleSituation(
		"<p>Una vez más lanzó un ataque con sus dagas, pero esta vez contra el otro Lord Legislador. Asestó dos golpes que acertaron de\
		lleno en el pecho de la imagen. pero Vin la atravesó como si hubiera golpeado al aire. Pensaba que si pudo tocar su imagen de oro,\
		también podría hacerlo con la imagen del Lord Legislador. Sin embargo se equivocaba.</p>\
		\
		<p>Vin dejó de quemar el Undécimo metal. El Lord Legislador se volvió hacia Vin, acercándose lentamente. Cuando estaba a un palmo de\
		distancia de ella Vin le clavó una daga en el costado, la otra en el pecho. El Lord Legislador no profirió ningún sonido, ni siquiera\
		una mueca de dolor. Se arrancó las dagas, las lanzó con fuerza hacia el suelo y se hicieron añicos.</p>\
		\
		<p><i>No puede ser</i>, pensó Vin mientras retrocedía asustada. <i>Ni los brumosos brazos de peltre podrían resistir en pie con esas heridas.</i></p>\
		\
		<p class='once'>Las lágrimas comenzaron a caerle por las mejillas. No sabía qué hacer. Aún sentía una pequeña reserva del <a onclick='reducir(pb_m)' href='undecimo2_situacion10'>Undécimo metal</a> en su interior.</p>"
	),
	undecimo2_situacion10: new undum.SimpleSituation(
		"<p>En un último intento, totalmente desesperada, volvió a avivar el Undécimo metal. Pensaba que ese metal tenía que hacer algo más. La imagen de un\
		hombre apareció al lado del Lord Legislador. Un hombre con capa de piel y gruesas botas, musculoso y con barba. No parecía un aristócrata\
		ni un tirano. No un héroe, ni siquiera un guerrero. Parecía un hombre vestido para vivir en las frías montañas, un pastor. O, tal vez, ...</p>\
		\
		<p class='transient'><a onclick='abrir()' href='sugerencia'>Sugerencia: abre el diario</a></p>"
	),
	sugerencia: new undum.SimpleSituation(
		"<p><i>Parece que Rashek representa a una facción creciente en la cultura de Terris.\
		Gran número de jóvenes piensa que sus inusitados poderes deberían ser usados para algo más que trabajar en el campo, engendrar hijos y tallar piedras.\
		Son rudos, incluso violentos, muy distintos a los tranquilos y razonables filósofos y hombres santos de Terris que he conocido.\
		Tendrán que ser vigilados con cuidado, estos terrisanos. Podrían ser muy peligrosos, si se les da ocasión y motivo.</i></p>\
		</br>\
		<p><i>Sé que no debería dejar que un simple porteador me perturbe. Sin embargo, es de Terris, donde se originaron las profecías.\
		Si alguien pudiera identificar un fraude, ¿no sería él?\
		Sin embargo, continúo mi viaje, acudiendo a los lugares donde los augurios escritos proclaman que me encontraré con mi destino... a pie,\
		sintiendo los ojos de Rashek en mi espalda.\
		Celosos. Burlones. Llenos de odio.</i></p>\
		</br>\
		<p><i>Creo que he descubierto por fin por qué me odia tanto Rashek. No cree que un extraño como yo, un forastero, pueda ser el Héroe de las Eras.\
		Cree que de algún modo he engañado a los filósofos, que llevo injustamente las marcas del Héroe.\
		Según Rashek, solo un terrisano de pura sangre debería haber sido elegido como el Héroe. Curiosamente, me siento más decidido a causa de su odio.\
		Debo demostrarle que puedo realizar esta tarea.</i></p>\
		</br>\
		<p><i>La mayoría de los terrisanos no son tan malos como Rashek. Sin embargo, puedo ver que creen en él, hasta cierto punto.\
		Son hombres sencillos, no filósofos ni eruditos, y no comprenden que sus propias profecías dicen que el Héroe de las Eras será un extranjero.\
		Sólo ven lo que señala Rashek: que son un pueblo ostensiblemente superior y deberían dominar en vez de estar sometidos.</i></p>\
		\
		<p><a href='./libro-action'>Continuar</a></p>",
		{
            actions: {
                "libro-action": function(character, system, action) {
						system.setQuality("salud", character.qualities.salud-4);
					
						system.doLink("libro_situacion10");
				}
            }
        }
	),
	libro_situacion10: new undum.SimpleSituation(
		"<p>- Rashek - susurró Vin.\
		El hombre se quedó inmóvil.</p>\
		\
		<p>- Eres Rashek - dijo Vin - Tú no escribiste el diario de viajes. No eres el Héroe de las Eras, eres su criado. Eras su porteador,\
		lo odiabas y tú lo mataste.</p>\
		\
		<p>El Lord Legislador la miraba fijamente con una expresión de enfado.</p>\
		\
		<p>- Por eso el diario no cuenta qué pasó después de la Ascensión. Lo asesinaste la noche de antes, y ocupaste su lugar.</p>\
		\
		<p>Chiquilla insolente, ¡no sabes nada! - gritó el Lord Legislador.</p>\
		\
		<p>Alzó una mano y empujó los metales del estómago de Vin contra el suelo. Su pulso alomántico era tan fuerte que los fragmentos\
		de cristal que había por toda la sala se alejaron formando un círculo alrededor de ellos dos. Vin estaba siendo aplastada contra\
		el suelo, apenas podía respirar.</p>\
		\
		<p><i>¿De qué me sirve conocer la verdad si voy a morir igual? ¿De qué me sirve saber que el Lord Legislador es en realidad era\
		un porteador, un criado, un terrisano?</i></p>\
		\
		<p><i>Un ferruquimista.</i></p>\
		\
		<p>La gran mayoría de los terrisanos eran ferruquimista, personas que al igual que los alománticos podían usar metales para\
		obtener poderes. Sin embargo, la ferruquimia funcionaba de otro modo. Los ferruquimistas usan metales que están en contacto\
		con su cuerpo para almacenar sus propias capacidades físicas, para después usar esas reservas cuando sea necesario.</p>\
		\
		<p class='once'>Vin se fijó en él, llevaba numerosos anillos y brazaletes metálicos. Tenía que intentar <a onclick='reducir(pb_h); progreso();' href='./progreso'>arrebatárselos</a>.</p>",
		{
            actions: {
                "progreso": function(character, system, action) {
						//system.setQuality("progreso", character.qualities.progreso+10);
					
						system.doLink("hierro3_situacion10");
				}
            }
        }
	),
	hierro3_situacion10: new undum.SimpleSituation(
		"<p>Con todas sus fuerzas tiró de sus adornos de metal. Los anillos y brazaletes salieron disparados hacia Vin. El Lord Legislador\
		dejó de empujar, se tambaleó y se cayó al suelo. Vin se puso en pie, respirando aliviada. Se acercó a él, observando cómo su piel\
		se arrugaba aún más y su espalda se encorvaba. Lo escuchó respirar con dificultad, hasta que de repente dejó de hacerlo.</p>\
		\
		<p><i>Ahora lo entiendo. No solo era un ferruquimista, también era un nacido de la bruma. Eso explicaba por qué el día anterior\
		en la plaza parecía ser un hombre joven</i>, pensó Vin mientras miraba el cuerpo sin vida del Lord Legislador</p>\
		\
		<p><i>Si podía almacenar su “juventud” en metales y luego los injería quizás podría quemarlos. De algún modo de esta manera multiplicaba\
		sus efectos y así era como conseguía parecer inmortal.</i></p>\
		</br>\
		<p>Vin respiró aliviada aunque no podía quitarse esa sensación, la sensación de que solo había tenido suerte. Había acudido ella sola a\
		enfrentarse al Lord Legislador con un plan que se basaba en encontrar algo que Kelsier creía que estaba oculto en el palacio y que contenía\
		el secreto para vencerlo, y usar un metal que nunca antes había usado. Pero al final lo consiguió, había vencido al Lord Legislador y con su\
		muerte aquel día había salvado a miles de skaa en Luthadel. No solo eso, había acabado con el Imperio Final.</p>"
	),
};

// ---------------------------------------------------------------------------
/* Id de la situacion inicial */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Grupos de propiedades */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"})
    //progress: new undum.QualityGroup('Progreso', {priority:"0002"})
};
// ---------------------------------------------------------------------------
/* Propiedades */
undum.game.qualities = {
    salud: new undum.NumericQuality(
        "Salud", {priority:"0001", group:'stats'}
    ),
    fuerza: new undum.NumericQuality(
        "Fuerza", {priority:"0002", group:'stats'}
    ),
    agilidad: new undum.NumericQuality( 
        "Agilidad", {priority:"0003", group:'stats'}
    ),
    vision: new undum.NumericQuality(
        "Visión", {priority:"0004", group:'stats'}
    ),
	resistencia: new undum.NumericQuality(
        "Resistencia", {priority:"0005", group:'stats'}
    )
    /*progreso: new undum.NumericQuality(
        "%", {priority:"0001", group:'progress'}
    )*/
};
// ---------------------------------------------------------------------------
/* Inicializacion */
undum.game.init = function(character, system) {
    character.qualities.salud = 12;
    character.qualities.fuerza = 4;
    character.qualities.agilidad = 6;
	character.qualities.vision = 7;
	character.qualities.resistencia = 5;
    //character.qualities.progreso = 0;
};

/* Audio */
document.getElementById("myAudio").loop = true;
var audio = document.getElementById("myAudio");
var img = document.getElementById("sound");
var mute = false;
function sound() {
	document.getElementById("myAudio").volume = 0.2;
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

/* Progress bar */
function reducir( id ) {
	if (id == pb_h){
		document.getElementById("pb_h").value -= 10;
	}
	if (id == pb_a){
		document.getElementById("pb_a").value -= 10;
	}
	if (id == pb_e){
		document.getElementById("pb_e").value -= 10;
	}
	if (id == pb_p){
		document.getElementById("pb_p").value -= 10;
	}
	if (id == pb_z){
		document.getElementById("pb_z").value -= 10;
	}
	if (id == pb_l){
		document.getElementById("pb_l").value -= 10;
	}
	if (id == pb_c){
		document.getElementById("pb_c").value -= 10;
	}
	if (id == pb_b){
		document.getElementById("pb_b").value -= 10;
	}
	if (id == pb_at){
		document.getElementById("pb_at").value -= 10;
	}
	if (id == pb_m){
		document.getElementById("pb_m").value -= 10;
	}
}

function aluminio() {
	document.getElementById("pb_h").value = 0;
	document.getElementById("pb_a").value = 0;
	document.getElementById("pb_e").value = 0;
	document.getElementById("pb_p").value = 0;
	document.getElementById("pb_z").value = 0;
	document.getElementById("pb_l").value = 0;
	document.getElementById("pb_c").value = 0;
	document.getElementById("pb_b").value = 0;
	document.getElementById("pb_at").value = 0;
	document.getElementById("pb_m").value = 0;
}

function aumentar() {
	document.getElementById("pb_h").value = 50;
	document.getElementById("pb_a").value = 50;
	document.getElementById("pb_e").value = 50;
	document.getElementById("pb_p").value = 50;
	document.getElementById("pb_z").value = 50;
	document.getElementById("pb_l").value = 50;
	document.getElementById("pb_c").value = 50;
	document.getElementById("pb_b").value = 50;
	document.getElementById("pb_at").value = 30;
	document.getElementById("pb_m").value = 20;
}

function progreso() {
	//var value = document.getElementById("pb_pro").value;
	document.getElementById("pb_pro").value += 10;
	//document.getElementById("pb_pro").html(value + '%'); 
}

function fin() {
	document.getElementById("pb_pro").value = 100;
}

/* Objetos */
var ocultar = false;
function mostrar1() {
	if ( ocultar == false) {
		document.getElementById("obj1").style.display = "block";
		ocultar = true;
	}
	else {
		document.getElementById("obj1").style.display = "none";
		ocultar = false;
	}
}

function mostrar2() {
	if ( ocultar == false) {
		document.getElementById("obj2").style.display = "block";
		ocultar = true;
	}
	else {
		document.getElementById("obj2").style.display = "none";
		ocultar = false;
	}
}

function mostrar3() {
	if ( ocultar == false) {
		document.getElementById("obj3").style.display = "block";
		document.getElementById("obj3").style.cursor = "pointer";
		ocultar = true;
	}
	else {
		document.getElementById("obj3").style.display = "none";
		ocultar = false;
	}
}



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

/* Ventana 10 */
var modal10 = document.getElementById("myModal10");
var btn10 = document.getElementById("myBtn10");
var span10 = document.getElementsByClassName("close")[9];
btn10.onclick = function() {
  modal10.style.display = "block";
}
span10.onclick = function() {
  modal10.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
} 

var libro = document.getElementById("libroModal");
var libroBtn = document.getElementById("obj3");
var spanL = document.getElementsByClassName("close")[10];
libroBtn.onclick = function() {
  libro.style.display = "block";
}
spanL.onclick = function() {
  libro.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == libro) {
    libro.style.display = "none";
  }
}

function abrir() {
	libro.style.display = "block";
};


/* Ventana Help */
var modal11 = document.getElementById("helpModal");
var btn11 = document.getElementById("myBtn11");
var span11 = document.getElementsByClassName("close")[11];
btn11.onclick = function() {
  modal11.style.display = "block";
}
span11.onclick = function() {
  modal11.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal11) {
    modal11.style.display = "none";
  }
} 

/* Ventana ayuda movil */
var modal12 = document.getElementById("helpModal2");
var btn12 = document.getElementById("myBtn12");
var span12 = document.getElementsByClassName("cerrar")[12];
btn12.onclick = function() {
  modal12.style.display = "block";
}
span12.onclick = function() {
  modal12.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal12) {
    modal12.style.display = "none";
  }
} 

function ayuda(num) {
	if ( num == 1 ) {
		document.getElementById("ayuda").style.display = "none";
		document.getElementById("ayuda2").style.display = "block";
	}
	if ( num == 2 ) {
		document.getElementById("ayuda2").style.display = "none";
		document.getElementById("ayuda3").style.display = "block";
	}
	if ( num == 3 ) {
		document.getElementById("ayuda3").style.display = "none";
		document.getElementById("ayuda4").style.display = "block";
	}
	if ( num == 4 ) {
		document.getElementById("ayuda4").style.display = "none";
		document.getElementById("ayuda5").style.display = "block";
	}
	if ( num == 5 ) {
		document.getElementById("ayuda5").style.display = "none";
		document.getElementById("ayuda6").style.display = "block";
	}
	if ( num == 6 ) {
		document.getElementById("ayuda6").style.display = "none";
		document.getElementById("ayuda7").style.display = "block";
	}
	if ( num == 7 ) {
		document.getElementById("ayuda7").style.display = "none";
		document.getElementById("ayuda8").style.display = "block";
	}
	if ( num == 8 ) {
		document.getElementById("ayuda8").style.display = "none";
		document.getElementById("ayuda9").style.display = "block";
	}
	if ( num == 9 ) {
		document.getElementById("ayuda9").style.display = "none";
		document.getElementById("ayuda10").style.display = "block";
	}
}
