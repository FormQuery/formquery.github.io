const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const secrets = document.querySelectorAll('#secret');
const secretLink = document.getElementById('secretLink');

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


const DUMMY_SECRET = 'supersecret';
const adminView = () => {
    const storage = localStorage.getItem('isAdmin');
    if (storage && Boolean(storage)) return true;

    const secret = new URLSearchParams(window.location.search).get('secret');
    
    if (!secret || secret !== DUMMY_SECRET) {
        secretLink.classList.add('hidden');

        if (location.pathname === '/scripts.html')
            navigateHome();
        return false;
    }

    localStorage.setItem('isAdmin', true);
    return true;
}

const navigateHome = () => {
    location.href = '/index.html';
}

const onLoad = () => {
    if (!adminView()) {
        secrets.forEach(el => el.remove());
    }
}

onLoad();