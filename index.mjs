import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp);

let togglefront = true;
let toggleback = true;
let togglecloud = true

const frontEndPopUp = document.getElementById("front-end-pop-up");
const backEndPopUp = document.getElementById("back-end-pop-up");
const cloudPopUp = document.getElementById("cloud-pop-up");


let frontBtn = document.getElementById("frontBtn");
let backBtn = document.getElementById("frontBtn");
let cloudBtn = document.getElementById("frontBtn");
frontBtn.onclick = function showFrontEndLogic() {
  if (togglefront) {
    frontEndPopUp.style.display = "block";
    togglefront = false;
  }
  else {
    frontEndPopUp.style.display = "none";
    togglefront = true;
  }
}

backBtn.onclick = function showBackEndLogic() {
  if (toggleback) {
    backEndPopUp.style.display = "block";
    toggleback = false;
  }
  else {
    backEndPopUp.style.display = "none";
    toggleback = true;
  }
}

cloudBtn.onclick = function showCloudLogic() {
  if (togglecloud) {
    cloudPopUp.style.display = "block";
    togglecloud = false;
  }
  else {
    cloudPopUp.style.display = "none";
    togglecloud = true;
  }
}