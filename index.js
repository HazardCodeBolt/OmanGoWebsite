// --------------------------------------------------------------------------------
// start of creating the map area
const easyMDE = new EasyMDE({
  element: document.getElementById("my-text-area"),
});
// end of creating the map area
// --------------------------------------------------------------------------------
// start of adding map and controlling location data fields
var confirmBtn = document.getElementById("confirmPosition");
var longitudeField = document.getElementById("longitudeField");
var latitudeField = document.getElementById("latitudeField");

var lp = new locationPicker("map", { setCurrentPosition: true }, { zoom: 15 });

confirmBtn.onclick = function () {
  var location = lp.getMarkerPosition();
  longitudeField.value = location.lng;
  latitudeField.value = location.lat;
};
// end of adding map and controlling location data fields
// --------------------------------------------------------------------------------
// start of adding categories to dropdown and to categories holder
var categories = [
  "Beach",
  "Park",
  "City",
  "Nature reserve",
  "Garden",
  "Wadi",
  "Cave",
  "Castle",
  "Fort",
  "Sands",
  "Fjord",
  "Plaza",
  "Suburb",
  "Town",
  "Village",
  "Island",
  "Sinkhole",
  "Mountain",
  "Harbour",
  "Mosque",
  "Falaj",
  "Mall",
  "Traditional Market",
  "Canyon",
  "Hotel",
  "Opera House",
  "Palace",
  "Museum",
  "Amusement center",
];

var categoryDropDown = document.getElementById("inputGroupSelect03");
var categoriesHolder = document.getElementById("categories-holder");
var addCategoryButton = document.getElementById("addCategory");

for (let index = 1; index <= categories.length; index++) {
  const category = categories[index];
  let option = document.createElement("option");
  option.value = index;
  option.innerText = category;
  categoryDropDown.appendChild(option);
}

addCategoryButton.addEventListener("click", function () {
  let selectedValue =
    categoryDropDown.options[categoryDropDown.selectedIndex].text;

  if (
    selectedValue !== "Choose..." &&
    !categoriesHolder.innerText.includes(selectedValue)
  ) {
    let categorySpan = document.createElement("span");
    categorySpan.classList.add(
      "badge",
      "text-bg-light",
      "border",
      "border-secondary",
      "p-2",
      "me-1",
      "category-badge"
    );
    categorySpan.innerText = selectedValue;
    categorySpan.onclick = () => remove(categorySpan);
    categoriesHolder.appendChild(categorySpan);
  }
});

function remove(element) {
  categoriesHolder.removeChild(element);
}
// end of adding categories to dropdown and to categories holder
// --------------------------------------------------------------------------------
