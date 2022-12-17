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
