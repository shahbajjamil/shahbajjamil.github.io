// loading screen
function stars() {
  let count = 21;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + "px";
    star.style.width = 1 + "px";
    star.style.height = 50 + h + "px";
    star.style.animationDuration = duration + "s";

    scene.appendChild(star);
    i++;
  }
}
stars();
function counter() {
  var count = setInterval(function () {
    var c = parseInt($(".counter").text());
    $(".counter").text((++c).toString());
    if (c == 100) {
      clearInterval(count);
      $(".counter").addClass("hide");
      $(".preloader").addClass("active");
      document.body.classList.remove("noscroll");
      document.documentElement.classList.remove("noscroll");
    }
  }, 30);
}
counter();
// !loading screen

//  for typing effect
const TypeWriter = function (txtElement, words, wait = 2500) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

TypeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;

  const fullTxt = this.words[current];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;

    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;

    this.wordIndex++;

    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", inti);

function inti() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}
// ! for typing effect

// nav bar sliding
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  function animationNav() {
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.75
        }s`;
      }
    });
  }
  burger.addEventListener("click", function (event) {
    // Toggle nav
    nav.classList.toggle("nav-active");
    // Animate Links
    animationNav();
    // burger animation
    burger.classList.toggle("open");
    document.body.classList.toggle("noscroll");
    document.documentElement.classList.toggle("noscroll");
  });
  nav.addEventListener("click", function (event) {
    nav.classList.remove("nav-active");
    animationNav();
    burger.classList.remove("open");
    document.body.classList.remove("noscroll");
    document.documentElement.classList.remove("noscroll");
  });
};
navSlide();
// ! nav bar sliding

// button move to top
btnTop = document.querySelector("#movetop");
btnTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};
// ! button move to top

// WhatsApp toggle
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
  navigator.userAgent
);
var whatsapp = document.getElementById("wp");

if (isMobile) {
  whatsapp.innerHTML = '<i id="g" class="fab fa-whatsapp"></i><p>WhatsApp</p>';
  whatsapp.href =
    "https://wa.me/+918252643736/?text=Hi, just saw your webpage!";
} else {
  whatsapp.innerHTML =
    '<i id="g" class="fab fa-whatsapp"></i><p>WhatsApp Web</p>';
  whatsapp.href =
    "https://api.whatsapp.com/send?phone=+918252643736&text=Hi, Just saw your Webpage!";
}
// !WhatsApp toggle

// My Skill
function skill() {
  const skillData = [
    ["Web Design", 70],
    ["HTML", 80],
    ["CSS", 50],
    ["JavaScript", 20],
    ["Flutter / Dart", 50],
    ["C / C++", 90],
  ];
  const skills = document.querySelector(".MySkill");
  for (let i = 0; i < skillData.length; i++) {
    skills.innerHTML +=
      "<h6>" +
      skillData[i][0] +
      "<span>" +
      skillData[i][1] +
      "%</span></h6>" +
      '<div class="progress">' +
      '<div class="bar" style="width: ' +
      skillData[i][1] +
      '%;"></div></div>';
  }
}
skill();
// !My Skill

// My Hobbies
function hobbies() {
  const hobbyData = [
    ["Coding", "code"],
    ["Music", "music"],
    ["Traveling", "plane"],
    ["Swimming", "swimming-pool"],
    ["Painting", "paint-brush"],
    ["learning", "graduation-cap"],
    ["Photography", "camera"],
    ["Driving", "motorcycle"],
  ];

  const hobby = document.querySelector(".box");
  for (let i = 0; i < hobbyData.length; i++) {
    hobby.innerHTML +=
      '<div class="hobbies-box"><span class="fa fa-' +
      hobbyData[i][1] +
      ' bg-secondary"></span><h5 class="flex">' +
      hobbyData[i][0] +
      "</h5></div>";
  }
}
hobbies();
// !My Hobbies
