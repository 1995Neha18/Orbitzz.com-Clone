let allproperties = document.getElementById("allproperties");
let allhotels;
let cont = document.getElementById("displayArea")
allproperties.addEventListener("click", async() => {
    let res = await fetch("https://639ad40131877e43d677b046.mockapi.io/hotels/", {
        method: "GET"
    })
    if (res.ok) {
        allhotels = await res.json();
    }
    renderProperty(allhotels);
})

function renderProperty(allhotels) {
    cont.innerHTML = "";

    allhotels.forEach((element) => {

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


        cont.append(div);

    });
}

let prpopertybyid = document.getElementById("propertybyid");

prpopertybyid.addEventListener("click", () => {

    console.log("yes");
    cont.innerHTML = "";

    cont.innerHTML = `
    <div id=searchbyid>
    <label>ENTER ID:</label>
    <input type="number" placeholder="enter hotel id">
    <button id=search>Search</button>
    </div>
    `

})