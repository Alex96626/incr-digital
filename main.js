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
            centerMode : true,
            initialSlide : 1,
            arrows :true,
            // adaptiveHeight : true,
            prevArrow: $('.switch-back'),
            nextArrow: $('.switch-forward'),
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
                    slidesToShow: 2 ,

                    }
                },

                {
                    breakpoint: 500,
                    settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                    }
                },
            ]
        });

        $('.projects-list').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode : true,
            // initialSlide : 1,
            variableWidth: true,
            arrows :true,
            prevArrow: $('.switch-back'),
            nextArrow: $('.switch-forward'),
            responsive: [

                {
                    breakpoint: 1101,
                    settings: {
                        variableWidth: false,
                    }
                
                    
                },

            ]



        });

        $('.budget-list').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode : true,
            initialSlide : 1,
            arrows :true,
            variableWidth : true,
            prevArrow: $('.switch-back'),
            nextArrow: $('.switch-forward'),
            responsive: [
            {
                breakpoint: 1921,
                settings: 'unslick'
            },

            {
                breakpoint: 1201,
                settings: 'slick'
                
            },
        ]
        });

        $('.waterfall-bloks').slick({
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            // centerMode : true,
            initialSlide : 1,
            arrows :true,
            // centerPadding: '100px',
            variableWidth : true,
            responsive: [

            
            {
                breakpoint: 1921,
                settings: 'unslick'
            },

            {
                breakpoint: 1201,
                settings: 'slick'
                
            },
        ]

        });

        $('.wrapper-trust-us').slick({

            infinite: true ,
            // slidesToShow: 5,
            slidesToScroll: 1,
            centerMode : true,
            initialSlide : 1,
            arrows :true,
            // centerPadding: '50px',
            variableWidth : true,
            prevArrow: $('.switch-back'),
            nextArrow: $('.switch-forward'),
            responsive: [

            ]

        });

        $('.wrapper-analisis-item').slick({
            infinite :false,
            slidesToShow: 1,
            // slidesToScroll: 1,  
            // initialSlide : 1,
            arrows :true,
            // centerPadding: '100px',
            // variableWidth : true,
            speed: 300,
            prevArrow: $('.switch-back'),
            nextArrow: $('.switch-forward'),
            responsive: [

            
            {
                breakpoint: 1921,
                settings: 'unslick'
            },

            {
                breakpoint: 701,
                settings: 'slick'
                
            },
        ]

        });
        
        

        
        // slider!
    });

