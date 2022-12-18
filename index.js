// append data in div using javascript?

// let div = document.getElementsByClassName("locatn");
// let box = document.getElementById("searchinput");
// function cities() {
//   div.style.display = "none";
// }

// // box.onclick = () => {
// //   div.style.display = "block"
// // }
// function srch() {
//   div.style.display = "block";
// }
let btn = document.getElementById("click");
btn.addEventListener("click", myfun);
function myfun() {
  window.location.href = "search.html";
  console.log("yes");
}

// let teamlogo = document.getElementsByClassName("logo");
// teamlogo.addEventListener("click", fun);
// function fun() {
//   window.location.href = "index.html";

// }

let headTop = document.querySelector(".navleft > h2");
headTop.style.cursor = "pointer";
headTop.onclick = () => {
  window.location.href = "index.html";
};

let hiddenDiv = document.querySelector(".subOptions");
let title = document.querySelector(".upArrow");
hiddenDiv.style.display = "none";
console.log(hiddenDiv);
title.onmouseover = () => {
  hiddenDiv.style.display = "block";
};
title.onmouseout = () => {
  hiddenDiv.style.display = "none";
};
hiddenDiv.onmouseover = () => {
  hiddenDiv.style.display = "block";
};
hiddenDiv.onmouseout = () => {
  hiddenDiv.style.display = "none";
};
