import aeropuerto1 from "../Images/Aeropuerto.jpg";
import "../Page1/style_HomePage.scss";

const main_div_1 = document.createElement("div");
    const figure2 = document.createElement("figure");
    const image2 = document.createElement("img");
    image2.src = aeropuerto1;
    image2.alt = "Aeropuerto";
    figure2.appendChild(image2);

    const figcaption2 = document.createElement("figcaption");
    figcaption2.textContent = "Aeropuerto";
    figure2.appendChild(figcaption2);
    main_div_1.appendChild(figure2);

    const title1 = document.createElement("h1");
    title1.innerText = "Un largo viaje";
    main_div_1.appendChild(title1);

    const paragraph1 = document.createElement("p");
    paragraph1.innerText = "Llegue al aeropuerto y me despedi de mis padres. Los iba a extranar un monton. Habia llegado un poco tarde, dado a que era el unico que estaban esperando. Ibamos primero a Colombia y despues llegariamos a Inglaterra, estando en vuelo 16 horas en total aproximadamente. Si fue un viaje muy agotador aparte del tiempo de vuelo, debiamos esperar en los aeropuertos como una dos o tres horas mas de espera para que llegara el avion. Pero la espera valio la pensa."
    main_div_1.appendChild(paragraph1);

    const audio1 = document.createElement("audio");
    audio1.src = "../%23Sound/airplaneSound.mp3"
    audio1.controls = true;
    audio1.autoplay = true;
    main_div_1.appendChild(audio1);

    
    const footer_main_1 = document.createElement("footer");
        const p_helper = document.createElement("p");
            p_helper.innerText = "Author: Jose Gutierrez     ";
            const a_12 = document.createElement("a");
                a_12.href = "mailto:gut19111@uvg.edu.gt";
                a_12.innerText = "gut19111@uvg.edu.gt";
                p_helper.appendChild(a_12);
            const a_13 = document.createElement("a");
                a_13.href = "../Page1/0-HomePage.html";
                a_13.innerText = "    Pagina de Inicio";
                p_helper.appendChild(a_13);
        footer_main_1.appendChild(p_helper);
    main_div_1.appendChild(footer_main_1); 
document.getElementById("body_1").appendChild(main_div_1);