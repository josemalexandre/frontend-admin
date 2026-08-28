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


const evolutionChart = document.getElementById("evolutionChart");

if (evolutionChart) {
    new Chart(evolutionChart, {
        type: "line",
        data: {
            labels: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho"
            ],
            datasets: [
                {
                    label: "Registros",
                    data: [180, 240, 210, 320, 290, 380],
                    borderWidth: 2,
                    tension: 0.3,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

