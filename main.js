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

        $('.dev-stage-list').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode : false,
            initialSlide : 1,
            arrows :true,
            prevArrow : '<button class="switch switch-back"> < </button>',
            nextArrow : '<button class="switch switch-forward"> > </button>',
            responsive: [
                
                {
                    breakpoint: 1921,
                    settings: 'unslick'
                },

                {
                    breakpoint: 1101,
                    settings: 'slick'
                
                    
                },

                {
                    breakpoint: 800,
                    settings: {
                    centerPadding: '40px',
                    slidesToShow: 2 

                    }
                },

                {
                    breakpoint: 500,
                    settings: {
                    centerPadding: '40px',
                    slidesToShow: 1
                    }
                },
            ]
        });
    });

