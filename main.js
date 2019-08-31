document.addEventListener('DOMContentLoaded', () => {
    $(".paroller, [data-paroller-factor]").paroller({
        type: 'foreground'
    });

    //adapt-menu
    
    let selector = selector => document.querySelector(selector);
    let selectorAll = selector => document.querySelectorAll(selector);
    const mobileSubmenuNavitem = selector('.mobile-sub-menu-nav-item');
    
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

        mobileSubmenuNavitem.addEventListener('click', ()=>{
            if(mobileSubmenuNavitem.classList.contains('open-mobile-sub-menu-nav-item')){
                mobileSubmenuNavitem.classList.remove('open-mobile-sub-menu-nav-item');
            }else {
                mobileSubmenuNavitem.classList.add('open-mobile-sub-menu-nav-item');
            }
            
            

        });


        
    }
    

    

    // slaider

        $('.dev-stage-list').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode : true,
            initialSlide : 1,
            arrows :true,
            adaptiveHeight : true,
            prevArrow: $('.dev-stage_switch-back'),
            nextArrow: $('.dev-stage_switch-forward'),
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
            variableWidth: false,
            arrows :true,
            prevArrow: $('.switch-back_project'),
            nextArrow: $('.switch-forward_project'),
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
            prevArrow: $('.budget-list-switch-back'),
            nextArrow: $('.budget-list-switch-forward'),
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
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode : true,
            initialSlide : 0,
            arrows :true,
            // autoHeight: true,
            // centerPadding: '100px',
            variableWidth : true,
            // centerPadding: '50px',
            prevArrow: $('.waterfall_switch-back'),
            nextArrow: $('.waterfall_switch-forward'),
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


        $('.agile-bloks').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode : true,
            initialSlide : 0,
            arrows :true,
            // autoHeight: true,
            // centerPadding: '100px',
            variableWidth : true,
            // centerPadding: '50px',
            prevArrow: $('.agile_switch-back'),
            nextArrow: $('.agile_switch-forward'),
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
            // prevArrow: $('.complex-analysis_switch-back'),
            // nextArrow: $('.complex-analysis_switch-forward'),
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

