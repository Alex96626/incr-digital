<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" type="text/css" href="css/slick.css"/>
    <title>Document</title>
</head>
<body>
<header class="header-land-services">
    <?php include('template/header.php') ?>
<img src="./images/free-audit-blot.png" class="paroller header__paroller-1" data-paroller-factor="0.2" aria-hidden="true" alt="" style="transform: translate(0px, 21px); transition: transform 0.1s ease 0s; will-change: transform;">
</header>
<section class="service-all">
    <div class="container container-service-all">
        <h3 class="design_choice">Сделайте правильный выбор дизайна</h3>
        <div class="service-all-list">
            <div class="service-all-item">
                <h4 class="service-all-title">Логотип</h4>
                <span class="sevice-all-sub-title">Ваш фирменый знак</span>
                <img class="service-all-img" src="images/service-all-img-1.png">
                <a href="#" class="service-all-btn">Подробнее</a>
            </div>
            <div class="service-all-item">
                <h4 class="service-all-title">Упаковка</h4>
                <span class="sevice-all-sub-title">Конкурентное преимущество продукты</span>
                <img class="service-all-img" src="images/service-all-img-2.png">
                <a href="#" class="service-all-btn">Подробнее</a>
            </div>
            <div class="service-all-item">
                <h4 class="service-all-title">Брендинг</h4>
                <span class="sevice-all-sub-title">Имидж и отличительная черта</span>
                <img class="service-all-img" src="images/service-all-img-3.png">
                <a href="#" class="service-all-btn">Подробнее</a>
            </div>
            <div class="service-all-item">
                <h4 class="service-all-title">Рекламный креатив</h4>
                <span class="sevice-all-sub-title">Уникальная реклама вашего товара  или услуги</span>
                <img class="service-all-img" src="images/service-all-img-4.png">
                <a href="#" class="service-all-btn">Подробнее</a>
            </div>
            <div class="service-all-item">
                <h4 class="service-all-title">Ui / Ux дизайн</h4>
                <span class="sevice-all-sub-title">Создаем интерфейсы для людей</span>
                <img class="service-all-img" src="images/service-all-img-5.png">
                <a href="#" class="service-all-btn">Подробнее</a>
            </div>
        </div>
    </div>
</section>
<section class="free-audit">
        <img src="./images/free-audit-blot.png" class="paroller free-audit__paroller-1" data-paroller-factor="0.2" aria-hidden="true" alt="">
        <img src="./images/services-blot-1.png" class="paroller free-audit__paroller-2" data-paroller-factor="0.25" aria-hidden="true" alt="">
        <img src="./images/free-audit-blot-3.png" class="paroller free-audit__paroller-3" data-paroller-factor="0.15" aria-hidden="true" alt="">
        
        <div class="container">
            <div class="free-audit__content">
                <div class="free-audit__info">
                    <h3 class="section-title free-audit__title">Заполни форму</h3>
                    <p class="free-audit__text"> А мы проведем бесплатный аудит вашего бизнеса</p>
                    <p class="free-audit__text">Предоставим коммерческое предложение с готовыми решениями и полным просчетом стоимости под вашу нишу </p>
                </div>
                <form action="" class="free-audit__form form">
                    <input type="text" name="name" class="free-audit__input form__input" placeholder="Имя">
                    <input type="text" name="phone" class="free-audit__input form__input" placeholder="Телефон">
                    <textarea name="message" class="free-audit__textarea form__input" placeholder="Сообщение"></textarea>
                    <button type="bubmit" class="btn free-audit__btn">Подробнее</button>
                    <label class="form__pp">
                        <input type="checkbox" class="form__pp-checkbox" name="pp">
                        <span class="form__pp-text">Согласен на обработку <a href="#" class="form__pp-link">персональных данных</a></span>
                    </label>
                </form>
            </div>
        </div>
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