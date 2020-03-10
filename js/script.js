function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
    document.querySelector("header").style.borderBottom = "1px solid #8a6e46";
    document.querySelector("header").style.visibility = "visible";
  } else {
    document.querySelector("header").style.top = "-70px";
    document.querySelector("header").style.borderBottom = "none";
    document.querySelector("header").style.visibility = "hidden";
  }
  prevScrollpos = currentScrollPos;
};

document.querySelector(".header__burger").onclick = () => {
  document.querySelector(".header__button").classList.toggle("change");
};

// const catCenter = document.querySelector('.categories__center');
const catLeft = document.querySelector(".categories__left");
const catRight = document.querySelector(".categories__right");
const catBlock = document.getElementById("catBlock");

document.querySelector(".categories__center").onclick = () => {
  catBlock.classList.toggle("active-categories-block");
  catRight.classList.toggle("push");
  catLeft.classList.toggle("push");
};

document.addEventListener(
  "click",
  function () {
    catRight.style.transition = "width .6s";
    catLeft.style.transition = "width .6s";
    catBlock.style.transition = "height .6s";
    catBlock.style.transition = "opacity .6s";
  },
  false
);

let slides = document.querySelectorAll("#Quotes .quotes__slide--wrap");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);
let playing = false;
let pauseButton = document.getElementById("pause");
let next = document.getElementById("next");
let previous = document.getElementById("previous");

next.onclick = function () {
  pauseSlideshow();
  nextSlide();
};

previous.onclick = function () {
  pauseSlideshow();
  previousSlide();
};

function nextSlide() {
  pauseButton.style.rotate = "360deg";
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  pauseButton.style.rotate = "0deg";
  goToSlide(currentSlide - 1);
}

function pauseSlideshow() {
  pauseButton.style.rotate = "0deg";
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.style.rotate = "360deg";
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

function goToSlide(n) {
  slides[currentSlide].className = "quotes__slide--wrap";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "quotes__slide--wrap showing";
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

// __________________________________________________________________
window.onload = function () {
  initializeTimer1();
  initializeTimer2();
  initializeTimer3();

}

function initializeTimer1() {
  var endDate = new Date(2020, 2, 12);
  var currentDate = new Date();
  var seconds = (endDate - currentDate) / 1000;
  if (seconds > 0) {
    var minutes = seconds / 60;
    var hours = minutes / 60;
    minutes = (hours - Math.floor(hours)) * 60;
    hours = Math.floor(hours);
    seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
    minutes = Math.floor(minutes);

    setTimePage1(hours, minutes, seconds);

    function secOut() {
      if (seconds == 0) {
        if (minutes == 0) {
          if (hours == 0) {
            showMessage1(timerId);
          } else {
            hours--;
            minutes = 59;
            seconds = 59;
          }
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      setTimePage1(hours, minutes, seconds);
    }
    timerId = setInterval(secOut, 1000)
  } else {
    var element = document.querySelector(".lots__time1");
    element.innerHTML = "Продано!";
    element.style.textAlighn = "center";
    element.style.color = "red";
  }
}

function setTimePage1(h, m, s) {
  var element = document.querySelector(".lots__time1");
  element.innerHTML = h + ":" + m + ":" + s;
}

function showMessage1(timerId) {
  var element = document.querySelector(".lots__time1");
  element.innerHTML = "Время истекло!";
  clearInterval(timerId);
}


function initializeTimer2() {
  var endDate = new Date(2020, 2, 11);
  var currentDate = new Date();
  var seconds = (endDate - currentDate) / 1000;
  if (seconds > 0) {
    var minutes = seconds / 60;
    var hours = minutes / 60;
    minutes = (hours - Math.floor(hours)) * 60;
    hours = Math.floor(hours);
    seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
    minutes = Math.floor(minutes);

    setTimePage2(hours, minutes, seconds);

    function secOut() {
      if (seconds == 0) {
        if (minutes == 0) {
          if (hours == 0) {
            showMessage2(timerId);
          } else {
            hours--;
            minutes = 59;
            seconds = 59;
          }
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      setTimePage2(hours, minutes, seconds);
    }
    timerId = setInterval(secOut, 1000)
  } else {
    var element = document.querySelector(".lots__time2");
    element.innerHTML = "Продано!";
    element.style.textAlighn = "center";
    element.style.color = "red";
  }
}

function setTimePage2(h, m, s) {
  var element = document.querySelector(".lots__time2");
  element.innerHTML = h + ":" + m + ":" + s;
}

function showMessage2(timerId) {
  var element = document.querySelector(".lots__time2");
  element.innerHTML = "Время истекло!";
  clearInterval(timerId);
}

function initializeTimer3() {
  var endDate = new Date(2020, 2, 14);
  var currentDate = new Date();
  var seconds = (endDate - currentDate) / 1000;
  if (seconds > 0) {
    var minutes = seconds / 60;
    var hours = minutes / 60;
    minutes = (hours - Math.floor(hours)) * 60;
    hours = Math.floor(hours);
    seconds = Math.floor((minutes - Math.floor(minutes)) * 60);
    minutes = Math.floor(minutes);

    setTimePage3(hours, minutes, seconds);

    function secOut() {
      if (seconds == 0) {
        if (minutes == 0) {
          if (hours == 0) {
            showMessage3(timerId);
          } else {
            hours--;
            minutes = 59;
            seconds = 59;
          }
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      setTimePage3(hours, minutes, seconds);
    }
    timerId = setInterval(secOut, 1000)
  } else {
    var element = document.querySelector(".lots__time3");
    element.innerHTML = "Продано!";
    element.style.textAlighn = "center";
    element.style.color = "red";
  }
}

function setTimePage3(h, m, s) {
  var element = document.querySelector(".lots__time3");
  element.innerHTML = h + ":" + m + ":" + s;
}

function showMessage3(timerId) {
  var element = document.querySelector(".lots__time3");
  element.innerHTML = "Время истекло!";
  clearInterval(timerId);
}