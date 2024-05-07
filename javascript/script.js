// hamburger opening and closeing using jquery

$(document).ready(function(){
  $("#hides").click(function(){
    $(".header-menu-col").slideUp();
    $(".open").show();
    $(".exit").hide();
  });
  
  $("#shows").click(function(){
    $(".header-menu-col").slideDown();
    $(".open").hide();
    $(".exit").show();
  });
});


//smooth scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
//smooth scroll

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    loop: true,
  },
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".swiper-text p , .swiper-text h2 , .swiper-text button", {
  y: 100,
  duration: 1,
  stagger: 0.5,
  opacity: 0,
});

gsap.to("#header-main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#targetElement",
    start: "top top",
    end: "30% 20%",

    scrub: true,
  },
});

// Set the date we're counting down to
var countDownDate = new Date("Aug 30, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  var html =
    '<div class="days"><p>' +
    days +
    "</p><p>" +
    hours +
    "</p><p>" +
    minutes +
    "</p><p>" +
    seconds +
    "</p></div>";
  document.getElementById("demo").innerHTML = html;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

let LnWidth = document.getElementsByClassName("latest-news-col").offsetWidth;

const buttonRight = document.getElementsByClassName("right");
const buttonLeft = document.getElementsByClassName("left");

function scrollLeftside() {
  var divWidth = document.getElementById("latest-news-col").offsetWidth;

  const container = document.querySelector(".latest-news-swipper");
  container.scrollLeft -= divWidth;
  behavior: "smooth";
}

function scrollRight() {
  var divWidth = document.getElementById("latest-news-col").offsetWidth;

  const container = document.querySelector(".latest-news-swipper");
  container.scrollLeft += divWidth;
  behavior: "smooth";
}

function toggleDisplay() {
  gsap.fromTo(
    "#quick-view-main",
    { display: "none", opacity: "0%" },
    { display: "block", duration: 0.5, opacity: "100%" }
  );
  document.body.style.overflow = "hidden";
}
function closeView() {
  var quickView = document.getElementById("quick-view-main");
  gsap.fromTo(
    "#quick-view-main",
    { display: "block", duration: 0.2, opacity: "100%" },
    { display: "none", opacity: "0%" }
  );
  document.body.style.overflow = "auto";
}


// product-detail-page

var mainImage = document.getElementById("mainImage");
var smallImage = document.getElementsByClassName("small-image");

smallImage[0].onclick = function(){
  mainImage.src = smallImage[0].src;
}
smallImage[1].onclick = function(){
  mainImage.src = smallImage[1].src;
}
smallImage[2].onclick = function(){
  mainImage.src = smallImage[2].src;
}
smallImage[3].onclick = function(){
  mainImage.src = smallImage[3].src;
  
}

// Gsap
gsap.to(".sproduct-image", {
  scrollTrigger: {
    trigger: ".sproduct-text-col",
    // markers: true,
    start: "top 15%",
    end: "48% end",
    scrub: 1,
    pin: ".sproduct-image"
  }
});


