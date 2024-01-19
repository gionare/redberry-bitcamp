// js to trigger the file input when the text is clicked
function triggerFileInput() {
  document.getElementById("img").click();
}

// actual date placeholder for publish date input
let today = new Date().toISOString().split("T")[0];
document.getElementById("todayDate").setAttribute("value", today);

// --------------------------- Validation for title -----------------------------
let titleInput = document.getElementById("title-heading");
let titleInstruction = document.getElementById("title-instruction");
let titleHeading = document.getElementById("title-heading");
// console.log(titleInput, titleInstruction);

titleInput.addEventListener("input", function () {
  // Check the length of the input value
  if (titleInput.value.length >= 1 && titleInput.value.length <= 3) {
    // If length is between 1 and 3, add or remove 'invalid' class
    titleInstruction.classList.add("invalid");
    titleHeading.classList.add("invalid");
  } else {
    titleInstruction.classList.remove("invalid");
    titleHeading.classList.remove("invalid");
  }
});

// --------------------------- Validation for author -----------------------------
let nameInput = document.getElementById("name");
let instructionList = document.getElementById("instruction-list");
let instructionItems = instructionList.querySelectorAll("li");
let nameInputField = document.getElementById("name");
// console.log(nameInput, instructionList, instructionItems);

nameInput.addEventListener("input", function () {
  // const georgianRegex = /^[\u10A0-\u10FF]+$/;

  // Check and apply conditions to the first child
  if (nameInput.value.length >= 1 && nameInput.value.length <= 3) {
    instructionItems[0].classList.add("invalid");
    nameInputField.classList.add("invalid");
  } else {
    instructionItems[0].classList.remove("invalid");
    nameInputField.classList.remove("invalid");
  }

  // Check and apply conditions to the second child
  const words = nameInput.value.split(" ");
  if (words.length === 1) {
    instructionItems[1].classList.add("invalid");
    nameInputField.classList.add("invalid");
  } else {
    instructionItems[1].classList.remove("invalid");
    nameInputField.classList.remove("invalid");
  }

  // Check and apply conditions to the third child
  if (!georgianRegex.test(nameInput.value)) {
    instructionItems[2].classList.add("invalid");
    nameInputField.classList.add("invalid");
  } else {
    instructionItems[2].classList.remove("invalid");
    nameInputField.classList.remove("invalid");
  }
});

// --------------------------- Validation for description -----------------------------
let descriptionInput = document.getElementById("about-title");
let descInstruction = document.getElementById("desc-instruction");

descriptionInput.addEventListener("input", function () {
  if (descriptionInput.value.length === 1) {
    descInstruction.classList.add("invalid");
  } else {
    descInstruction.classList.remove("invalid");
  }
});

/* ----------------------- submit button ----------------------- */
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
