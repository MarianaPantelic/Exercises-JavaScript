let x = window.matchMedia("(max-width: 768px)");

let body = document.querySelector("body");
body.style.fontFamily = "Arial";
body.style.lineHeight = "1.8";

document.querySelector("h1").style.textAlign = "center";

let categoryElements = document.getElementsByClassName("category");
for (element of categoryElements) {
  element.style.fontSize = "30px";
  element.style.color = "red";
  element.style.textDecoration = "underline";
  element.style.fontStyle = "italic";
}

function colorGenerator(element) {
  element.style.opacity = "Math.floor(Math.random())";
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

let foodCategory = document.getElementsByClassName("food-category");
for (element of foodCategory) {
  element.style.backgroundColor = colorGenerator(element);
  element.style.width = "300px";
  element.style.height = "150px";
  element.style.padding = "20px 0 20px 100px";
}

let main = document.querySelector("main");
main.style.display = "flex";
main.style.justifyContent = "space-around";
main.style.flexWrap = "wrap";
main.style.width = "80%";
main.style.margin = "auto";

let warning = document.getElementById("warning");
warning.style.fontSize = "25px";
warning.style.fontFamily = "Courier New";
warning.style.textAlign = "center";

let allergyInfo = document.getElementsByClassName("allergy-info");
let len = allergyInfo.length;
for (let i = 0; i < len; i++) {
  if (i % 2 !== 0) {
    allergyInfo[i].style.backgroundColor = "lightblue";
  }
}

let allergies = document.querySelector(".allergies");
allergies.style.width = "300px";
allergies.style.margin = "auto";
allergies.style.listStyle = "none";

let foodDesc = document.getElementsByClassName("food-desc");
for (element of foodDesc) {
  element.style.width = "150px";
  element.style.height = "150px";
  element.style.border = "solid red";
  element.style.backgroundColor = colorGenerator(element);
  element.style.borderRadius = "50%";
  element.style.textAlign = "center";
  element.style.margin = "20px";
}

let footer = document.querySelector(".footer");
footer.style.maxWidth = "600px";
footer.style.margin = "2% auto";
footer.style.display = "flex";
footer.style.flexWrap = "wrap";
