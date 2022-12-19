let logo = document.querySelector("#left-section");
logo.addEventListener("click", () => {
    window.open("index.html", "_self");
})

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

let cont = document.querySelector("#searchedProperty")
let hotelarr = JSON.parse(sessionStorage.getItem("hotel")) || [];
let length = document.querySelector("#searchedProperty h2");
length.innerText = "Total Properties Found:" + hotelarr.length;

document.getElementById("d1").value = sessionStorage.getItem("d1") || "";
document.getElementById("d2").value = sessionStorage.getItem("d2") || "";
document.getElementById("num").value = sessionStorage.getItem("room") || "";
document.querySelector("#searchinput").value = sessionStorage.getItem("des") || "";

let search_btn = document.querySelector("#searchbtn");

search_btn.addEventListener("click", async() => {
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

            renderProperty(data);

        }
    } catch (error) {

    }


})



function renderProperty(hotelarr) {
    cont.innerHTML = "";

    hotelarr.forEach((element) => {

        let divrprice = document.createElement("div");

        let div = document.createElement("div");
        let divinner = document.createElement("div");


        let img = document.createElement("img");
        img.setAttribute("src", element["hotel-image-media src-1"]);

        let name = document.createElement("h3");
        name.innerText = (element["hotel-name"]);

        let location = document.createElement("p");
        location.innerText = (element.city);
        location.style.marginTop = 0;
        location.style.padding = 0;
        let i1 = document.createElement("i");
        if (element["higlited-amenities"] == "Pool") {

            i1.setAttribute("class", "fa-sharp fa-solid fa-person-swimming")
        }

        let p = document.createElement("h4");
        p.innerText = "Enjoy a comfy Staycation"
        let rating = document.createElement("p");
        rating.innerText = "Rating: " + element.star + " Star";

        let p1 = document.createElement("p");
        p1.innerText = "Fully Refundable"

        let p2 = document.createElement("p");
        p2.innerText = "Reserve now pay Later"

        let rev = document.createElement("p");
        rev.innerText = "Rating: " +
            element["rating"] + "/10";

        let tax = document.createElement("p");
        tax.innerText = "*inclusive of all taxes";
        tax.style.color = "blue";
        tax.style.fontStyle = "italic";

        let but = document.createElement("button");
        but.innerText = "We have 5 left at";

        let price = element["hotel-price"];
        divrprice.append(but, `$${price}`)

        divinner.append(name, location, i1, p, p1, p2, rev);

        divrprice.setAttribute("class", "price");


        div.append(img, divinner, divrprice);

        div.addEventListener("click", () => {
            window.open("./project page/product_page.html", "_self");
            sessionStorage.setItem("hotelid", element.id);
            sessionStorage.setItem("city", element.city);
        })
        cont.append(div);

    });
}
renderProperty(hotelarr);

let applybtn = document.querySelector("#apply");
applybtn.addEventListener("click", function() {

    let selected = document.querySelector("select").value;
    hotelarr = JSON.parse(sessionStorage.getItem("hotel"));
    if (selected == "HTL") {
        hotelarr.sort((a, b) => b["hotel-price"] - a["hotel-price"])


    }
    if (selected == "LTH") {
        hotelarr.sort((a, b) => a["hotel-price"] - b["hotel-price"])

    }


    document.querySelector("#searchedProperty").innerText = "";




    let selectedstar = document.querySelector("#filterstar").value;
    console.log(selectedstar);
    if (selectedstar == "") {
        renderProperty(hotelarr);
    } else if (selectedstar == 1) {
        let newData = hotelarr.filter(function(elem) {
            return elem["rating"] >= 3 && elem["rating"] < 5
        });
        document.querySelector("#searchedProperty").innerText = "";

        renderProperty(newData);

    } else if (selectedstar == 2) {
        let newData = hotelarr.filter(function(elem) {
            return elem["rating"] >= 5 && elem["rating"] < 7
        });
        document.querySelector("#searchedProperty").innerText = "";

        renderProperty(newData);
    } else if (selectedstar == 3) {
        let newData = hotelarr.filter(function(elem) {
            return elem["rating"] >= 7 && elem["rating"] < 9
        });
        document.querySelector("#searchedProperty").innerText = "";

        renderProperty(newData);
    } else if (selectedstar == 4) {
        let newData = hotelarr.filter(function(elem) {
            return elem["rating"] >= 9 && elem["rating"] <= 10
        });
        document.querySelector("#searchedProperty").innerText = "";

        renderProperty(newData);
    }






})


function search() {
    let q = document.getElementById("searchhotel").value;
    if (q == "") {
        fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/`)
            .then((res) => res.json())
            .then((data) => {
                sessionStorage.setItem("hotel", JSON.stringify(data));

                renderProperty(data)
            })
    } else {
        fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/?hotel-name=${q}&city=${sessionStorage.getItem("des")}`)
            .then((res) => res.json())
            .then((data) => {
                sessionStorage.setItem("hotel", JSON.stringify(data));

                renderProperty(data)
            })
    }
}