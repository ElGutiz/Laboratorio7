import london2 from "../Images/7London.jpg";
import museo1 from "../Images/7Museo.jpg";
import mirador1 from "../Images/7Mirador.jpg";
import trafficSound from "../#Sound/Traffic.mp3";

const main_div_7 = document.createElement("div");
    const figure_7_1 = document.createElement("figure");
        const image_7_1 = document.createElement("img");
        image_7_1.src = london2;
        image_7_1.alt = "Londres";
        figure_7_1.appendChild(image_7_1);

        const figcaption_7_1 = document.createElement("figcaption");
        figcaption_7_1.textContent = "Ciudad de Londres";
        figure_7_1.appendChild(figcaption_7_1);
    main_div_7.appendChild(figure_7_1);

    const title_7_1 = document.createElement("h1");
    title_7_1.innerText = "Un viaje a Londres. Dia 2";
    main_div_7.appendChild(title_7_1);

    const title_7_2 = document.createElement("h2");
    title_7_2.innerText = "Un grandote y gravisimo problema";
    main_div_7.appendChild(title_7_2);

    const paragraph_7_1 = document.createElement("p");
    paragraph_7_1.innerText = "Era domingo, el utlimo dia que iriamos a Londres. Al llegar en la estacion tuvimos que esperar menos dado a que la encargada mando un taxi a la casa de los companeros que se habian perdido el dia anterios. Cuando llegamos a Londres, parecia que todos nos habiamos bajado del tren pero cuando empezamos a vernos entre nosotros nos dimos cuenta que faltaba un companero nuestro y cuando la persona encargada se dio cuenta, lo llamo de una vez ";
    main_div_7.appendChild(paragraph_7_1);

    const title_7_3 = document.createElement("h2");
    title_7_3.innerText = "Visita al Museo de Londres";
    main_div_7.appendChild(title_7_3);

    const figure_7_2 = document.createElement("figure");
        const image_7_2 = document.createElement("img");
        image_7_2.src = museo1;
        image_7_2.alt = "MuseoArte";
        figure_7_2.appendChild(image_7_2);

        const figcaption_7_2 = document.createElement("figcaption");
        figcaption_7_2.textContent = "Museo de arte de Londres";
        figure_7_2.appendChild(figcaption_7_2);
    main_div_7.appendChild(figure_7_2);

    const paragraph_7_2 = document.createElement("p");
    paragraph_7_2.innerText = "Mientras se buscaba al companero perdido, los demas dimos una visita a uno de los museos mas importantes del pais el cual contiene una gran variedad de piezas de arte aparte de pinturas y fotos. Fue interesante ver el arte de cerca dado a que habia visto imagenes similares pero solo por Internet. Me gusto el detalle que varios artistas le pusieron a sus obras de arte y es increible que todo eso se logro por medio de utensilios y que cuanto tiempo tuvieron que praticar para llegar a ese nivel de realismo.";
    main_div_7.appendChild(paragraph_7_2);

    const title_7_4 = document.createElement("h2");
    title_7_4.innerText = "Golden Eye";
    main_div_7.appendChild(title_7_4);

    const figure_7_3 = document.createElement("figure");
        const image_7_3 = document.createElement("img");
        image_7_3.src = mirador1;
        image_7_3.alt = "Mirador";
        figure_7_3.appendChild(image_7_3);

        const figcaption_7_3 = document.createElement("figcaption");
        figcaption_7_3.textContent = "Golden Eye";
        figure_7_3.appendChild(figcaption_7_3);
    main_div_7.appendChild(figure_7_3);

    const paragraph_7_3 = document.createElement("p");
    paragraph_7_3.innerText = "Nunca pense que iba a tener la oportunidad de subirme a la rueda de Chicago mas grande del mundo. Estaba muy emocionado pero a la vez tenia miedo dado a que si se miraba demasiado alto (obviamente, que esperaba) pero no iba a desaprovechar una experiencia como esa. Los boletos iguales iban a ser pagados por parte de la asociacion asi que mejor para nosotros. Cuando nos subimos, tenia el temor de que la capsula se iba a caer en cualquier momento pero lo bueno es que no era un vuelta de un solo sino que iba seguia y paraba por intervalos para que los que estuvieran en la parte de hasta arriba pudieran disfrutar de la vista. Cuando estuvimos en la parte de hasta arriba, la verdad si era una vista maravillosa. Podias ver varios lugares iconicos desde un punto de vista.";
    main_div_7.appendChild(paragraph_7_3);

    const audio7 = document.createElement("audio");
    audio7.src = trafficSound;
    audio7.controls = true;
    audio7.autoplay = false;
    main_div_7.appendChild(audio7);

    const footer_main_7 = document.createElement("footer");
        const p_helper_7 = document.createElement("p");
            p_helper_7.innerText = "Author: Jose Gutierrez     ";
            const a_7_1 = document.createElement("a");
                a_7_1.href = "mailto:gut19111@uvg.edu.gt";
                a_7_1.innerText = "gut19111@uvg.edu.gt";
                p_helper_7.appendChild(a_7_1);
            const a_7_2 = document.createElement("a");
                a_7_2.href = "../dist/0-HomePage.html";
                a_7_2.innerText = "    Pagina de Inicio";
                p_helper_7.appendChild(a_7_2);
        footer_main_7.appendChild(p_helper_7);
    main_div_7.appendChild(footer_main_7);
document.getElementById("body_7").appendChild(main_div_7);