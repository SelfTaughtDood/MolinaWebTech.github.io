const ESPANOL__BUTTON = document.querySelector('#espanol').addEventListener('click', ESPANOL)
const FRENCH__BUTTON = document.querySelector('#french').addEventListener('click', FRENCH)
const ENGLISH__BUTTON = document.querySelector('#english').addEventListener('click', ENGLISH)
const TARGET__H1 = document.querySelector('h1')
const TARGET__INTRO = document.querySelector('.g-container #intro')





function ESPANOL() {
  const h1__ESPANOL = 'Hola! ✌🏽 Soy Guiver'
  const INTRO__ESPANOL = 'Construyo diseños responsivos utilizando HTML, CSS y JavaScript. Echa un vistazo a algunos de mis diseños y dime qué opinas.'

  TARGET__H1.innerText = h1__ESPANOL;
  TARGET__INTRO.innerText = INTRO__ESPANOL;

}
function FRENCH() {
  const h1__ESPANOL = "'Bonjour! ✌🏽 Je m'appelle Guiver'"
  const INTRO__ESPANOL = "'Je crée des designs réactifs en utilisant HTML, CSS et JavaScript. Jetez un coup d'œil à certains de mes designs et dites-moi ce que vous en pensez.'"

  TARGET__H1.innerText = h1__ESPANOL;
  TARGET__INTRO.innerText = INTRO__ESPANOL;

}
function ENGLISH() {
  const h1__ESPANOL = "Hey! ✌🏽 I'm Guiver"
  const INTRO__ESPANOL = 'I build responsive designs using HTML, CSS, and JavaScript. Check out some of my designs and let me know what you think 🙏'

  TARGET__H1.innerText = h1__ESPANOL;
  TARGET__INTRO.innerText = INTRO__ESPANOL;

}