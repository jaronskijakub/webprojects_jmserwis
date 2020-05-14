/* COUNTER */

let exp = 1;
let comp = 1;
let happyclients = 1;
let warr = 1;

let counter = () => {
  let counters = [...document.querySelectorAll("p.counter")];

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
};

howManyCount = 0;

let counterInterval = () => {
  let scrollPosition = window.scrollY;
  let h1CountPosition = document.querySelector("div.realizations h1").offsetTop;

  if (scrollPosition > h1CountPosition + 500 && howManyCount < 1) {
    howManyCount++;
    setInterval(counter, 62);
  }
};

document.addEventListener("scroll", counterInterval);
