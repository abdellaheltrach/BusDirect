const addBtn = document.getElementById("addBtn");
const cardHTML = document.getElementsByClassName("card");

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

function fillTheList() {
  const slectedPlaceDropDown = document.getElementById("slectedPlace");

  const supprimerSelector = document.getElementById("supprimerSelector");

  slectedPlaceDropDown.innerHTML = "";

  for (let i = 0; i < arrReservedPLaces.length; i++) {
    if (arrReservedPLaces[i].nom === "") {
      const option = document.createElement("option");
      option.textContent = `Seat ${arrReservedPLaces[i].id}`;
      option.value = arrReservedPLaces[i].id;
      slectedPlaceDropDown.appendChild(option);
    } else {
      const option = document.createElement("option");
      option.textContent = `Seat ${arrReservedPLaces[i].id}`;
      option.value = arrReservedPLaces[i].id;
      supprimerSelector.appendChild(option);
    }
  }
}

fillTheList();

addBtn.addEventListener("click", reservePlace);

function reservePlace(e) {
  //id slectedPlace
  // id newPassagerName

  const PassagerName = document.getElementById("newPassagerName").value;
  let slectedPlace = document.getElementById("slectedPlace").value;

  //empty out
  if (PassagerName === "") {
    return;
  }

  // console.log(PassagerName);
  // console.log(slectedPlace);

  const card = findPlaceById(slectedPlace);
  // console.log(card);

  if (card !== null) {
    // target card

    card.classList.remove("bg-white");
    card.classList.add("bg-[#fee2e2]");

    //format numbers under 10 to look like th 01..
    let placeStrr = "";
    slectedPlace = parseInt(slectedPlace);
    if (slectedPlace < 10) {
      placeStrr = "0" + slectedPlace;
    } else {
      placeStrr = slectedPlace;
    }

    card.innerHTML = `<span class="text-xl font-bold text-red-600">${placeStrr}</span>
                  <div
                    class="mt-1 px-2 py-0.5 rounded-md flex items-center gap-1 text-[11px] text-slate-700  border border-red-100"
                  >
                    <span class="truncate max-w-[65px] font-medium">${PassagerName}</span>
                  </div>
      `;

    //add the user to the list and and reset the select dropdown
    arrReservedPLaces[parseInt(card.dataset.id - 1)].nom = PassagerName;
    document.getElementById("newPassagerName").value = "";
    fillTheList();

    //calculat reserved places
    let count = 0;
    for (let i = 0; i < arrReservedPLaces.length; i++) {
      if (arrReservedPLaces[i].nom !== "") {
        count++;
      }
    }

    updateStats(20, count, count * 80);
  }
}

//healper;

function findPlaceById(id) {
  for (let i = 0; i < cardHTML.length; i++) {
    if (cardHTML[i].dataset.id === id) {
      return cardHTML[i];
    }
  }

  return null;
}

function updateStats(total, avaible, totalMoney) {
  const totalHTML = document.getElementById("total");
  const avaibleHTML = document.getElementById("Available");
  const moneyHTML = document.getElementById("recette");

  totalHTML.innerText = `${total} Total`;
  avaibleHTML.innerText = `${avaible} Available`;
  moneyHTML.innerText = `Recette: ${totalMoney} DH`;
}
