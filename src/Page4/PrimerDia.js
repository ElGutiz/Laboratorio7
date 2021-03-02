const main_div_3 = document.createElement("div");
	const figure_3_1 = document.createElement("figure");
		const image_3_1 = document.createElement("img");
		image_3_1.src = "../Images/Embassy.png";
		image_3_1.alt = "Embassy";
		figure_3_1.appendChild(image_3_1);

		const figcaption_3_1 = document.createElement("figcaption");
		figcaption_3_1.textContent = "Embassy School";
		figure_3_1.appendChild(figcaption_3_1);
	main_div_3.appendChild(figure_3_1);

	const title_3_1 = document.createElement("h1");
    title_3_1.innerText = "Primer Dia";
    main_div_3.appendChild(title_3_1);

	const title_3_2 = document.createElement("h2");
    title_3_2.innerText = "Primer dia en el colegio";
    main_div_3.appendChild(title_3_2);

	const paragraph_3_1 = document.createElement("p");
    paragraph_3_1.innerText = "En el primer dia, una de las hermanas nos fue a dejar cerca del colegio donde asistiriamos todos los dias: Embassy School Todos los que ibamos de visita estabamos intrigados de como iba a ser el edificio por dentro y de como iban a ser los otros estudiates, pues solo habiamos visto estudiantes que aparentaban 19 cuando nuestra edad estaba entre 14-16. Una catedratica fue a atendernos a la entrada del edificio y nos dio la bienvendia. Nos dio un tour por el edicio pero no era tan grande como pensaba que iba a ser pero no estuve decepcionado. Tuvimos ese dia nuestra primera clase, donde nos presentamos y tuvimos que hablar de nuestro pais, Guatemala. Durante el receso, otros estuiantes nos fueron a hablar y a conocer, donde la mayoria era gente que venia de un pais hispanohablante, como colombianos, mexicanos, argentinos, etc. Y habian otros estudiantes que venia de otros paises. Termino el receso y regresamos a clases. Al terminar el dia, el colegio nos ofrecia el almuerzo sin ningun costo. Siempre habia variacion.";
    main_div_3.appendChild(paragraph_3_1);

	const title_3_3 = document.createElement("h2");
    title_3_3.innerText = "Paseo";
    main_div_3.appendChild(title_3_3);

	const paragraph_3_2 = document.createElement("p");
	paragraph_3_2.innerText = "Al terminar nuestro primer dia de estudio, tuvimos como guia a un estudiante el cual nos enseno el camino para llegar al centro comercial mas cercano y un pequeno mercado cerca de ahi. El se despidio y nosotros nos quedamos un rato para ver y explorar que podia haber de bueno, dado a que podriamos regresar a ese lugar todos los dias. Se hacia de noche rapido pero a la vez era muy temprano. Ya era total oscuridad y apenas eran las 5 PM.";
	main_div_3.appendChild(paragraph_3_2);

	const title_3_4 = document.createElement("h2");
    title_3_4.innerText = "Perdidos";
    main_div_3.appendChild(title_3_4);

	const paragraph_3_3 = document.createElement("p");
	paragraph_3_3.innerText = "Cuando ibamos de regreso con mi compañero, estabamos dentro de la colonia pero no podiamos encontrar la casa de la familia anfitriona. Habiamos estado dando vueltas por varias calles y no sabiamos que caminos tomar. Mi compañero de milagro tenia el numero de una de las hermanas entonces la llamo y le dijo por donde mas o menos estabamos. Ella nos fue a recoger en auto pero en realidad si estabamos cerca de la casa solo que era muy dificil de verla.";
	main_div_3.appendChild(paragraph_3_3);

	const footer_main_3 = document.createElement("footer");
		const p_helper_3 = document.createElement("p");
			p_helper_3.innerText = "Author: Jose Gutierrez     ";
			const a_3_1 = document.createElement("a");
				a_3_1.href = "mailto:gut19111@uvg.edu.gt";
				a_3_1.innerText = "gut19111@uvg.edu.gt";
				p_helper_3.appendChild(a_3_1);
			const a_3_2 = document.createElement("a");
				a_3_2.href = "../Page1/0-HomePage.html";
				a_3_2.innerText = "    Pagina de Inicio";
				p_helper_3.appendChild(a_3_2);
		footer_main_3.appendChild(p_helper_3);
	main_div_3.appendChild(footer_main_3);
document.getElementById("body_3").appendChild(main_div_3);