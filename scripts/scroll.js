/*SCROLL FROM TOP WITH USE jQuery */

$(".liAboutUs").on("click", (e) => {
  e.preventDefault();

  let liFromTop = document.querySelector("header img").offsetTop;

  liFromTop += 200;

  // $('header img').css({
  //     display: "none"
  // });

  $("body, html").animate(
    {
      scrollTop: liFromTop,
    },
    800
  );
});

$(".liOffer").on("click", (e) => {
  e.preventDefault();

  let liFromTop = document.querySelector("div.offerheader").offsetTop;

  $("body, html").animate(
    {
      scrollTop: liFromTop,
    },
    800
  );
});

$(".liRealizations").on("click", (e) => {
  e.preventDefault();

  let liFromTop = document.querySelector(".realizations h1").offsetTop;

  liFromTop -= 50;

  $("body, html").animate(
    {
      scrollTop: liFromTop,
    },
    800
  );
});

$(".liContact").on("click", (e) => {
  e.preventDefault();

  let liFromTop = document.querySelector(".contact").offsetTop;

  liFromTop -= 50;

  $("body, html").animate(
    {
      scrollTop: liFromTop,
    },
    800
  );
});

$(".fa-arrow-circle-up").on("click", (e) => {
  e.preventDefault();

  $("body, html").animate(
    {
      scrollTop: 0,
    },
    2000
  );
});

$("li.mobileHamburger").on("click", () => {
  $("div.hamburger").addClass("active");
});
