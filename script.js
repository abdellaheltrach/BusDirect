const pasangerArr = [
  { placeId: 1, holderName: null },
  { placeId: 2, holderName: null },
  { placeId: 3, holderName: null },
  { placeId: 4, holderName: null },
  { placeId: 5, holderName: null },
  { placeId: 6, holderName: null },
  { placeId: 7, holderName: null },
  { placeId: 8, holderName: null },
  { placeId: 9, holderName: null },
  { placeId: 10, holderName: null },
  { placeId: 11, holderName: null },
  { placeId: 12, holderName: null },
  { placeId: 13, holderName: null },
  { placeId: 14, holderName: null },
  { placeId: 15, holderName: null },
  { placeId: 16, holderName: null },
  { placeId: 17, holderName: null },
  { placeId: 18, holderName: null },
  { placeId: 19, holderName: null },
  { placeId: 20, holderName: null },
];

// console.log(pasangerArr)

//reserve new place:
const addBtn = document.getElementById("add-btn");
const newPassagerName = document.getElementById("newPassagerName").value;
const slectedPlace = document.getElementById("slectedPlace");

//fill empty places
for (let i = 0; i < pasangerArr.length; i++) {
  if (pasangerArr[i].placeId != null) {
    let option = new Option(pasangerArr[i].placeId, pasangerArr[i].placeId);
    slectedPlace.add(option);
  }
}

addBtn.addEventListener("click", reservePlace);

function reservePlace(e) {
  console.log(newPassagerName.value);
}
