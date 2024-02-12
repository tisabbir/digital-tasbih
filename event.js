let subhanallahDisplay =
  document.getElementsByClassName("subhanallahDisplay")[0];

let alhamdulillahDisplay = document.getElementsByClassName(
  "alhamdulillahDisplay"
)[0];

let AllahAkbarDisplay = document.getElementsByClassName("AllahAkbarDisplay")[0];

let subhanallahIncrement = document.getElementsByClassName(
  "subhanallahIncrement"
)[0];
let alhamdulillahIncrement = document.getElementsByClassName(
  "alhamdulillahIncrement"
)[0];
let AllahAkbarIncrement = document.getElementsByClassName(
  "AllahAkbarIncrement"
)[0];

let subhanallahDecrement = document.getElementsByClassName(
  "subhanallahDecrement"
)[0];
let alhamdulillahDecrement = document.getElementsByClassName(
  "alhamdulillahDecrement"
)[0];
let AllahAkbarDecrement = document.getElementsByClassName(
  "AllahAkbarDecrement"
)[0];

let subhanallahValue = 0;
let alhamdulillahValue = 0;
let AllahAkbarValue = 0;

// Event Listener start
subhanallahIncrement.addEventListener("click", function () {
  if (subhanallahValue >= 33) {
    return alert("You have completed this Tasbih");
  }
  subhanallahValue++;
  subhanallahDisplay.innerText = subhanallahValue;
});
subhanallahDecrement.addEventListener("click", function () {
  if (subhanallahValue <= 0) {
    return alert("The Value cannot be negative");
  }
  subhanallahValue--;
  subhanallahDisplay.innerText = subhanallahValue;
});
// Event Listener end
// Alhamdulillah
// Event Listener start
alhamdulillahIncrement.addEventListener("click", function () {
  if (alhamdulillahValue >= 33) {
    return alert("You have completed this Tasbih");
  }
  alhamdulillahValue++;
  alhamdulillahDisplay.innerText = alhamdulillahValue;
});
alhamdulillahDecrement.addEventListener("click", function () {
  if (alhamdulillahValue <= 0) {
    return alert("The Value cannot be negative");
  }
  alhamdulillahValue--;
  alhamdulillahDisplay.innerText = alhamdulillahValue;
});
// Event Listener end
// Event Listener start
AllahAkbarIncrement.addEventListener("click", function () {
  if (AllahAkbarValue >= 34) {
    return alert("You have completed this Tasbih");
  }
  AllahAkbarValue++;
  AllahAkbarDisplay.innerText = AllahAkbarValue;
});
AllahAkbarDecrement.addEventListener("click", function () {
  if (AllahAkbarValue <= 0) {
    return alert("The Value cannot be negative");
  }
  AllahAkbarValue--;
  AllahAkbarDisplay.innerText = AllahAkbarValue;
});
// Event Listener end

// Reset button
let resetBtn = document.getElementsByClassName("reset-btn")[0];
resetBtn.addEventListener("click", function () {
  subhanallahValue = 0;
  alhamdulillahValue = 0;
  AllahAkbarValue = 0;
  subhanallahDisplay.innerText = subhanallahValue;
  alhamdulillahDisplay.innerText = alhamdulillahValue;
  AllahAkbarDisplay.innerText = AllahAkbarValue;
});
