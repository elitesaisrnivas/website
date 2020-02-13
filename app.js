//script for on scroll change navigation styles

$(document).ready(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".fixed-top").css("background", "#fff");
            $(".fixed-top").addClass("navbarshadow");
            $(".navbar-brand").css("color", "#000");

            $(".nav-link").css("color", "#000");
            $(".navbar-icons .fa-facebook").css("color", "#000");
            $(".navbar-icons .fa-linkedin").css("color", "#000");
            $(".navbar-icons .fa-instagram").css("color", "#000");

        } else {
            $(".fixed-top").css("background", "transparent");
            $(".fixed-top").removeClass("navbarshadow");
            $(".navbar-brand").css("color", "#fff");

            $(".nav-link").css("color", "#fff");
            $(".navbar-icons .fa-facebook").css("color", "#fff");
            $(".navbar-icons .fa-linkedin").css("color", "#fff");
            $(".navbar-icons .fa-instagram").css("color", "#fff");

        }
    });
});


//script for toast

$(document).ready(function() {
    setTimeout(function() {
        $('.toast').toast('show');
    }, 3000);
    $('.toast').toast({
        delay: 4000
    });

    var date = new Date();
    var time = date.getHours();

    if (time < 12) {
        var morning = document.getElementById("greetings");
        morning.innerHTML = '<img src="./images/morning.png" width = "30px">&nbsp;&nbsp;Good morning!';
        morning.style.fontWeight = 'bold';
        morning.style.letterSpacing = '1px';
    }
    if (time >= 12) {
        var afternoon = document.getElementById("greetings");
        afternoon.innerHTML = '<img src = "./images/afternoon.png" width ="30px">&nbsp;&nbsp;Good afternoon!';
        afternoon.style.fontWeight = 'bold';
        afternoon.style.letterSpacing = '1px';
    }

    if (time >= 18) {
        var evening = document.getElementById("greetings");
        evening.style.fontWeight = 'bold';
        evening.style.letterSpacing = '1px';
        evening.innerHTML = '<img src="./images/evening.png" width = "30px" >&nbsp;&nbsp;Good evening!';
    }
    if (time == 23) {
        var night = document.getElementById("greetings");
        night.innerHTML = '<img src = "./images/night.png" width = "30px" >&nbsp;&nbsp;Good night!';
        night.style.fontWeight = 'bold';
        night.style.letterSpacing = '1px';
    }
});

//scrpit for skill bar

$(document).ready(function() {

    var skillsDiv = jQuery('#skills');

    jQuery(window).on('scroll', function() {
        var winT = jQuery(window).scrollTop(),
            winH = jQuery(window).height(),
            skillsT = skillsDiv.offset().top;
        if (winT + winH > skillsT) {
            jQuery('.skillbar').each(function() {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 3000);
            });
        }
    });
});

//script for color pannel

function toggleSideBar() {
    document.getElementById('sidebar').classList.toggle('active');
}
$(document).ready(function() {

    $('.btn1').click(function() {
        $("h1, h3, h4, h5").css("color", "saddlebrown");
    });
    $('.btn2').click(function() {
        $("h1, h3, h4, h5").css("color", "slategrey");
    });
    $('.btn3').click(function() {
        $("h1, h3, h4, h5").css("color", "teal");
    });
    $('.btn4').click(function() {
        $("h1, h3, h4, h5").css("color", "yellowgreen");
    });
    $('.btn5').click(function() {
        $("h1, h3, h4, h5").css("color", "violet");
    });
    $('.btn6').click(function() {
        $("h1, h3, h4, h5").css("color", "tomato");
    });
});

//script for animation using gsap

gsap.from(".nav-link", { duration: 5, opacity: 0, y: "random(-200, 200)", stagger: 0.24 });
gsap.from(".navbar-brand", { duration: 8, opacity: 0, scale: 0.3, ease: "bounce" });