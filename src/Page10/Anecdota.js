const main_div_9 = document.createElement("div");
	const figure_9_1 = document.createElement("figure");
		const image_9_1 = document.createElement("img");
		image_9_1.src = "../Images/8Doll.jpg";
		image_9_1.alt = "Doll";
		figure_9_1.appendChild(image_9_1);
	main_div_9.appendChild(figure_9_1);

	const figure_9_2 = document.createElement("figure");
		const image_9_2 = document.createElement("img");
		image_9_2.src = "../Images/8Mac.jpg";
		image_9_2.alt = "Mac";
		figure_9_2.appendChild(image_9_2);

		const figcaption_9_1 = document.createElement("figcaption");
		figcaption_9_1.textContent = "Como estas imagenes se relacioan?";
		figure_9_2.appendChild(figcaption_9_1);
	main_div_9.appendChild(figure_9_2);

	const title_9_1 = document.createElement("h1");
    title_9_1.innerText = "Una anecdota muy bizarra";
    main_div_9.appendChild(title_9_1);

	const paragraph_9_1 = document.createElement("p");
    paragraph_9_1.innerText = "Despues de un dia de caminata y compras en Oxford, empezabamos a sentir hambre por el cual fuimos a un McDonald's aprovechando unos tickets de descuento que nos habia la maestra guia. Habiamos subido al segundo nivel para poder comer dado a que abajo todas las mesas estaba ocupadas. Mientras comiamos, contabamos anecdotas de nuestros colegios para poder descansar un poco mas de tiempo. Cuando habiamos terminado de comer, uno de los integrantes queria comprar un helado asi que los demas esperaron afuera mientras me dijeros que la esperara asi que lo hice. Mientras ella hacia su pedido, habia una muncea en un carruaje y como no sabia que hacer pues me le quede viendo (estaba ido). Cuando salimos, como fui el ultimo en salir me voltie y me di cuenta que una senora gorda me estaba siguiendo hasta la salida, hasta que unos trabajadores de McDonalds la detuvieron y yo no habia tomado nada de la muneca. De plano penso que me la iba a robar. Cuando salimos, uno de los empleados se fue a disculpar conmigo personalmente diciendome que la senora estaba loca.";
    main_div_9.appendChild(paragraph_9_1);

	const footer_main_9 = document.createElement("footer");
        const p_helper_9 = document.createElement("p");
            p_helper_9.innerText = "Author: Jose Gutierrez     ";
            const a_9_1 = document.createElement("a");
                a_9_1.href = "mailto:gut19111@uvg.edu.gt";
                a_9_1.innerText = "gut19111@uvg.edu.gt";
                p_helper_9.appendChild(a_9_1);
            const a_9_2 = document.createElement("a");
                a_9_2.href = "../Page1/0-HomePage.html";
                a_9_2.innerText = "    Pagina de Inicio";
                p_helper_9.appendChild(a_9_2);
        footer_main_9.appendChild(p_helper_9);
    main_div_9.appendChild(footer_main_9);
document.getElementById("body_9").appendChild(main_div_9);