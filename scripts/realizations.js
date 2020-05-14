/* OBSŁUGA REALIZACJI */

let left = document.querySelector(".fa-chevron-circle-left");
let right = document.querySelector(".fa-chevron-circle-right");

let image = document.querySelector("div.imgRealizations");
let desc = document.querySelector("div.desc");

let head = document.querySelector("h1.imgDescription");
let p = document.querySelector("div.desc p");

let imageCounter = 1;
let howManyImg = 11;

//Zawartości zdjęć na stronie

let head1 = "GDPA, Gdańsk";
let p1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui rem soluta possimus, suscipit eius dicta totam beatae rerum voluptate fugit quas vitae ipsam dolore id ab.Iusto, eligendi pariatur.";

let head2 = "Posesja prywatna, Górowychy";
let p2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui rem soluta possimus, suscipit eius dicta totam beatae rerum voluptate fugit quas vitae ipsam dolore id ab.Iusto, eligendi pariatur.";

let head3 = "Biedronka, Słupsk";
let p3 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui rem soluta possimus, suscipit eius dicta totam beatae rerum voluptate fugit quas vitae ipsam dolore id ab.Iusto, eligendi pariatur.";

let head4 = "Galeria Malborska, Malbork";
let p4 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, qui rem soluta possimus, suscipit eius dicta totam beatae rerum voluptate fugit quas vitae ipsam dolore id ab.Iusto, eligendi pariatur.";

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
};

if (imageCounter == 1) {
  left.style.display = "none";
  desc.classList.toggle("active");
}

let arrow = () => {
  if (imageCounter == 1) {
    left.style.display = "none";
    desc.classList.add("active");
  } else if (imageCounter > 1 && imageCounter < 12) {
    left.style.display = "block";
    right.style.display = "block";
    desc.classList.remove("active");
  }

  if (imageCounter == howManyImg) {
    right.style.display = "none";
  }
};

right.addEventListener("click", (e) => {
  imageCounter++;
  arrow();
  image.style.backgroundImage = `url(./img/realizations/${imageCounter}.jpg)`;
  description();
  console.clear();
  console.log(imageCounter);
});

left.addEventListener("click", (e) => {
  imageCounter--;
  arrow();
  image.style.backgroundImage = `url(./img/realizations/${imageCounter}.jpg)`;
  description();
  console.clear();
  console.log(imageCounter);
});
