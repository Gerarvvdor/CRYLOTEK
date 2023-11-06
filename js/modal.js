const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');
const body = document.body;

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    body.style.overflow = 'hidden'; // Deshabilitar el scroll
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    body.style.overflow = 'auto'; // Habilitar el scroll nuevamente
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
});
