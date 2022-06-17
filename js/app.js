// MENU RESPONSIVE 

var btnMenuOpen = document.getElementById('btnMenuOpen'),
    btnMenuClose = document.getElementById('btnMenuClose'),
    menuResponsive = document.getElementById('menu-Bar'),
    enlaces = document.getElementById('enlaces');



    // Clic abrir
    btnMenuOpen.addEventListener('click', () => {

        menuResponsive.classList.add('active');



    });

    // Clic cerrar
    btnMenuClose.addEventListener('click', () => {

        menuResponsive.classList.remove('active');

    });

    //Cerrar menu con elementos de  enlaces

    enlaces.addEventListener('click', () => {
        menuResponsive.style.transitionDelay = '0.5s';
        menuResponsive.classList.remove('active');

    });

    enlaces.addEventListener('click', () => {
        menuResponsive.onclick("openInNewTab")
    }) 