<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/slick.css"/>
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <header class="header-land-services">
        <?php include('template/header.php') ?>
        <img src="./images/free-audit-blot.png" class="paroller header__paroller-1" data-paroller-factor="0.2" aria-hidden="true" alt="" style="transform: translate(0px, 21px); transition: transform 0.1s ease 0s; will-change: transform;">
    </header>
    <section class="service-about">
        <div class="container container-service-about">
            <span class="design_choice section-title">Сделайте правильный выбор дизайна</span>
            <div class="wrapper wrapper-service-about">
                <div class="service service-advertising">
                    <div class="wrapper-services">
                        <span class="services-items-title services-advertising-items-title">Рекламный креатив</span>
                    </div>
                    <button class="btn-more-service btn-more-service-advertising">Подробнее</button>
                </div>
                <div class="wrapper-right">
                    <ul class="services-lists">
                        <li class="services-items"><a href="branding_services.html" class="services-name">Брендинг</a></li>
                        <li class="services-items"><a href="service-logo.html" class="services-name">Логотип</a></li>
                        <li class="services-items"><a href="#" class="services-name">UI/UX design</a></li>
                        <li class="services-items "><a href="service-pack.html" class="services-name">Упаковка</a></li>
                    </ul>
                    <div class="sml-info-service">
                            <div class="sml-info-service-text">
                                <div class="wrapper-sml-info-service">
                                    <span class="sml-info-service-title">Рекламный креатив</span>
                                    <div class="sml-info-service-we-top sml-info-service-advertising-we-top">Покупатель не сможет остаться равнодушным.</div>
                                </div>
                                <button class="cost">Узнать стоимость</button>
                            </div>
                            <img class="service-big-img" src="images/service-advertising-big-img.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="case">
        <div class="container-case">
            <h3 class="case-title section-title"><p style="width: 311px">Примеры наших кейсов</p></h3>
            <img class="case-img" src="images/case-1.png">
        </div>
        <div class="container-case">
            <img class="case-img" src="images/case-2.png">
            <img class="case-img" src="images/case-3.png">
        </div>
        <div class="container-case">
            <img class="case-img" src="images/case-4.png">
            <img class="case-img" src="images/case-5.png">
        </div>
    </section>
    <section class="price">
        <?php include('template/brif.php') ?>
    <img src="./images/free-audit-blot.png" class="paroller price__paroller-1" data-paroller-factor="0.2" aria-hidden="true" alt="" style="transform: translate(0px, 21px); transition: transform 0.1s ease 0s; will-change: transform;">
    <img src="./images/price-blot-1.png" class="paroller price__paroller-2" data-paroller-factor="0.2" aria-hidden="true" alt="" style="transform: translate(0px, 21px); transition: transform 0.1s ease 0s; will-change: transform;">
    <img src="./images/free-audit-blot-3.png" class="paroller price__paroller-3" data-paroller-factor="0.2" aria-hidden="true" alt="" style="transform: translate(0px, 21px); transition: transform 0.1s ease 0s; will-change: transform;">
    </section>
    <footer class="footer">
        <?php include('template/footer.php') ?>
    </footer>

<script src="./js/jquery-3.4.1.min.js"></script>
<script src="./js/jquery.paroller.min.js"></script>
<script defer type="text/javascript" src="js/slick.min.js"></script>
<script defer src="./main.js"></script> 
</body>
</html>