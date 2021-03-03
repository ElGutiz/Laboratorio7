import train_1 from "../Images/train1.jpg";
import londres_bus1 from "../Images/london1.jpeg";
import palace_1 from "../Images/palace1.jpeg";

const main_div_6 = document.createElement("div");
    const figure_6_1 = document.createElement("figure");
        const image_6_1 = document.createElement("img");
        image_6_1.src = train_1;
        image_6_1.alt = "Train";
        figure_6_1.appendChild(image_6_1);

        const figcaption_6_1 = document.createElement("figcaption");
        figcaption_6_1.textContent = "Tren de Cambridge";
        figure_6_1.appendChild(figcaption_6_1);
    main_div_6.appendChild(figure_6_1);

    const title_6_1 = document.createElement("h1");
    title_6_1.innerText = "Un viaje a Londres. Dia 1";
    main_div_6.appendChild(title_6_1);

    const title_6_2 = document.createElement("h2");
    title_6_2.innerText = "Esperar....";
    main_div_6.appendChild(title_6_2);

    const paragraph_6_1 = document.createElement("p");
    paragraph_6_1.innerText = "Teniamos planeado en viajar en el primer fin de semana en viajar a Londres durante los dias sabado y domingo por medio de tren los cuales lo boletos iban a ser pagados por la asociacion. Al llegar en la estacion tuvimos que esperar casi una hora mas de lo acordado dado a que dos companeros se habian perdido de camino desde su casa a la estacion. Al final, pues llegaron y la persona encargada estaba muy angustiada. Despues de esperara, fuimos a tomar el tren (milagrosamente habia otro para ir a Londres). El viaje tardo aproximadamente una hora.";
    main_div_6.appendChild(paragraph_6_1);

    const figure_6_2 = document.createElement("figure");
        const image_6_2 = document.createElement("img");
        image_6_2.src = londres_bus1;
        image_6_2.alt = "Londres_Bus";
        figure_6_2.appendChild(image_6_2);

        const figcaption_6_2 = document.createElement("figcaption");
        figcaption_6_2.textContent = "Buses de Londres";
        figure_6_2.appendChild(figcaption_6_2);
    main_div_6.appendChild(figure_6_2);

    const title_6_3 = document.createElement("h2");
    title_6_3.innerText = "Paseo por las calles de Londres";
    main_div_6.appendChild(title_6_3);

    const paragraph_6_2 = document.createElement("p");
    paragraph_6_2.innerText = "Llegamos y como esperabamos, era un lugar lleno de turistas. Habian muchos policias, y no me refiero a los soldados con prendas rojas, sino que policias con armas en varias partes de la ciudad. Tal vez habia sucedido algo en los dias antes del viaje que tuveron que aumentar la guardia. No lo se. Pero a su vez, habian soldados rojos montados en caballos yendo por varias calles y los turistas pues se tomaban fotos con ellos como siempre. Vimos varios lugares, como el Palacio de Buckingham desde afuera y otros edificios como la Catedral de San Pablo de Londres. Fue calidad ir en uno de los buses rojos de doble nivel. Queriamos ver mas lugares pero no podiamos dado a que perdimos tiempo esperando a los companeros que se habian perdido en Cambridge. Se tenia planeado quedarse a dormir en Londres pero al parecer nunca se llego a un plan para hacerlo.";
    main_div_6.appendChild(paragraph_6_2);

    const figure_6_3 = document.createElement("figure");
        const image_6_3 = document.createElement("img");
        image_6_3.src = palace_1;
        image_6_3.alt = "Palace1";
        figure_6_3.appendChild(image_6_3);

        const figcaption_6_3 = document.createElement("figcaption");
        figcaption_6_3.textContent = "Palacio de Buckingham, Londres";
        figure_6_3.appendChild(figcaption_6_3);
    main_div_6.appendChild(figure_6_3);

    const audio6 = document.createElement("audio");
    audio6.src = "../%23Sound/Train.mp3"
    audio6.controls = true;
    audio6.autoplay = false;
    main_div_6.appendChild(audio6);

    const footer_main_6 = document.createElement("footer");
        const p_helper_6 = document.createElement("p");
            p_helper_6.innerText = "Author: Jose Gutierrez     ";
            const a_6_1 = document.createElement("a");
                a_6_1.href = "mailto:gut19111@uvg.edu.gt";
                a_6_1.innerText = "gut19111@uvg.edu.gt";
                p_helper_6.appendChild(a_6_1);
            const a_6_2 = document.createElement("a");
                a_6_2.href = "../Page1/0-HomePage.html";
                a_6_2.innerText = "    Pagina de Inicio";
                p_helper_6.appendChild(a_6_2);
        footer_main_6.appendChild(p_helper_6);
    main_div_6.appendChild(footer_main_6);
document.getElementById("body_6").appendChild(main_div_6);