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
