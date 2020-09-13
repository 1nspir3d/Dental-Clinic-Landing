$(function() {

    /* Fixed Header Start */
    // Создаём переменные
    var nav = $("#nav"),                      // принимает в себя навигацию хедера
        headerH = $("#header").innerHeight(), // принимает в себя высоту хедера
        scrollOffSet = $(window).scrollTop(), // принимает значение отступа от верха окна
        homeButton = $("#home-btn");

    
    // сразу при загрузке страницы вызываем функцию
    checkScroll(scrollOffSet);


    // вызываем функцию при скроле окна
    $(window).on("scroll", function() {

        scrollOffSet = $(this).scrollTop();
        checkScroll(scrollOffSet);

    });


    /* функция, которая сравнивает значение отступа от верха окна с высотой хедера. 
       Если отступ больше - добавляем блоку с навигацией класс "fixed", если меньше - убираем его 
    */
    function checkScroll(scrollOffSet) {
        
       if ( scrollOffSet >= headerH ) {
           nav.addClass("fixed");
           homeButton.removeClass("hidden");
       } else {
           nav.removeClass("fixed");
           homeButton.addClass("hidden");
       }

    };

    /* Fixed Header End */



    /* Smooth Scroll Start */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var blockId = $(this).data('scroll');
            blockOffSet = $(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffSet
        })
        
    });

    /* Smooth Scroll End */



    /* Smiles Changing Start */
    const womenBlock = $("#women"),             // принимает в себя блок с женскими улыбками
          menBlock = $("#men"),                 // принимает в себя блок с мужскими улыбками
          womenButton = $(".women-smile"),      // принимает в себя кнопку женских фото
          menButton = $(".man-smile");          // принимает в себя кнопку мужских фото
 

    // при нажатии на женскую клавишу, убирает клас у женского блока и даёт клас мужскому
    $(womenButton).on("click", function() {

        womenBlock.removeClass("hidden");
        menBlock.addClass("hidden");

    }); 
    

    // при нажатии на мужскую клавишу, убирает клас у мужского блока и даёт клас женскому
    $(menButton).on("click", function() {

        menBlock.removeClass("hidden");
        womenBlock.addClass("hidden");

    });
    /* Smiles Changing End */

    /* Path Resizing Start */
    let screenWidth = $(window).innerWidth();
        
    console.log(screenWidth);
    checkWidth(screenWidth);

    function checkWidth(screenWidth) {
        if (screenWidth <= 425) {
            $("#path").attr("d", "M190,0 L190,220 L0,260 L0,35 Z");
        } else if (screenWidth <= 768) {
            $("#path").attr("d", "M200,0 L200,330 L0,390 L0,65 Z");
        }
    };
    /* Path Resizing End */
});