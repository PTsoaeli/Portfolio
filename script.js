$(document).ready(function(){
    $(window).scroll(function(){

        //Navigation change
        if(this.scrollY > 30){
            $('.navi').addClass("sticky");
            $('nav.navi ul li a').addClass("active");
            $('.logo').addClass("active");
            $('.logo span').addClass("active");
            $('nav.navi .menu-btn i').addClass('white');
        }else{
            $('.navi').removeClass("sticky");
            $('nav.navi ul li a').removeClass("active");
            $('.logo').removeClass("active");
            $('.logo span').removeClass("active");
            $('nav.navi .menu-btn i').removeClass('white');
        }

        //Go to top button
        if(this.scrollY > 700){
            $('.gotobtn').addClass('active');
        }else{
            $('.gotobtn').removeClass('active');
        }

        var top = $(window).scrollTop();

         if(top >= 60)
             {
                 $("header").addClass('sec');
             }
         else if($("header").hasClass('sec'))
             {
                 $("header").removeClass('sec')
             }
    });

    //Typing object
    var typed = new Typed('.typing',{
        strings: ['Data Analyst','Data Scientist',"Microsoft RPA"
        ,"Senior Administrator", "Technical Consultant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    function isVisible(element) {
        let elementBox = element.getBoundingClientRect();
        let distanceFromTop = -200; 

        if(elementBox.top - window.innerHeight < distanceFromTop) {
            return true;
        } else {
            return false;
        }
    }

    function scanDocument() {
        let sectionList = document.querySelectorAll('.hidden');
        sectionList.forEach(function(section) {
            if(isVisible(section)) {
                section.classList.remove('hidden');
            };
        });
    }

    document.addEventListener("scroll", scanDocument);

});
