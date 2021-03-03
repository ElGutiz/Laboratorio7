import "../Page1/style_HomePage.scss";
import bahia1 from '../Images/Bahia.jpeg';

const main_div = document.createElement("div");
    const figure1 = document.createElement("figure");
        const image1 = document.createElement("img");
        image1.src = bahia1;
        image1.alt = "Paisaje";
        figure1.appendChild(image1);

        const figcaption1 = document.createElement("figcaption");
        figcaption1.textContent = "Imagen tomada por mi en una bahia.";
        figcaption1.id = "fig1";
        figure1.appendChild(figcaption1);
    main_div.appendChild(figure1);
    
    const title = document.createElement("h1");
    title.innerText = "Primera vez en Europa";
    main_div.appendChild(title);
        
    const paragraph = document.createElement("p");
    paragraph.innerText = "En el 2016, el colegio donde estudiaba habia llegado una asociacion el cual estaba buscando estudiantes que estaban interesados en hacer un viaje a Inglaterra, por un precio en dolares. Con mis amigos nos estabamos poniendo de acuerdo de quien podria ir, dado a que no queria ir solo y tampoco queria ser el unico que fuera del grado, dado a que iban tambien de otros grados y de otro colegio. Pero un amigos mio estaba igual de interesado, asi que dijimos que le preguntariamos a nuestros padres la idea. Al principio mi padre pues no estaba seguro si tenia el dinero suficiente para pagarlo, porque no era un viaje barato y el precio estaba en dolares, asi que habia mas probabilidades que me dijera que no. Podia esperar pero habian mas probabilidades que me dijeran que no se iba a poder. Los dias pasaban y de sorpresa, mi padre dijo que si iba a pagar el viaje y que iba a tener la oportunidad de ir por primera vez a Europa. Ese dia estaba muy contento. No lo podia creer, mis padres estaban dispuestos a pagar por un viaje tan caro. Tenia que aprovechar al maximo esos dias, dado a que esas oportunidades no son faciles de obtener y menos que alguien pague tal precio.";
    main_div.appendChild(paragraph);

    const ol_main = document.createElement("ol");
        const li_1 = document.createElement("li");
            const a_1 = document.createElement("a");
            a_1.href = "../Page2/1-LargoViaje.html";
            a_1.innerText = "Esperar en aeropuerto y vuelo";
            li_1.appendChild(a_1);
        ol_main.appendChild(li_1);

        const li_2 = document.createElement("li");
            const a_2 = document.createElement("a");
            a_2.href = "../Page3/2-FamiliaAnfitrion.html";
            a_2.innerText = "Conoci a la familia anfitrion";
            li_2.appendChild(a_2);
        ol_main.appendChild(li_2);

        const li_3 = document.createElement("li");
            const a_3 = document.createElement("a");
            a_3.href = "../Page4/3-PrimerDia.html";
            a_3.innerText = "Primer Dia en Embassy School";
            li_3.appendChild(a_3);
        ol_main.appendChild(li_3);

        const li_4 = document.createElement("li");
            const a_4 = document.createElement("a");
            a_4.href = "../Page5/4-Parque.html";
            a_4.innerText = "Paseo en el parque";
            li_4.appendChild(a_4);
        ol_main.appendChild(li_4);

        const li_5 = document.createElement("li");
            const a_5 = document.createElement("a");
            a_5.href = "../Page6/5-Rugby.html";
            a_5.innerText = "Primera vez en un partido de Rugby";
            li_5.appendChild(a_5);
        ol_main.appendChild(li_5);

        const li_6 = document.createElement("li");
            const a_6 = document.createElement("a");
            a_6.href = "../Page7/6-Londres1.html";
            a_6.innerText = "Primera vez en Londres";
            li_6.appendChild(a_6);
        ol_main.appendChild(li_6);

        const li_7 = document.createElement("li");
            const a_7 = document.createElement("a");
            a_7.href = "../Page8/7-Londres2.html";
            a_7.innerText = "Segundo dia en Londres";
            li_7.appendChild(a_7);
        ol_main.appendChild(li_7);

        const li_8 = document.createElement("li");
            const a_8 = document.createElement("a");
            a_8.href = "../Page9/8-Oxford.html";
            a_8.innerText = "Un dia en Oxford";
            li_8.appendChild(a_8);
        ol_main.appendChild(li_8);

        const li_9 = document.createElement("li");
            const a_9 = document.createElement("a");
            a_9.href = "../Page10/9-Anecdota.html";
            a_9.innerText = "Una anecdota muy bizarra";
            li_9.appendChild(a_9);
        ol_main.appendChild(li_9);

        const li_10 = document.createElement("li");
            const a_10 = document.createElement("a");
            a_10.href = "../Page11/10-Lugares.html";
            a_10.innerText = "Listado de Lugares que visite";
            li_10.appendChild(a_10);
        ol_main.appendChild(li_10);
    main_div.appendChild(ol_main);

    const footer_main = document.createElement("footer");
        footer_main.innerText = "Author: Jose Gutierrez";
        const a_11 = document.createElement("a");
            a_11.href = "mailto:gut19111@uvg.edu.gt";
            a_11.innerText = "gut19111@uvg.edu.gt";
            main_div.appendChild(a_11);
    main_div.appendChild(footer_main); 
document.getElementById("body_0").appendChild(main_div);