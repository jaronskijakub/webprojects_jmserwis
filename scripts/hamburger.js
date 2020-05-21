/* OBSŁUGA HAMBURGERA I DODATKÓW */

$("div.hamburger ul i").on("click", () => {
  console.log("działa");
  $("div.hamburger").removeClass("active");
});

$("button.send").on("click", (e) => {
  e.preventDefault();

  let liFromTop = document.querySelector(".contact").offsetTop;

  $("body, html").animate({
    scrollTop: liFromTop,
  });
});

$("div.hamburger li.one").on("click", (e) => {
  e.preventDefault();

  $("div.hamburger").removeClass("active");

  let liFromTop = document.querySelector("header img").offsetTop;

  liFromTop += 1600;

  $("body, html").animate({
    scrollTop: liFromTop,
  });
});

$("div.hamburger li.two").on("click", (e) => {
  e.preventDefault();

  $("div.hamburger").removeClass("active");

  let liFromTop = document.querySelector("div.offerheader").offsetTop;

  $("body, html").animate({
    scrollTop: liFromTop,
  });
});

$("div.hamburger li.three").on("click", (e) => {
  e.preventDefault();

  $("div.hamburger").removeClass("active");

  let liFromTop = document.querySelector(".realizations h1").offsetTop;

  $("body, html").animate({
    scrollTop: liFromTop,
  });
});

$("div.hamburger li.four").on("click", (e) => {
  e.preventDefault();

  $("div.hamburger").removeClass("active");

  let liFromTop = document.querySelector(".contact").offsetTop;

  $("body, html").animate({
    scrollTop: liFromTop,
  });
});

$("main div.bgc button.check").on("click", (e) => {
  e.preventDefault();

  let liFromTop = document.querySelector(".contact").offsetTop;

  $("body, html").animate({
    scrollTop: liFromTop,
  });
});
