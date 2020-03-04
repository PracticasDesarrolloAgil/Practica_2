# Undum

Undum is a game framework for building a sophisticated form of
hypertext interactive fiction.

If that means nothing to you, then let's go back a few steps. Remember
those Choose Your Own Adventure, or Fighting Fantasy books? Where you
got to choose what your character does next? Well if you think of that
in a web-page you have hypertext interactive fiction, or HIF. Instead
of turning to a particular page, you click a link, and the next bit of
content appears.

The problem is that those kinds of games are pretty limited. Every
time the player does something, the story could go in different
directions. So the author has to either write masses of branches, or
else the decisions you make as a player have to be relatively short
lived. If you played CYOA books you'll know that the wrong move either
ended the story pretty quickly, or else it didn't really matter what
you did because you'd end up at the same place.

To beat this limitation, Undum allows you to make the output
dynamic. It allows you to keep track of what has happened to the
character (any kinds of data, in fact), and to then change the text
that gets output accordingly. Effectively it is like writing a CYOA
page that is different each time you read it. This allows for far
richer and more rewarding game design.

Undum is a pure client client-side library. It consists of a HTML file
and three Javascript files. The HTML file uses a nice bit of styling,
so there's a bunch of CSS and images in the default package too, but
that can be replaced if you want. To create your own game, you edit
the HTML file a little (mainly just changing the title and author),
and edit one of the Javascript files.

Because the game is written in Javascript, you get the full power of a
dynamic and efficient programming language. This isn't a CYOA
scripting system with limited functionality. You can take control of
anything you want. Or you can just keep things simple using a bunch of
simple functions provided by Undum.


## Compatibility

Undum is designed for HTML5 and CSS3 browsers. It has been tested on
Firefox 3.6, Chrome 5, and Safari 5. Older browsers may work okay too,
but some of the animation won't work, the styles may render poorly,
and saving and loading of games is unlikely to work. Anyone who wants
to hack around with it and make it work more widely is welcome. Just
fork this project on Github.

The local storage system on some browsers does not work when loading a
page from your hard drive. To test your game when developing it, you
may want to start up a simple local webserver. I have found that
Chrome seems to reliably provide local storage for local
development. It also has excellent Javascript debugging tools.


## Getting Started

1. Download Undum. Use the 'download zip' link in the right column of
   this page.

2. Unzip Undum somewhere on your hard-drive.

3. Open games/tutorial.html in your browser, and play through the tutorial.

4. Copy games/tutorial.html to a file that reflects your game name.

5. Edit your HTML file and add the title, author and description of
   the game you want to write. At the bottom of the file change the
   name of `tutorial.game.js` to something else (by convention
   *your-game-name*`.game.js`.

6. Copy `tutorial.game.js` to the file name you chose in the last
   step. Open it and begin creating your game.


Reference documentation, including full API details, is at
[http://idmillington.github.io/undum/](http://idmillington.github.io/undum/),
and is also included in the repository.

The source code for all the files is also heavily commented, so if you
get stuck, go in and read it.


## Deploying

To deploy your game, just upload your HTML file and the `media` folder
to your webserver. You can serve several games with the same look and
feel from the same directory. You need a different HTML file for each
game, and each one should load the correct `.game.js` file at the
end. Add any media you need for your game (images, audio, video), and
the remaining files will be reused.

For example, if you had 3 games: `episode1`, `episode2`, and
`christmas-special`. You'd have a directory structure:

    episode1.html
    episode2.html
    christmas-special.html
    media/
        css/ ...
        img/ ...
        js/
            jquery-1.4.2.min.js
            undum.js
        games/
            episode1/
                episode1.game.js
                ... media for episode 1 ...
            episode2/
                episode2.game.js
                ... media for episode 1 ...
            christmas-special/
                christmas-special.game.js
                ... media for christmas special ...

This assumes you use the same directory lay out that I do. You are
welcome to change things around, of course, as long as you work and
change the references.


## Undum

The name `undum` came from a little project that preceded this code
base. In 2008 I put together a simple browser based game. It was
narrative, but used the grind-based mechanics of games such as
Farmville and Mafia Wars. Because of the grinding, I called it
Carborundum, which I found I couldn't type at speed, so it became
Undum. The code has changed out of all recognition since them, as the
grind-based game moved to Flash. But the name stuck for the Javascript
framework.


## License

The code, documentation, styles, design and images are all distributed
under the MIT license. This permits you to modify and use them, even
for commercial use. A copy of the MIT license is found in the LICENSE
file.

#Final 1:

FINAL 1
Tras haber reunido en secreto un ejército skaa y haber acabado con las minas de Atium, un valioso metal que el Lord Legislador usaba como moneda y daba a la nobleza para mantenerla a raya, una facción del ejército skaa liderada por un líder de la resistencia skaa decide atacar por su cuenta. Una vez aplastada la rebelión skaa, el Lord Legislador realiza ejecuciones en masa en Luthadel, la capital del Imperio, como respuesta a este alzamiento. En este momento Kelsier pone en marcha el punto final de su plan, enfrentarse al Lord Legislador, pero no es rival para él y es asesinado. Los skaa al ver como Kelsier ha sido capaz de enfrentarse a un Dios se rebelan y la ciudad se sume en el caos. La banda descubre entonces que la muerte de Kelsier no era más que otra parte del plan para crear una revuelta en Luthadel. Vin, la única nacida de la bruma que queda en la banda ahora que Kelsier había muerto, comprende que la tarea de acabar con el Lord Legislador es suya. ESTO ES IGUAL->Para realizar esta valerosa azaña, Vin dispone de los denominados ocho metales básicos:
Hierro, Acero, Estaño, Peltre, Zinc, Latón, Cobre y Bronce. Además de estos metales Vin conserva un poco de Atium, un metal muy raro y valioso, y una fina barrita del Onceavo Metal que Kelsier le dejó al morir a Vin con la esperanza de que ella pudiera descubrir su poder y usarlo en contra del Lord Legislador.

##FINAL 2
FINAL 2
Tras llegar al punto final del plan, el inesperado y repentino sacrificio del líder de la banda para convertirse en un símbolo de esperanza para el pueblo skaa, Vin se enfrentará al mismísimo Lord Legislador. Para realizar esta valerosa azaña, Vin dispone de los denominados ocho metales básicos:
Hierro, Acero, Estaño, Peltre, Zinc, Latón, Cobre y Bronce. Además de estos metales Vin conserva un poco de Atium, un metal muy raro y valioso, y una fina barrita del Onceavo Metal que Kelsier le dejó al morir a Vin con la esperanza de que ella pudiera descubrir su poder y usarlo en contra del Lord Legislador.


Beneficios que aporta al usuario cada uno de los metales:
Hierro: al quemar este metal se pueden atraer fuentes cercanas de metal. Si este es más pesado que el usuario o se encuentra fijado a una superficie, el usuario es lanzado hacia esa fuente.
Acero: el usuario que quema este metal es capaz de empujar una fuente cercana de metal. Si el metal que se quiere empujar se encuentra anclado a una superficie el usuario es lanzado en dirección contraria hacia donde este está empujando. 
Estaño: al quemar estaño los cinco sentidos del usuario aumentan su sensibilidad a la vez.
Peltre: al quemar peltre aumenta la resistencia física, la velocidad y la fuerza del usuario además de su capacidad para sanar más rápido.
Zinc: el usuario que quema zinc puede inflamar las emociones de una o varias personas cercanas. Además se puede influir sobre una emoción en concreto.
Latón: el usuario que quema latón puede aplacar las emociones de una o varias personas cercanas. Además se puede influir sobre una emoción en concreto.
Cobre: cuando se quema cobre se crea una nube invisible alrededor del usuario que lo protege de personas que intenten usar el zinc o el latón en su contra. Además si se quema cobre las demás personas no pueden detectar que el usuario está quemando metales.
Bronce: al quemar bronce se pueden oir los pulsos alománticos que emiten las personas al quemar metales. 
Atium: permite ver lo que ocurrirá en los próximos segundos.
Onceavo Metal: uso desconocido.
