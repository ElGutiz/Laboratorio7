const main_div_4 = document.createElement("div");
	const figure_4_1 = document.createElement("figure");
		const image_4_1 = document.createElement("img");
		image_4_1.src = "../Images/cambridgePark.png";
		image_4_1.alt = "Park";
		figure_4_1.appendChild(image_4_1);

		const figcaption_4_1 = document.createElement("figcaption");
		figcaption_4_1.textContent = "Parque en Cambridge";
		figure_4_1.appendChild(figcaption_4_1);
	main_div_4.appendChild(figure_4_1);

	const title_4_1 = document.createElement("h1");
    title_4_1.innerText = "Paseo en el Parque";
    main_div_4.appendChild(title_4_1);

	const paragraph_4_1 = document.createElement("p");
    paragraph_4_1.innerText = "Con nuestra persona guia fuimos a un parque un poco lejos del colegio donde asistiamos. Era un clima raro, porque estaba fuerte el sol pero a su vez habia frio por el fuerte viento que habia. Con mi pareja llevabamos nuestra propia refaccion pero preferimos comprar comida, dado a que los emparedados no se miraban muy apetitodos. Lo que hicimos con ellos es que se lo dimos por pedasos a unas palomas que estaban cerca de un lugar verde pero por pedazos. Vimos uns gansos y patos coloridos pero no podiamos acercarnos mucho a ellos dado a que habia una cerca y una senal que decia \"prohibido pasar\".";
    main_div_4.appendChild(paragraph_4_1);

	const audio4 = document.createElement("audio");
    audio4.src = "../%23Sound/Palomas.mp3"
    audio4.controls = true;
    audio4.autoplay = true;
    main_div_4.appendChild(audio4);

	const footer_main_4 = document.createElement("footer");
        const p_helper_4 = document.createElement("p");
            p_helper_4.innerText = "Author: Jose Gutierrez     ";
            const a_4_1 = document.createElement("a");
                a_4_1.href = "mailto:gut19111@uvg.edu.gt";
                a_4_1.innerText = "gut19111@uvg.edu.gt";
                p_helper_4.appendChild(a_4_1);
            const a_4_2 = document.createElement("a");
                a_4_2.href = "../Page1/0-HomePage.html";
                a_4_2.innerText = "    Pagina de Inicio";
                p_helper_4.appendChild(a_4_2);
        footer_main_4.appendChild(p_helper_4);
    main_div_4.appendChild(footer_main_4);
document.getElementById("body_4").appendChild(main_div_4);