$(document).ready(()=>{
    function redirectTO(new_link){
        window.location.href = new_link;
    }
    function scrollToSection(selector) {
        $('html, body').animate({
            scrollTop: $(selector).offset().top
        }, 500);
    }

    $(".home").each(function(index, element){
        $(element).click(()=>{redirectTO('index.html')});
    });
    $(".service").each(function(index, element){
        $(element).click(()=>{redirectTO('index.html')});
    });
    $(".images").each(function(index, element){
        $(element).click(()=>{redirectTO('index.html')});
    });
    $(".contact").each(function(index, element){
        $(element).click(()=>{scrollToSection('#contact-section')});
    });
    $(".magyar").each(function(index, element){
        $(element).click(()=>{redirectTO('#')});
    })

})