let cont = document.querySelector("#searchedProperty")
let hotelarr = JSON.parse(localStorage.getItem("hotel")) || [];


function renderProperty() {
    hotelarr.forEach((element) => {

        let divrate = document.createElement("div");
        divrate.style.display = "flex";
        divrate.style.flexDirection = "row";
        divrate.style.marginLeft = "0px";
        divrate.style.padding = "0px";
        let div = document.createElement("div");
        let divinner = document.createElement("div");
        let d1 = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", element.img);

        let name = document.createElement("h3");
        name.innerText = (element.name).toUpperCase();
        name.style.color = "blue";


        let location = document.createElement("p");
        location.innerText = (element.location).toUpperCase();

        let rating = document.createElement("p");
        rating.innerText = "Rating: " + element.star + " Star";

        let tax = document.createElement("p");
        tax.innerText = "*inclusive of all taxes";
        tax.style.color = "blue";
        tax.style.fontStyle = "italic";

        // let price = document.createElement("h3");
        // price.innerText = "Rs. " + element.price + "/night";

        // let subtotal = document.createElement("h3");
        // subtotal.innerText = "Rs. " + (element.price * days * rooms) + " for " + days + " nights";

        let btn = document.createElement("button");
        btn.innerText = "Book Now";
        btn.addEventListener("click", function() {
            selectedproperty.push(element);
            localStorage.setItem("selectedproperty", JSON.stringify(selectedproperty));

            window.open("../html/selectedproperty.html", "_self");
        })


        divinner.append(name, location);

        for (let i = 0; i < element.star; i++) {
            let i1 = document.createElement("i");
            i1.setAttribute("class", "fa-sharp fa-solid fa-star")
            divrate.append(i1);
        }

        divinner.append(divrate, btn);
        div.append(img, divinner);
        cont.append(div);

    });
}
renderProperty(hotelarr);