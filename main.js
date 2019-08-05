document.addEventListener('DOMContentLoaded', () => {
    $(".paroller, [data-paroller-factor]").paroller({
        type: 'foreground'
    });

    //adapt-menu

    let selector = selector => document.querySelector(selector);
    let selectorAll = selector => document.querySelectorAll(selector);

    if(document.documentElement.clientWidth <= 1100) {
        initMobileMenu();
    }
    
    function initMobileMenu() {
        const openMenuBtn = selector('.open-menu-btn');
        const closeMenuBtn = selector('.close-menu-btn');
        const mobileMenu = selector('.mobile-menu');
        const mobileMenuOverlay = selector('.mobile-menu-overlay');

        openMenuBtn.addEventListener('click', ()=> {
            menuToggleClasses();
        });

        closeMenuBtn.addEventListener('click', ()=>{
            menuToggleClasses();
        });

        mobileMenuOverlay.addEventListener('click', ()=>{
            menuToggleClasses();
        });

        function menuToggleClasses() {
            mobileMenu.classList.toggle('mobile-menu_active');
            mobileMenuOverlay.classList.toggle('mobile-menu-overlay_active');
            document.body.classList.toggle('no-overflow');
        }
        
    }

    // slaider

    // if(window.matchMedia('(max-width: 800px)').matches){
    //     $('.services-list').slick({
    //         centerMode: true,
    //         centerPadding: '60px',
    //         slidesToShow: 2,
    //         responsive: [
    //         {
    //             breakpoint: 800,
    //             settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 2 
    //             }
    //         }
            
    //         ]
    //     });
    // }
});