import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  startAt,
  limit,
  orderBy,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-bIBJ4LEFt0v8ZT1fW_Sm2JkMYMSiy5E",
  authDomain: "tourguideom-2861a.firebaseapp.com",
  projectId: "tourguideom-2861a",
  storageBucket: "tourguideom-2861a.appspot.com",
  messagingSenderId: "513935140062",
  appId: "1:513935140062:web:863d7d375c6fdddf194e4f",
  measurementId: "G-EVKY5F25VR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const q = query(collection(db, "articles_data"), orderBy("writingDate"));
const querySnapshot = await getDocs(q); 

let cardsContainer = document.getElementById("cards-container");
querySnapshot.forEach((doc) => {
  let data = doc.data();
  let card = document.createElement("div");

  card.classList.add("card", "m-2", "col-12", "col-md-12", "col-lg-12");
  card.id = doc.id;
  card.innerHTML = `
  <img
    src="${data["images"][2]}"
    alt="  "
    class="card-img-top"
  />
  <div class="card-body p-4">
      <h5 class="card-title fw-bolder">${data["locationName"]}</h5>
      <p class="card-text fw-lighter">
      ${data["overview"]}
      </p>
      <button class="btn btn-outline">
      <i class="bi-trash" style="font-size: 20px"></i>
      </button>
      <button class="btn btn-outline">
      <i class="bi-pencil-fill" style="font-size: 20px"></i>
      </button>
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="bi-geo-alt-fill pe-3"></i> <a src="https://www.google.com/maps/search/${data["location"]._latitude}+${data["location"]._longitude}"> Location </a></li>
      <li class="list-group-item"><i class="bi-tags-fill pe-3"></i> Categories</li>
      <li class="list-group-item"><i class="bi-play-btn-fill pe-3"></i> <a src="${data["videoUrl"]}"> Video Url </a> </li>
  </ul>
  `;
  cardsContainer.appendChild(card);
});

{
  /* <div class="container pt-4"  id="cards-container">
<div class="card m-2 col-12 col-md-12 col-lg-12 ">
<img
    src="https://pbs.twimg.com/media/EVgVuB4XgAEiZ8G?format=jpg&name=large"
    alt="  "
    class="card-img-top"
/>
<div class="card-body p-4">
    <h5 class="card-title fw-bolder">Dhofar</h5>
    <p class="card-text fw-lighter">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
    nulla blanditiis quo, error aperiam iure soluta perferendis
    doloremque itaque exercitationem hic distinctio ea, iste
    obcaecati vel, in vitae illo? Corrupti!
    </p>
    <button class="btn btn-outline">
    <i class="bi-trash" style="font-size: 20px"></i>
    </button>
    <button class="btn btn-outline">
    <i class="bi-pencil-fill" style="font-size: 20px"></i>
    </button>
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="bi-geo-alt-fill pe-3"></i> Location</li>
    <li class="list-group-item"><i class="bi-tags-fill pe-3"></i> Categories</li>
    <li class="list-group-item"><i class="bi-play-btn-fill pe-3"></i> Video Url</li>
</ul>
</div> */
}
// read the available data
// create basic form with the available data included
// add the functionalities that are existing in the create post page
