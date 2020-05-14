//Sprawdzenie czy strona uruchamiana jest na urządzeniu mobilnym.
//Jeśli tak, wiele skryptow nie bedzie wykonana.

window.mobileAndTabletcheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

let check = window.mobileAndTabletcheck();

let setOffAnimation = () => {
    let whatWeDo = document.querySelector('.whatwedo');
    let divOffer = [...document.querySelectorAll('main div.offer div')];

    whatWeDo.classList.toggle('active');

    // divOffer.forEach(div => div.classList.toggle('active'));
}

if (check) {
    setOffAnimation();
}



//Animacje


let whatwedo = () => {

    if (check) return

    let scrollPosition = window.scrollY;
    let logoFromTop = document.querySelector('.whatyouwant img').offsetTop;

    if (scrollPosition > 2 * logoFromTop) {
        document.querySelector('.whatwedo').classList.add('active');
        document.querySelector('.familycompany').classList.add('active');
    }

    if (scrollPosition < 10) {
        document.querySelector('.whatwedo').classList.remove('active');
        document.querySelector('.familycompany').classList.remove('active');

    }
}

let whatwedoOpa = () => {

    if (check) return

    let scrollPosition = window.scrollY;
    let bgcHeight = document.querySelector('.bgc').offsetHeight;
    let bgcFromTop = document.querySelector('.bgc').offsetTop;
    let windowHeight = window.innerHeight;

    if (scrollPosition > bgcFromTop + bgcHeight - windowHeight) {
        document.querySelector('.what').classList.add('opa');
    }

    if (scrollPosition < bgcFromTop + (bgcHeight / 2) - windowHeight) {
        document.querySelector('.what').classList.remove('opa');
    }
}

let whatWeOffer = () => {

    // if (check) return

    let scrollPosition = window.scrollY;
    let firstPage = window.innerHeight;
    //services
    let services = document.querySelector('div.services');
    let servicesFromTop = services.offsetTop;
    //windows
    let windows = document.querySelector('div.windows');
    let windowsFromTop = windows.offsetTop;
    //blinds
    let blinds = document.querySelector('div.blinds');
    let blindsFromTop = blinds.offsetTop;
    //facades
    let facades = document.querySelector('div.facades');
    let facadesFromTop = facades.offsetTop;
    //mosqutionets
    let mosqutionets = document.querySelector('div.mosqutionets');
    let mosqutionetsFromTop = mosqutionets.offsetTop;


    if (scrollPosition > servicesFromTop - firstPage / 1.25) {
        services.classList.add('active');
    }
    if (scrollPosition > windowsFromTop - firstPage / 1.25) {
        windows.classList.add('active');
    }
    if (scrollPosition > blindsFromTop - firstPage / 1.25) {
        blinds.classList.add('active');
    }
    if (scrollPosition > facadesFromTop - firstPage / 1.25) {
        facades.classList.add('active');
    }
    if (scrollPosition > mosqutionetsFromTop - firstPage / 1.25) {
        mosqutionets.classList.add('active');
    }


}

let navActive = () => {

    if (check) return

    let scrollPosition = window.scrollY;
    let nav = document.querySelector('nav');
    let aside = document.querySelector('aside');

    let headerHeight = nav.offsetHeight;

    if (scrollPosition > headerHeight) {
        nav.classList.add('active');
        aside.classList.add('active');
    } else if (scrollPosition < headerHeight) {
        nav.classList.remove('active');
        aside.classList.remove('active');
    }
}

if (!check) {
    console.log('wykonane nasluchwianie')
    document.addEventListener("scroll", whatwedo);
    document.addEventListener("scroll", whatwedoOpa);
    document.addEventListener("scroll", navActive);
}

document.addEventListener("scroll", whatWeOffer);

/* COUNTER */

let exp = 1;
let comp = 1;
let happyclients = 1;
let warr = 1;

let counter = () => {

    let counters = [...document.querySelectorAll('p.counter')];

    counters[0].textContent = exp;
    counters[1].textContent = comp;
    counters[2].textContent = happyclients;
    counters[3].textContent = warr;

    if (exp < 29) {
        exp++;
    }
    if (comp < 2) {
        comp++;
    }
    if (happyclients < 67) {
        happyclients++;
    }
    if (warr < 24) {
        warr++;
    }

}

howManyCount = 0;

let counterInterval = () => {
    let scrollPosition = window.scrollY;
    let h1CountPosition = document.querySelector('div.realizations h1').offsetTop;

    if ((scrollPosition > h1CountPosition + 500) && (howManyCount < 1)) {
        howManyCount++;
        setInterval(counter, 62);
    }
}

document.addEventListener("scroll", counterInterval);



/*SCROLL FROM TOP WITH USE jQuery */


$('.liAboutUs').on("click", (e) => {
    e.preventDefault();

    let liFromTop = document.querySelector('header img').offsetTop;

    liFromTop += 200;

    // $('header img').css({
    //     display: "none"
    // });

    $('body, html').animate({
        scrollTop: liFromTop
    }, 800);

});

$('.liOffer').on("click", (e) => {
    e.preventDefault();

    let liFromTop = document.querySelector('div.offerheader').offsetTop;

    $('body, html').animate({
        scrollTop: liFromTop
    }, 800)
})

$('.liRealizations').on("click", (e) => {
    e.preventDefault();

    let liFromTop = document.querySelector('.realizations h1').offsetTop;

    liFromTop -= 50;

    $('body, html').animate({
        scrollTop: liFromTop
    }, 800)
})

$('.liContact').on("click", (e) => {
    e.preventDefault();

    let liFromTop = document.querySelector('.contact').offsetTop;

    liFromTop -= 50;

    $('body, html').animate({
        scrollTop: liFromTop
    }, 800)
});

$('.fa-arrow-circle-up').on("click", e => {
    e.preventDefault();

    $('body, html').animate({
        scrollTop: 0
    }, 2000)
})


$('li.mobileHamburger').on("click", () => {
    $('div.hamburger').addClass('active');
})


/* OBSŁUGA HAMBURGERA I DODATKÓW */

$('div.hamburger ul i').on("click", () => {
    console.log('działa');
    $('div.hamburger').removeClass('active');
})

$('button.send').on("click", (e) => {

    e.preventDefault();

    let liFromTop = document.querySelector('.contact').offsetTop;

    $('body, html').animate({
        scrollTop: liFromTop
    })
})

$('div.hamburger li.one').on("click", (e) => {
    e.preventDefault();

    $('div.hamburger').removeClass('active');

    let liFromTop = document.querySelector('header img').offsetTop;

    liFromTop += 200;

    $('body, html').animate({
        scrollTop: liFromTop
    })
})

$('div.hamburger li.two').on("click", (e) => {
    e.preventDefault();

    $('div.hamburger').removeClass('active');

    let liFromTop = document.querySelector('div.offerheader').offsetTop;

    $('body, html').animate({
        scrollTop: liFromTop
    })
})

$('div.hamburger li.three').on("click", (e) => {
    e.preventDefault();

    $('div.hamburger').removeClass('active');

    let liFromTop = document.querySelector('.realizations h1').offsetTop;

    $('body, html').animate({
        scrollTop: liFromTop
    })
})

$('div.hamburger li.four').on("click", (e) => {
    e.preventDefault();

    $('div.hamburger').removeClass('active');

    let liFromTop = document.querySelector('.contact').offsetTop;

    $('body, html').animate({
        scrollTop: liFromTop
    })
})


/* OBSŁUGA REALIZACJI */

let left = document.querySelector('.fa-chevron-circle-left');
let right = document.querySelector('.fa-chevron-circle-right');

let image = document.querySelector('div.imgRealizations');
let desc = document.querySelector('div.desc');

let head = document.querySelector('h1.imgDescription');
let p = document.querySelector('div.desc p');

let imageCounter = 1;
let howManyImg = 11;

//Zawartości zdjęć na stronie

let head1 = "GDPA, Gdańsk";
let p1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui rem soluta possimus, suscipit eius dicta totam beatae rerum voluptate fugit quas vitae ipsam dolore id ab.Iusto, eligendi pariatur.";

let head2 = "Posesja prywatna, Górowychy";
let p2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui rem soluta possimus, suscipit eius dicta totam beatae rerum voluptate fugit quas vitae ipsam dolore id ab.Iusto, eligendi pariatur.";

let head3 = "Biedronka, Słupsk";
let p3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui rem soluta possimus, suscipit eius dicta totam beatae rerum voluptate fugit quas vitae ipsam dolore id ab.Iusto, eligendi pariatur.";

let head4 = "Galeria Malborska, Malbork";
let p4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui rem soluta possimus, suscipit eius dicta totam beatae rerum voluptate fugit quas vitae ipsam dolore id ab.Iusto, eligendi pariatur.";

let description = () => {
    if (imageCounter == 1) {
        head.textContent = head1;
        p.textContent = p1;
    } else if (imageCounter == 2) {
        head.textContent = head2;
        p.textContent = p2;
    } else if (imageCounter == 3) {
        head.textContent = head3;
        p.textContent = p3;
    } else if (imageCounter == 4) {
        head.textContent = head4;
        p.textContent = p4;
    }
}


if (imageCounter == 1) {
    left.style.display = "none";
    desc.classList.toggle('active');
}

let arrow = () => {
    if (imageCounter == 1) {
        left.style.display = "none";
        desc.classList.add('active');
    } else if ((imageCounter > 1) && (imageCounter < 12)) {
        left.style.display = "block";
        right.style.display = "block";
        desc.classList.remove('active');
    }

    if (imageCounter == howManyImg) {
        right.style.display = "none";
    }
}

right.addEventListener("click", (e) => {
    imageCounter++;
    arrow();
    image.style.backgroundImage = `url(./img/realizations/${imageCounter}.jpg)`;
    description();
    console.clear();
    console.log(imageCounter);
})

left.addEventListener("click", (e) => {
    imageCounter--;
    arrow();
    image.style.backgroundImage = `url(./img/realizations/${imageCounter}.jpg)`;
    description();
    console.clear();
    console.log(imageCounter);
})