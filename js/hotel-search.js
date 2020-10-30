let link = document.querySelector(".link-feedback");
let popup = document.querySelector(".search-hotel");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("appearance-popup");
});
