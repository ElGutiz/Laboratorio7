import rugby_camp from "../Images/rugbyCamp.jpg";

const main_div_5 = document.createElement("div");
	const figure_5_1 = document.createElement("figure");
		const image_5_1 = document.createElement("img");
		image_5_1.src = rugby_camp;
		image_5_1.alt = "Camp";
		figure_5_1.appendChild(image_5_1);

		const figcaption_5_1 = document.createElement("figcaption");
		figcaption_5_1.textContent = "Campo de Rugby en Cambridge";
		figure_5_1.appendChild(figcaption_5_1);
	main_div_5.appendChild(figure_5_1);

	const title_5_1 = document.createElement("h1");
    title_5_1.innerText = "Primera vez que miraba un partido de Rugby";
    main_div_5.appendChild(title_5_1);

	const paragraph_5_1 = document.createElement("p");
    paragraph_5_1.innerText = "Era de noche, ya veniamos de regreso del centro comercial y pues todavia eran las 6 PM entonces todavia unas horas para llegar a la casa. Entonces en el camino vimos una cancha donde se escuchaban jugadores gritando y personas como dando apoyo entonces nos llamo la atencion asi que fuimos a ver. Llegamos a la entrada de la cancha y vimos que estaban jugando <i>Rugby</i>, un deporte que solo habia visto en TV pero nunca en la vida real. Las entradas tenian precio pero con el carnet que teniamos por parte de la asociacion podiamos entrar gratis. Fuimos primero a comprar unas tortillas de harina cerca de ahi y aprovechamos a comer en la cancha mientras mirabamos el partido. Nunca habia visto un partido tan violento de cerca pero valio la pena.";
    main_div_5.appendChild(paragraph_5_1);

	const audio5 = document.createElement("audio");
    audio5.src = "../%23Sound/Crowd.mp3"
    audio5.controls = true;
    audio5.autoplay = true;
    main_div_5.appendChild(audio5);

	const footer_main_5 = document.createElement("footer");
        const p_helper_5 = document.createElement("p");
            p_helper_5.innerText = "Author: Jose Gutierrez     ";
            const a_5_1 = document.createElement("a");
                a_5_1.href = "mailto:gut19111@uvg.edu.gt";
                a_5_1.innerText = "gut19111@uvg.edu.gt";
                p_helper_5.appendChild(a_5_1);
            const a_5_2 = document.createElement("a");
                a_5_2.href = "../Page1/0-HomePage.html";
                a_5_2.innerText = "    Pagina de Inicio";
                p_helper_5.appendChild(a_5_2);
        footer_main_5.appendChild(p_helper_5);
    main_div_5.appendChild(footer_main_5);
document.getElementById("body_5").appendChild(main_div_5);