async function getQuote() {
    try {
        // Realizar solicitud a la API
        const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
        const data = await response.json();

        // Obtener los datos de la respuesta
        const { quote, character, image } = data[0];

        // Mostrar los datos en la página
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerHTML = `
            <div>
                <img src="${image}" alt="${character}">
                <p>${quote}</p>
                <p>- ${character}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error al obtener la cita:', error);
    }
}

// Llamar a la función al cargar la página
window.onload = function() {
    getQuote();
};
