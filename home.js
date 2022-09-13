import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getFirestore,
  collection,
  query,
  startAt,
  limit,
  orderBy,
  getDocs,
  doc, deleteDoc
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
    src="${data.images[0]}" 
    alt="  "
    class="card-img-top"
  />
  <div class="card-body p-4">
      <h5 class="card-title fw-bolder">${data["locationName"]}</h5>
      <p class="card-text fw-lighter">
      ${data.overview}
      </p>
      <button type="button" class="delete-post btn btn-outline">
      <i class="bi-trash" style="font-size: 20px"></i>
      </button>
      <button type="button" class="edit-post btn btn-outline">
      <i class="bi-pencil-fill" style="font-size: 20px"></i>
      </button>
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="bi-geo-alt-fill pe-3"></i> 
        <a href="https://www.google.com/maps/search/${data.location.latitude}+${data.location.longitude}"> Location </a>
      </li>
      <li class="list-group-item"><i class="bi-play-btn-fill pe-3"></i> <a href="${data.videoUrl}"> Video Url </a> </li>
      <li class="list-group-item"><i class="bi-tags-fill pe-3"></i> Categories</li>
  </ul>
  `;
  cardsContainer.appendChild(card);
});

let deletePostButtons = document.querySelectorAll(".delete-post");

deletePost.forEach(async element => {
  let elementCard = element.parentElement.parentElement;
  element.onclick = elementCard.delete();
  // delete post from firebase

  await deleteDoc(doc(db, elementCard.id));
});
// read the available data
// create basic form with the available data included
// add the functionalities that are existing in the create post page
