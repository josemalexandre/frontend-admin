const sidebar = document.querySelector('.sidebar');

const menuButton = document.querySelector('.navbar__menu');

const sidebarOverlay = document.querySelector('.sidebar-overlay');

const closeButton = document.querySelector('.sidebar__close');

function closeSidebar() {
    sidebar.classList.remove('is-open');
    sidebarOverlay.classList.remove('is-visible');
}

menuButton.addEventListener('click', () => {
    sidebar.classList.add('is-open');
    sidebarOverlay.classList.add('is-visible');
});

closeButton.addEventListener('click', () => {
    closeSidebar();
});

sidebarOverlay.addEventListener('click', () => {
    closeSidebar();
});


