//Animacje

let whatwedo = () => {
  if (check) return;

  let scrollPosition = window.scrollY;
  let logoFromTop = document.querySelector(".whatyouwant img").offsetTop;

  if (scrollPosition > 2 * logoFromTop) {
    document.querySelector(".whatwedo").classList.add("active");
    document.querySelector(".familycompany").classList.add("active");
  }

  if (scrollPosition < 10) {
    document.querySelector(".whatwedo").classList.remove("active");
    document.querySelector(".familycompany").classList.remove("active");
  }
};

let whatwedoOpa = () => {
  if (check) return;

  let scrollPosition = window.scrollY;
  let bgcHeight = document.querySelector(".bgc").offsetHeight;
  let bgcFromTop = document.querySelector(".bgc").offsetTop;
  let windowHeight = window.innerHeight;

  if (scrollPosition > bgcFromTop + bgcHeight - windowHeight) {
    document.querySelector(".what").classList.add("opa");
  }

  if (scrollPosition < bgcFromTop + bgcHeight / 2 - windowHeight) {
    document.querySelector(".what").classList.remove("opa");
  }
};

let whatWeOffer = () => {
  // if (check) return

  let scrollPosition = window.scrollY;
  let firstPage = window.innerHeight;
  //services
  let services = document.querySelector("div.services");
  let servicesFromTop = services.offsetTop;
  //windows
  let windows = document.querySelector("div.windows");
  let windowsFromTop = windows.offsetTop;
  //blinds
  let blinds = document.querySelector("div.blinds");
  let blindsFromTop = blinds.offsetTop;
  //facades
  let facades = document.querySelector("div.facades");
  let facadesFromTop = facades.offsetTop;
  //mosqutionets
  let mosqutionets = document.querySelector("div.mosqutionets");
  let mosqutionetsFromTop = mosqutionets.offsetTop;

  if (scrollPosition > servicesFromTop - firstPage / 1.25) {
    services.classList.add("active");
  }
  if (scrollPosition > windowsFromTop - firstPage / 1.25) {
    windows.classList.add("active");
  }
  if (scrollPosition > blindsFromTop - firstPage / 1.25) {
    blinds.classList.add("active");
  }
  if (scrollPosition > facadesFromTop - firstPage / 1.25) {
    facades.classList.add("active");
  }
  if (scrollPosition > mosqutionetsFromTop - firstPage / 1.25) {
    mosqutionets.classList.add("active");
  }
};

let navActive = () => {
  if (check) return;

  let scrollPosition = window.scrollY;
  let nav = document.querySelector("nav");
  let aside = document.querySelector("aside");

  let headerHeight = nav.offsetHeight;

  if (scrollPosition > headerHeight) {
    nav.classList.add("active");
    aside.classList.add("active");
  } else if (scrollPosition < headerHeight) {
    nav.classList.remove("active");
    aside.classList.remove("active");
  }
};

if (!check) {
  console.log("wykonane nasluchwianie");
  document.addEventListener("scroll", whatwedo);
  document.addEventListener("scroll", whatwedoOpa);
  document.addEventListener("scroll", navActive);
}

document.addEventListener("scroll", whatWeOffer);
