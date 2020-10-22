const HotelLink document.querySelector(".SEARCH-HOTEL-Link");
const SearchHotel document.querySelector(".SEARCH-HOTEL");

HotelLink.addEventListener("click", function () {
  evt.preventDefault();
  SearchHotel.classList.add("SEARCH-Show");
  
});

HotelLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  SearchHotel.classList.remove("SEARCH-Show");
});
