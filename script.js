let objetosEncontrados = new Set();


const mensajes = {

    ventana: {

        icono: "☾",

        titulo: "Algún día...",

        texto:
            "Algún día quiero mirar una ventana contigo, pero no desde dos lugares diferentes. Quiero estar ahí contigo, hablando de cualquier bobada y disfrutando simplemente de estar juntos."

    },


    foto: {

        icono: "♥",

        titulo: "Un pequeño recuerdo",

        texto:
            "Por ahora tenemos nuestras conversaciones, nuestros momentos y esta pequeña historia que hemos ido construyendo. Espero que algún día tengamos muchísimas fotos juntos."

    },


    peluche: {

        icono: "🧸",

        titulo: "Un abrazo",

        texto:
            "Este peluche representa uno de esos abrazos que te debo. Y sí, algún día pienso cobrar esa deuda jajaja."

    },


    computador: {

        icono: "💻",

        titulo: "Nuestro pequeño mundo",

        texto:
            "Muchas de nuestras mejores conversaciones han pasado detrás de una pantalla. Y aunque me encanta hablar contigo así, espero que algún día podamos hacer todos esos recuerdos en persona."

    },


    carta: {

        icono: "💌",

        titulo: "Una pequeña carta",

        texto:
            "Lu, gracias por llegar a mi vida. Gracias por cada conversación, cada palabra bonita y cada momento que compartimos. Estos meses contigo han significado muchísimo para mí."

    },


    musica: {

        icono: "♪",

        titulo: "Para ti",

        texto:
            "Hay canciones que simplemente empiezan a recordar a alguien. Y últimamente hay muchas que me hacen pensar en ti."

    }

};


function entrarHabitacion() {

    document
        .getElementById("inicio")
        .classList.add("oculto");


    document
        .getElementById("habitacion")
        .classList.remove("oculto");


    const musica =
        document.getElementById("musicaFondo");


    musica.volume = 0.35;


    musica.play().then(() => {

        document
            .getElementById("botonMusica")
            .textContent = "🔊";

    }).catch(error => {

        console.log(
            "No se pudo reproducir la música:",
            error
        );

    });

}


function alternarMusica() {

    const musica =
        document.getElementById("musicaFondo");


    const boton =
        document.getElementById("botonMusica");


    if (musica.paused) {

        musica.play();

        boton.textContent = "🔊";

    } else {

        musica.pause();

        boton.textContent = "🔇";

    }

}


function mostrarMensaje(tipo) {

    const mensaje = mensajes[tipo];


    if (!mensaje) {

        return;

    }


    objetosEncontrados.add(tipo);


    document
        .getElementById("modal-icono")
        .textContent = mensaje.icono;


    document
        .getElementById("modal-titulo")
        .textContent = mensaje.titulo;


    document
        .getElementById("modal-texto")
        .textContent = mensaje.texto;


    document
        .getElementById("modal")
        .classList.remove("oculto");


    comprobarPuerta();

}


function cerrarMensaje() {

    document
        .getElementById("modal")
        .classList.add("oculto");

}


function comprobarPuerta() {

    const objetosNecesarios =
        Object.keys(mensajes).length;


    const puerta =
        document.getElementById("puerta");


    if (objetosEncontrados.size >= objetosNecesarios) {

        puerta.classList.remove("bloqueada");

        puerta.classList.add("desbloqueada");

        puerta.setAttribute(
            "title",
            "La puerta está desbloqueada"
        );

    }

}


function mostrarPuerta() {

    const objetosNecesarios =
        Object.keys(mensajes).length;


    if (objetosEncontrados.size < objetosNecesarios) {

        const faltan =
            objetosNecesarios -
            objetosEncontrados.size;


        document
            .getElementById("modal-icono")
            .textContent = "🔒";


        document
            .getElementById("modal-titulo")
            .textContent =
            "La puerta está cerrada";


        document
            .getElementById("modal-texto")
            .textContent =
            `Todavía te faltan descubrir ${faltan} cosas.`;


        document
            .getElementById("modal")
            .classList.remove("oculto");


        return;

    }


    document
        .getElementById("habitacion")
        .classList.add("oculto");


    document
        .getElementById("final")
        .classList.remove("oculto");

}