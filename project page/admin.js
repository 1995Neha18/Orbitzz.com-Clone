let logo = document.querySelector("#left-section");
logo.addEventListener("click", () => {
    window.open("/index.html", "_self");
})

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
        name.innerText = element["hotel-name"];

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

        let h = document.createElement("h3")
        h.innerText = "Hotel ID:"

        let id = document.createElement("p");
        id.innerText = element["id"];
        id.setAttribute("id", "hotelid");

        divinner.append(h, id, name, location, i1, p, p1, p2, rev);

        divrprice.setAttribute("class", "price");


        div.append(img, divinner, divrprice);
        div.setAttribute("id", element.id);

        cont.append(div);

    });
}

let prpopertybyid = document.getElementById("propertybyid");

prpopertybyid.addEventListener("click", () => {


    cont.innerHTML = "";

    cont.innerHTML = `
    <div id=searchbyid>
    <label>Enter ID:</label>
    <input id="id" type="number" placeholder="Enter hotel id">
    <button id=search>Search</button>
    </div>
    `

    let btn = document.getElementById("search");
    btn.addEventListener("click", () => {

        let id = document.getElementById("id");
        id = id.value;
        getData(id);
    })

})

async function getData(id) {
    try {
        let res = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/${id}`)
        let data = await res.json();
        let out = [];
        out.push(data);


        if (res.ok) {
            alert("FOUND")
            renderProperty(out);
        } else {
            alert("PROPERTY DOES NOT EXIST")
        }
    } catch (error) {
        alert("No Property")
    }

}

let propertybyname = document.getElementById("propertybyname");
propertybyname.addEventListener("click", () => {
    cont.innerHTML = "";

    cont.innerHTML = `
    <div id=searchbyid>
    <label>Enter Name:</label>
    <input id="id" type="text" placeholder="Enter hotel Name">
    <button id=search>Search</button>
    </div>
    `

    let btn = document.getElementById("search");
    btn.addEventListener("click", () => {

        let name = document.getElementById("id");
        name = name.value;
        getDatabyname(name);
    })
})

async function getDatabyname(name) {
    let res = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/?hotel-name=${name}`)
    let data = await res.json();

    if (res.ok) {
        alert("FOUND")
        renderProperty(data);
    } else {
        alert("PROPERTY DOES NOT EXIST")
    }



}

let deletehotel = document.getElementById("delete");

deletehotel.addEventListener("click", async() => {
    let res = await fetch("https://639ad40131877e43d677b046.mockapi.io/hotels/", {
        method: "GET"
    })
    if (res.ok) {
        allhotels = await res.json();
    }
    alert("Select a Property to Delete");
    renderProperty(allhotels);



    let div = document.querySelectorAll("#displayArea>div");
    console.log(div);
    for (let di of div) {
        di.addEventListener("click", () => {


            deleteproperty(di.id);

        })
    }
})

async function deleteproperty(id) {
    let x = prompt("Enter Password to Make Chnages");
    if (x == "admin") {
        let res = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }

        })

        if (res.ok) {
            alert("Property Deletd")
        } else {
            alert("Something went wrong")
        }

    } else {
        alert("Wrong Password");
    }

}

let update = document.getElementById("update");
update.addEventListener("click", async() => {
    let res = await fetch("https://639ad40131877e43d677b046.mockapi.io/hotels/", {
        method: "GET"
    })
    if (res.ok) {
        allhotels = await res.json();
    }
    alert("Select a Property to update");
    renderProperty(allhotels);



    let div = document.querySelectorAll("#displayArea>div");
    console.log(div);
    for (let di of div) {
        di.addEventListener("click", () => {


            updatedata(di.id);

        })
    }
})

function updatedata(id) {
    console.log("1");
    cont.innerHTML = "";

    cont.innerHTML = `
    <div id=searchbyid>
    <label>Update Rating:</label>
    <input id="rating" type="text" placeholder="Enter hotel  Rating">
    <label>Price:</label>
    <input id="price" type="text" placeholder="Enter New Price">
    <button id=updatebtn>UPDATE</button>
    </div>
    `

    let updatebtn = document.getElementById("updatebtn");
    updatebtn.addEventListener("click", async() => {
        console.log("2");
        let obj = {
            "rating": document.getElementById("rating").value,
            "hotel-price": document.getElementById("price").value
        }

        let x = prompt("Enter Password to Make Chnages");
        if (x == "admin") {
            let res = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)

            })

            if (res.ok) {
                alert("Property Updated")
            } else {
                alert("Something went wrong")
            }

        } else {
            alert("Wrong Password");
        }
    })



}

let addnew = document.getElementById("addnew");
addnew.addEventListener("click", () => {
    let obj = {};
    cont.innerHTML = `
    <div id="addnewproperty">
    <label>Enter Hotel Name:</label>
    <input id="hotel-name"type="text" placeholder="Name" >
    <label>Enter Enter Location:</label>
    <input id="city"type="text" placeholder="Location" >
    <label>Enter image URL:</label>
    <input  id="hotel-image-media src-1"placeholder="URL">
    <label>Enter Rating:</label>
    <input id="rating" type=""number>
    <label>Enter Price:</label>
    <input id="hotel-price"type="number" placeholder="Price">
    <button id="add">ADD</button>
    </div>
    `

    let addbtn = document.getElementById("add");
    addbtn.addEventListener("click", () => {
        console.log("ADD");
        let allinputs = document.querySelectorAll("#cont input");
        for (let input of allinputs) {
            let key = input.id;
            obj[key] = input.value;
        }
        addnewProperty(obj);
        // console.log(obj);

    })



})

async function addnewProperty(obj) {


    let x = prompt("Enter Password to Make Chnages");
    if (x == "admin") {

        let res = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res.ok) {
            alert("Property Successfully added")
        } else {
            alert("Something went Wrong");
        }
    } else {
        alert("Wrong Password");
    }
}