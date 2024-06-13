document.addEventListener('DOMContentLoaded', () => {
    function mostrarConjugacion(verbo) {
        fetch('verbos.json')
            .then(response => response.json())
            .then(data => {
                const verboData = data.verbos.find(v => v.infinitivo === verbo);
                if (verboData) {
                    const conjugaciones = verboData.conjugaciones;
                    let htmlConjugaciones = '';
                    for (let tiempo in conjugaciones) {
                        htmlConjugaciones += `<div class="card"><h2>${tiempo.charAt(0).toUpperCase() + tiempo.slice(1).replace('_', ' ')}</h2><ul>`;
                        for (let pronombre in conjugaciones[tiempo]) {
                            htmlConjugaciones += `<li>${pronombre}: ${conjugaciones[tiempo][pronombre]}</li>`;
                        }
                        htmlConjugaciones += '</ul></div>';
                    }
                    document.getElementById('conjugaciones').innerHTML = htmlConjugaciones;

                    const ejemplos = verboData.ejemplos;
                    let htmlEjemplos = '<h2>Ejemplos de uso</h2><ul>';
                    ejemplos.forEach(ejemplo => {
                        htmlEjemplos += `<li>${ejemplo}</li>`;
                    });
                    htmlEjemplos += '</ul>';
                    document.getElementById('ejemplos').innerHTML = htmlEjemplos;
                } else {
                    document.getElementById('conjugaciones').innerHTML = `<p>No se encontraron conjugaciones para el verbo ${verbo}</p>`;
                    document.getElementById('ejemplos').innerHTML = `<p>No se encontraron ejemplos para el verbo ${verbo}</p>`;
                }
            })
            .catch(error => console.error('Error:', error));
    }
    window.mostrarConjugacion = mostrarConjugacion;
});