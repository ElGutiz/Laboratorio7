import oxford1 from "../Images/OxfordPuente.jpg";

const main_div_8 = document.createElement("div");
	const figure_8_1 = document.createElement("figure");
		const image_8_1 = document.createElement("img");
		image_8_1.src = oxford1;
		image_8_1.alt = "Oxford";
		figure_8_1.appendChild(image_8_1);

		const figcaption_8_1 = document.createElement("figcaption");
		figcaption_8_1.textContent = "Ciudad de Londres";
		figure_8_1.appendChild(figcaption_8_1);
	main_div_8.appendChild(figure_8_1);

	const title_8_1 = document.createElement("h1");
    title_8_1.innerText = "El enemigo de Cambridge...Oxford";
    main_div_8.appendChild(title_8_1);

	const paragraph_8_1 = document.createElement("p");
    paragraph_8_1.innerText = "Despues de dos semanas de estudio, ya solo nos quedaba un fin de semana para viajar a algun lugar entonces la asociacion habia contratado a un guia turistico para darnos un recorrido por algunas calles y lugares importantes de Oxford. Nos fuimos en bus y cuando llegamos, estabamos cerca de la Universidad de Oxford el cual es conocido por varias mentes maestras que han salido del lugar y que han hecho grandes descubrimientos dentro de ello. El guia nos empezo a contar la historia de la universidad de Oxford y de las grandes rivalidades que tiene con otras universidades, especialmente con Cambridge. Nos conto la historia de algunos lugares, estatuas y monumentos que eran valiosos para la historia del lugar. Despues de una hora y media, ya eramos libres de poder ver otros lugares y comprar cualquier objeto que nos pudiera gustar. Habia un centro comercial cerca de donde nos habian dejado asi que aproveche a comprar unas canicas y unos llaveros que tenian un diseño calidad. Oxford era un contraste entre lo rustico y lo moderno, porque habian caminos de piedra pero a su vez habian de asfalto, habian vehiculos viejos pero a la vez habian autos muy modernos y entre edificios viejos habian centros comerciales. Era un contraste interesante de observar.";
    main_div_8.appendChild(paragraph_8_1);

	const footer_main_8 = document.createElement("footer");
        const p_helper_8 = document.createElement("p");
            p_helper_8.innerText = "Author: Jose Gutierrez     ";
            const a_8_1 = document.createElement("a");
                a_8_1.href = "mailto:gut19111@uvg.edu.gt";
                a_8_1.innerText = "gut19111@uvg.edu.gt";
                p_helper_8.appendChild(a_8_1);
            const a_8_2 = document.createElement("a");
                a_8_2.href = "../Page1/0-HomePage.html";
                a_8_2.innerText = "    Pagina de Inicio";
                p_helper_8.appendChild(a_8_2);
        footer_main_8.appendChild(p_helper_8);
    main_div_8.appendChild(footer_main_8);
document.getElementById("body_8").appendChild(main_div_8);