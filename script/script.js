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
const burger = document.querySelector(".burger");
const navSlide = () => {
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  function animationNav() {
    navLinks.forEach((link, index) => {
      if (burger.classList.contains("open")) {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 6 + 0.1
        }s`;
      } else {
        link.style.animation = "";
      }
    });
  }
  burger.addEventListener("click", function () {
    // Toggle nav
    nav.classList.toggle("nav-active");
    // burger animation
    burger.classList.toggle("open");
    // Animate Links
    animationNav();
    // document.body.classList.toggle("noscroll");
    // document.documentElement.classList.toggle("noscroll");
  });
  nav.addEventListener("click", function () {
    nav.classList.remove("nav-active");
    burger.classList.remove("open");
    animationNav();
    // document.body.classList.remove("noscroll");
    // document.documentElement.classList.remove("noscroll");
  });
  // for closing nav on clicking on body
  document.body.addEventListener("click", function (e) {
    if (e.target != burger && e.target != burger.children[0]) {
      nav.classList.remove("nav-active");
      burger.classList.remove("open");
      animationNav();
    }
  });
};
navSlide();
// ! nav bar sliding

// button move to top
const btnTop = document.querySelector("#movetop");

const navLinksAll = document.querySelectorAll(".nav-links li a");
const homeNav = document.getElementById("HOME-NAV");
const aboutNav = document.getElementById("ABOUT-NAV");
const factNav = document.getElementById("FACT-NAV");
const repoNav = document.getElementById("REPO-NAV");
const workNav = document.getElementById("WORK-NAV");
const contactNav = document.getElementById("CONTACT-NAV");
btnTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
window.onscroll = function () {
  burger.classList.toggle(
    "stickyToggel",
    window.scrollY < 450 && window.scrollY > 40
  );

  var positionTop = document.documentElement.scrollTop;
  // console.log(positionTop);
  if (positionTop > 4144 - 236) {
    //4144
    navLinksAll.forEach((all) => all.classList.remove("active"));
    contactNav.classList.add("active");
  } else if (positionTop > 3439 - 236) {
    //3439
    navLinksAll.forEach((all) => all.classList.remove("active"));
    workNav.classList.add("active");
  } else if (positionTop > 3039 - 236) {
    //3039
    navLinksAll.forEach((all) => all.classList.remove("active"));
    repoNav.classList.add("active");
  } else if (positionTop > 1950 - 236) {
    //1950
    navLinksAll.forEach((all) => all.classList.remove("active"));
    factNav.classList.add("active");
  } else if (positionTop > 477 - 236) {
    //477
    navLinksAll.forEach((all) => all.classList.remove("active"));
    aboutNav.classList.add("active");
  } else if (positionTop > 0) {
    navLinksAll.forEach((all) => all.classList.remove("active"));
    homeNav.classList.add("active");
  }

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
    { name: "Web Design", percentage: 70 },
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 50 },
    { name: "JavaScript", percentage: 20 },
    { name: "Flutter / Dart", percentage: 50 },
    { name: "C / C++", percentage: 90 },
    // { name: "Python", percentage: 43 },
  ];
  const skills = document.querySelector(".MySkill");
  // for (let i = 0; i < skillData.length; i++) {
  for (const item of skillData) {
    skills.innerHTML +=
      "<h6>" +
      item.name +
      "<span>" +
      item.percentage +
      "%</span></h6>" +
      '<div class="progress">' +
      '<div class="bar" style="width: ' +
      item.percentage +
      '%;"></div></div>';
  }
}
skill();
// !My Skill

// My Hobbies
function hobbies() {
  const hobbyData = [
    { name: "Coding", icon: "code" },
    { name: "Music", icon: "music" },
    { name: "Traveling", icon: "plane" },
    { name: "Swimming", icon: "swimming-pool" },
    { name: "Painting", icon: "paint-brush" },
    { name: "learning", icon: "graduation-cap" },
    { name: "Photography", icon: "camera" },
    { name: "Driving", icon: "motorcycle" },
  ];

  const hobby = document.querySelector(".box");
  // for (let i = 0; i < hobbyData.length; i++) {
  for (const item of hobbyData) {
    hobby.innerHTML +=
      '<div class="hobbies-box"><span class="fa fa-' +
      item.icon +
      ' bg-secondary"></span><h5 class="flex">' +
      item.name +
      "</h5></div>";
  }
}
hobbies();
// !My Hobbies

// My Work

const appData = [
  {
    name: "WhatsApp-UI-Clone",
    image: "image/mywork/wp.gif",
    disc:
      "Simple UI clone of WhatsApp,<br/> This app is build with flutter.<br/>+ loading screen.<br/> More update will coming soon",
    getLink: "download/whatsApp-UI-Clone(1.0.1).apk",
    moreLink: "#morelink",
    notify: "Version 1.0.1 Release",
  },
  {
    name: "Tap 2 Chat",
    image: "image/mywork/t2c.gif",
    disc:
      "Make life more simple,<br/>Send message on WhatsApp without saving phone number,<br/>This app is build with flutter. More update will coming soon",
    getLink: "download/Tap2Chat.apk",
    moreLink: "#morelink",
    notify: "Version 1.0.0 Release",
  },
];
const webData = [
  {
    name: "Eid Mubarak",
    image: "image/mywork/Eid.png",
    disc:
      "A simple Web based Greating for you and your friends,<br/>Build with HTML, CSS and Js.",
    getLink: "https://shahbajjamil.github.io/Eid-Mubarak-2020/",
    moreLink: "#morelink",
  },
  {
    name: "Ramadan Mubarak",
    image: "image/mywork/Ramadan.png",
    disc:
      "A simple Web based Greating for you and your friends,<br/>Build with HTML, CSS and Js.",
    getLink: "https://shahbajjamil.github.io/Ramadan-Mubarak-2020/",
    moreLink: "#morelink",
  },
];
const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".mywork");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 5000;
let index = 0;

const myworkBuild = document.querySelector(".mywork");

const allWork = document.getElementById("allWork");
const appWork = document.getElementById("appWork");
const webWork = document.getElementById("webWork");

function AllWorkBuild() {
  myworkBuild.innerHTML = "";
  for (
    let i = 0;
    i < (appData.length < webData.length ? webData.length : appData.length);
    i++
  ) {
    if (i < appData.length) {
      myworkBuild.innerHTML +=
        '<div class="slide app"><div class="appWork"><div class="appSS">' +
        "<img src=" +
        appData[i].image +
        " />" +
        '</div><div class="appContent">' +
        "<h2>" +
        appData[i].name +
        "</h2>" +
        '<div class="shiny"><span>' +
        appData[i].notify +
        "</span></div> " +
        "<p>" +
        appData[i].disc +
        "</p>" +
        '<div class="button">' +
        "<a href=" +
        appData[i].getLink +
        " download>Get Apk</a>" +
        "<a href=" +
        appData[i].moreLink +
        ">More Info</a>" +
        "</div></div></div></div>";
    }
    if (i < webData.length) {
      myworkBuild.innerHTML +=
        '<div class="slide web"><div class="webWork"><div class="webSS">' +
        "<img src=" +
        webData[i].image +
        " />" +
        '</div><div class="webContent">' +
        "<h2>" +
        webData[i].name +
        "</h2>" +
        "<p>" +
        webData[i].disc +
        "</p>" +
        '<div class="button">' +
        "<a href=" +
        webData[i].getLink +
        ' target="_blank" rel="noopener noreferrer">View Link</a>' +
        "<a href=" +
        webData[i].moreLink +
        ">More Info</a>" +
        "</div></div></div></div>";
    }
  }
}

window.onload = function () {
  AllWorkBuild();
  runSlide();
};

function runSlide() {
  let slides = document.querySelectorAll(".slide");
  let slideId;
  // const slideWidth = slides[index].clientWidth;
  const slideWidth = slides[index].getBoundingClientRect().width;

  // console.log(slideWidth);

  // moving slide in every 3s
  const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, interval);
    // console.log(slideId);
  };

  const moveToNextSlide = () => {
    if (index >= slides.length - 1) {
      index = -1;
    }
    index++;
    // console.log(index);
    slide.style.transition = ".7s ease-out";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  const moveToPreviousSlide = () => {
    if (index <= 0) {
      index = slides.length;
    }
    index--;
    slide.style.transition = ".7s ease-out";
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  };

  slideContainer.addEventListener("mouseenter", () => {
    // clearInterval(slideId);
    clrtime();
  });

  function clrtime() {
    clearInterval(slideId);
  }

  slideContainer.addEventListener("mouseleave", startSlide);
  prevBtn.addEventListener("click", moveToPreviousSlide);
  nextBtn.addEventListener("click", moveToNextSlide);
  startSlide();
}

// !My Work
