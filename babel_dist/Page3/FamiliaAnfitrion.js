"use strict";

var _Casa = _interopRequireDefault(require("../Images/Casa.jpg"));

var _busSound = _interopRequireDefault(require("../#Sound/busSound.mp3"));

require("../Page1/style_HomePage.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const main_div_2 = document.createElement("div");
const figure3 = document.createElement("figure");
const image3 = document.createElement("img");
image3.src = _Casa.default;
image3.alt = "House";
figure3.appendChild(image3);
const figcaption3 = document.createElement("figcaption");
figcaption3.textContent = "Idea de como era la casa de la familia anfitriona";
figure3.appendChild(figcaption3);
main_div_2.appendChild(figure3);
const title2 = document.createElement("h1");
title2.innerText = "Conociendo a la familia anfitriona";
main_div_2.appendChild(title2);
const paragraph2 = document.createElement("p");
paragraph2.innerText = "Cuando llegamos al aeropuerto de Inglaterra, habia un frio intenso dado a que habiamos llegado en invierno. Lo bueno es que no tuvimos que esperar mucho dado a que el bus ya nos estaba esperando para irnos a dejar en parejas a las casas de las familias anfitrion. Mi pareja era mi companero con el cual nos estabamos poniendo de acuerdo para viajar asi que no iba a tener ningun problema. Nosotros fuimos los ultimos en llegar a 'nuestro hogar'.";
main_div_2.appendChild(paragraph2);
const paragraph3 = document.createElement("p");
paragraph3.innerText = "La famila anfitrion eran hermanas de edad de entre 50-60 las cuales eran las unicas personas que vivian ahi, bueno, excepto por otro alumno que tambien era de intercambio. Nos mencionaron las reglas de las casa:";
main_div_2.appendChild(paragraph3);
const ul_1 = document.createElement("ul");
const li_2_1 = document.createElement("li");
li_2_1.innerText = "Que a partir de las 10 PM ya no se podian tomar duchas";
ul_1.appendChild(li_2_1);
const li_2_2 = document.createElement("li");
li_2_2.innerText = "Que nos iban a preparar el desayuno, que el almuerzo lo teniamos que comprar nosotros y que la cena nos lo iban a preparar pero si llegabamos antes de las 8 PM.";
ul_1.appendChild(li_2_2);
const li_2_3 = document.createElement("li");
li_2_3.innerText = "Que teniamos ir nosotros pos nuestra cuenta al colegio de la empresa y tambien debiamos regresar por nuestra cuenta.";
ul_1.appendChild(li_2_3);
main_div_2.appendChild(ul_1);
const audio2 = document.createElement("audio");
audio2.src = _busSound.default;
audio2.controls = true;
audio2.autoplay = true;
main_div_2.appendChild(audio2);
const footer_main_2 = document.createElement("footer");
const p_helper_2 = document.createElement("p");
p_helper_2.innerText = "Author: Jose Gutierrez     ";
const a_2_1 = document.createElement("a");
a_2_1.href = "mailto:gut19111@uvg.edu.gt";
a_2_1.innerText = "gut19111@uvg.edu.gt";
p_helper_2.appendChild(a_2_1);
const a_2_2 = document.createElement("a");
a_2_2.href = "../dist/0-HomePage.html";
a_2_2.innerText = "    Pagina de Inicio";
p_helper_2.appendChild(a_2_2);
footer_main_2.appendChild(p_helper_2);
main_div_2.appendChild(footer_main_2);
document.getElementById("body_2").appendChild(main_div_2);