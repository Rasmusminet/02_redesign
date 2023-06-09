function showPopup(title, description, iframeLink, imageUrl) {
  var popup = document.getElementById("popup");
  var popupImage = document.getElementById("popup-image");
  var popupTitle = document.getElementById("popup-title");
  var popupDescription = document.getElementById("popup-description");
  var iframelink = document.getElementById("iframe-popup");

  popupImage.src = imageUrl;
  popupTitle.textContent = title;
  popupDescription.textContent = description;
  iframelink.src = iframeLink;

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
