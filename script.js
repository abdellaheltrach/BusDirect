const addBtn = document.getElementById("addBtn");
const cardsarr = document.getElementsByClassName("card");

const arrReservedPLaces = [
  { id: 1, nom: "" },
  { id: 2, nom: "" },
  { id: 3, nom: "" },
  { id: 4, nom: "" },
  { id: 5, nom: "" },
  { id: 6, nom: "" },
  { id: 7, nom: "" },
  { id: 8, nom: "" },
  { id: 9, nom: "" },
  { id: 10, nom: "" },
  { id: 11, nom: "" },
  { id: 12, nom: "" },
  { id: 13, nom: "" },
  { id: 14, nom: "" },
  { id: 15, nom: "" },
  { id: 16, nom: "" },
  { id: 17, nom: "" },
  { id: 18, nom: "" },
  { id: 19, nom: "" },
  { id: 20, nom: "" },
];

// cards[1].dataset.id

const slectedPlaceDropDown = document.getElementById("slectedPlace");

for (let i = 0; i < arrReservedPLaces.length; i++) {
  if (arrReservedPLaces[i].nom === "") {
    const option = document.createElement("option");
    option.textContent = `Seat ${arrReservedPLaces[i].id}`;
    slectedPlaceDropDown.appendChild(option);
  }
}

addBtn.addEventListener("click", reservePlace);

function reservePlace(e) {
  //id slectedPlace
  // id newPassagerName

  const PassagerName = document.getElementById("newPassagerName").value;
  const slectedPlace = document.getElementById("newPassagerName").value;
  console.log(PassagerName);
}
