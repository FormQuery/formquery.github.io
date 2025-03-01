const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    menuToggle.textContent = isOpen ? '✖' : '☰';
});

overlay.addEventListener('click', () => {
    menu.classList.add('hidden');
    overlay.classList.add('hidden');
    menuToggle.textContent = '☰';
});