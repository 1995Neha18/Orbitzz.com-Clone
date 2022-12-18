let trips = document.getElementById("trips");
trips.addEventListener("click", () => {
    console.log("yes");
    window.open("Bookmark.html", "_self");
})
let signin = document.getElementById("signin");
signin.addEventListener("click", () => {
    console.log("yes");
    window.open("LogIn.html", "_self");
})

let logo = document.querySelector("#left-section");
logo.addEventListener("click", () => {
    window.open("index.html", "_self");
})
let searcg_btn = document.querySelector("#searchbtn");

searcg_btn.addEventListener("click", async() => {
    let checkin = document.getElementById("d1").value;
    let checkout = document.getElementById("d2").value;
    let rooms = document.getElementById("num").value;
    console.log(rooms);
    sessionStorage.setItem("d1", checkin);
    sessionStorage.setItem("d2", checkout);

    sessionStorage.setItem("room", rooms);


    console.log(checkin, checkout, rooms);
    let destination = document.querySelector("#searchinput").value;
    sessionStorage.setItem("des", destination)
    console.log(destination);


    let dateOne = new Date(checkin);
    let dateTwo = new Date(checkout);
    let time = Math.abs(dateTwo - dateOne);
    let days = Math.ceil(time / (1000 * 60 * 60 * 24));
    if (days == 0) { days = 1 }
    sessionStorage.setItem("days", days);

    try {
        let res = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/?city=${destination}`, {
            method: 'GET'
        })
        if (res.ok) {
            let data = await res.json();
            console.log(data);
            sessionStorage.setItem("hotel", JSON.stringify(data));

            window.open("property.html", "_self");

        }
    } catch (error) {

    }


})