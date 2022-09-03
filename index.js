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
  "Amusement center" 
];

var categoryDropDown = document.getElementById("inputGroupSelect03");
var categoriesHolder = document.getElementById("categories-holder");
var addCategoryButton = document.getElementById("addCategory");

for (let index = 0; index < categories.length; index++) {
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
      "border",
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
// strat of adding accordion image item and deleting it
function isImage(url) {
  return /(jpg|jpeg|png|webp|avif|gif|svg)/.test(url);
}

// https://pbs.twimg.com/media/EZvjK-XXkAA0v4X?format=jpg&name=large
var innerAccordion = document.getElementById("innerAccordion");
var imageUrlField = document.getElementById("imageUrlField");
var addImageButton = document.getElementById("addImage");
var index = 1;
addImageButton.addEventListener("click", function () {
  let url = imageUrlField.value;
  if (url !== "" && isImage(url)) {
    let item = document.createElement("div");
    console.log(innerAccordion.children);
    item.classList.add("accordion-item");
    item.innerHTML = `
    <h2 class="accordion-header" id="heading${index}">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
    Image #${index} : ${url}
    </button>
    </h2>
    <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#innerAccordion">
    <div class="accordion-body"> 
    <img src="${url}" alt="" class="addedImage">  
    <button type="button" onclick="removeItem(this)" class="btn d-block mt-3 mb-3 removeImageBtn" style="margin-left: auto; margin-right: auto;">
    remove
    </button>  
    </div>
    </div>`;
    innerAccordion.appendChild(item);
    index++;
  }
});

function removeItem(element) {
  element.parentElement.parentElement.parentElement.remove();
}
// strat of adding accordion image item and deleting it
// --------------------------------------------------------------------------------

import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-bIBJ4LEFt0v8ZT1fW_Sm2JkMYMSiy5E",
  authDomain: "tourguideom-2861a.firebaseapp.com",
  projectId: "tourguideom-2861a",
  storageBucket: "tourguideom-2861a.appspot.com",
  messagingSenderId: "513935140062",
  appId: "1:513935140062:web:863d7d375c6fdddf194e4f",
  measurementId: "G-EVKY5F25VR"
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
  let locationNameField = document.getElementById('locationName');
  let videoUrlField = document.getElementById('VideoUrlField');
  let categoriesList = [];
  let choosenCategories = document.querySelectorAll('#categories-holder .category-badge');
  for (const item of choosenCategories) {
    categoriesList.push(item.innerText);
  }
  let locationText =`${latitudeField.value},${longitudeField.value}`;
  let images = document.querySelectorAll('#innerAccordion img');
  let imagesUrlsList = [];
  for (const image of images) {
    imagesUrlsList.push(image.src);
  }
  let overviewField = document.getElementById('overview');
  let articleText = easyMDE.value(); 
  // don't forget timestamp

});
  