/*******************************burger ******************* */

var burgerMenu = document.getElementById("burger-menu");

var overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

/****************Pop up til program******************** */
function showPopup(title, description, spotifyLink, imageUrl) {
  var popup = document.getElementById("popup");
  var popupImage = document.getElementById("popup-image");
  var popupTitle = document.getElementById("popup-title");
  var popupDescription = document.getElementById("popup-description");
  var spotifyLinkElement = document.getElementById("spotify-link");

  popupImage.src = imageUrl;
  popupTitle.textContent = title;
  popupDescription.textContent = description;
  spotifyLinkElement.href = spotifyLink;

  popup.style.display = "block";

  var closeBtn = document.getElementById("close-btn");
  closeBtn.onclick = function () {
    popup.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
}

/********************* pop-up til om Alive ************************* */
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

/********************* pop-up til FAQ ***************************** */
function openPopup1() {
  document.getElementById("popup1").style.display = "block";
}

function closePopup1() {
  document.getElementById("popup1").style.display = "none";
}

function openPopup2() {
  document.getElementById("popup2").style.display = "block";
}

function closePopup2() {
  document.getElementById("popup2").style.display = "none";
}

function openPopup3() {
  document.getElementById("popup3").style.display = "block";
}

function closePopup3() {
  document.getElementById("popup3").style.display = "none";
}

function openPopup4() {
  document.getElementById("popup4").style.display = "block";
}

function closePopup4() {
  document.getElementById("popup4").style.display = "none";
}

function openPopup5() {
  document.getElementById("popup5").style.display = "block";
}

function closePopup5() {
  document.getElementById("popup5").style.display = "none";
}

function openPopup6() {
  document.getElementById("popup6").style.display = "block";
}

function closePopup6() {
  document.getElementById("popup6").style.display = "none";
}

/********************* Carousel Galleri til om Alive ************************* */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
