const reloj = document.querySelector('.reloj');
const contenedor = document.createElement('div');

contenedor.classList.add('text-secondary', 'mx-4')
reloj.appendChild(contenedor);

setInterval(() => {
contenedor.innerHTML = '';
contenedor.innerHTML = `<h4>${new Date().toLocaleDateString()}</h4>`;
}, 1000);