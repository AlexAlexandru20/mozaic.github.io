$(document).ready(() => {
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    if (getCookie("cookies_accepted") !== "true") {
        $("#cookie-banner").css("display", "flex").fadeIn(500);
    }

    $("#accept-btn").click(() => {
        $("#cookie-banner").fadeOut(500, () => {
            document.cookie =
                "cookies_accepted=true; path=/; max-age=" + 60 * 60 * 24 * 30.44 * 6;
            $("#cookie-banner").remove();
        });
    });

    $("#close-btn").click(() => {
        $("#cookie-banner").fadeOut(500);
    });

    $("#open-menu").click(function () {
        $(".mob-dropdown").toggleClass("open");
        if ($(".mob-dropdown").hasClass("open")) {
            $("#openMenu").attr("src", "static/images/close-icon.png");
        } else {
            $("#openMenu").attr("src", "static/images/menu.png");
        }
    });

    $(window).scroll(function () {
        if (checkWidth() === 'lg') {
            if ($(this).scrollTop() > 50) {
                $(".top-container").addClass("scrolled");
            } else {
                $(".top-container").removeClass("scrolled");
            }
        } else {
            if ($(this).scrollTop() > 5) {
                $(".top-container").addClass("scrolled");
            } else {
                $(".top-container").removeClass("scrolled");
            }
        }


        $(".slider").each(function () {
            var $slider = $(this);
            var sliderTop = $slider.offset().top;
            var sliderHeight = $slider.outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (
                !$slider.hasClass("animated") &&
                windowBottom >= sliderTop + sliderHeight
            ) {
                var procentaj = $slider.data("width");
                var $percentageElement = $slider.closest(".sec").find(".sec-perc");

                $slider.css("width", procentaj + "%");

                var currentPercent = 0;
                var interval = setInterval(function () {
                    if (currentPercent <= procentaj) {
                        $percentageElement.text(currentPercent + "%");
                        currentPercent++;
                    } else {
                        clearInterval(interval);
                    }
                }, 25);

                $slider.addClass("animated");
            }
        });

    });


    $(".phonecall").each(function (index, element) {
        $(element).click(() => {
            window.location.href = "tel:+40784044765";
        });
    });

    function scrollToSection(selector) {
        $("html, body").animate(
            {
                scrollTop: $(selector).offset().top,
            },
            500
        );
    }

    function redirectTO(selector) {
        window.location.href = selector;
    }

    // Event handlers
    $(".home").each(function (index, element) {
        $(element).click(() => {
            scrollToSection("#startSection");
        });
    });
    $(".service").each(function (index, element) {
        $(element).click(() => {
            scrollToSection("#services");
        });
    });
    $(".images").each(function (index, element) {
        $(element).click(() => {
            scrollToSection("#photos-section");
        });
    });
    $(".contact").each(function (index, element) {
        $(element).click(() => {
            scrollToSection("#contact-section");
        });
    });
    $(".magyar").each(function (index, element) {
        $(element).click(() => {
            redirectTO("index-hu.html");
        });
    });
    $(".ro").each(function (index, element) {
        $(element).click(() => {
            redirectTO("index.html");
        });
    });
    $("#start").click(() => scrollToSection("#topSection"));

    const myCarouselElement = document.querySelector('#carousel');

    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false
    })

    lists = {
        'granit': [1, 2, 3, 10, 11, 12, 13, 14],
        'mozaic': [1, 2, 3, 4],
        'blat': [1, 10, 11],
        'renovari': [1, 2, 3, 4, 5, 6, 7, 10, 11]
    };

    const imgContainerSM = $("#carousel-inner");
    const imgContainerLG = $("#galery-lg");

    let currentIndex = 1;

    if (checkWidth() === 'sm') {
        $(imgContainerSM).empty();
        showImagesSM(lists['granit'], 'granit');
    } else {
        $(imgContainerLG).empty();
        showImagesLG(lists['granit'], 'granit');
    }

    function checkWidth() {
        let screen_width = screen.width;

        if (screen_width <= 863) {
            return 'sm';
        } else {
            return 'lg';
        }
    }


    $('.dir-btn').click(function () {

        $('.dir-btn').removeClass('link-activ');
        $(this).addClass('link-activ');

        currentIndex = 1;

        let dir_name = $(this).attr('id');

        let numbers = lists[dir_name];

        if (checkWidth() === 'sm') {
            $(imgContainerSM).empty();
            showImagesSM(numbers, dir_name);
        } else {
            $(imgContainerLG).empty();
            showImagesLG(numbers, dir_name);
        }
    });

    function showImagesLG(numbers, dir_name) {
        $(numbers).each(function (index, num) {
            if (currentIndex % 3 == 1) {
                let new_row = $("<div>")
                    .addClass('row');
                imgContainerLG.append(new_row);
            }

            let img_container = $("<div>")
                .addClass('col');

            let img = $("<img>")
                .attr('src', `static/images/${dir_name}/${num}.png`)
                .attr('alt', 'All images')
                .addClass('imgFade');

            img_container.append(img);
            currentIndex++;

            $(".row").last().append(img_container);
        });
    }

    function showImagesSM(numbers, dir_name) {
        $(numbers).each(function (index, num) {
            let img_container = $("<div>")
                .addClass('carousel-item');

            if (index === 0) {
                img_container.addClass('active');
            }

            let new_class = num < 10 ? 'oriz' : 'vert';

            let img = $("<img>")
                .attr('src', `static/images/${dir_name}/${num}.png`)
                .attr('alt', 'All images')
                .addClass(`d-block w-100 ${new_class}`);

            img_container.append(img);

            imgContainerSM.append(img_container);
        });
    }
});
