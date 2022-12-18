let bookmarksData = []
let obj = {}
let mainsection = document.getElementById("main");
let hotelImgsection = document.getElementById("hotel-img")
let hotelDetails = document.getElementById("hotel-details");
let hotelid = sessionStorage.getItem("hotelid");
let userID = sessionStorage.getItem("userid");
let city = sessionStorage.getItem("city");
// console.log(hotelid)
hotelPage()
async function hotelPage() {
    try {
        let res = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels/${hotelid}`);
        if (res.ok == true) {
            let output = await res.json()
            bookmarksData = [output];
            // obj=output;
            // console.log(obj)
            // console.log(hotelid)
            sessionStorage.setItem("city", output.city);
            renderProductpage(output)
            // console.log(bookmarksData)
            // console.log(output["hotel-image-media src-1"])

        } else {
            alert("Bad request! Maybe you are missing your access token.")
        }
    }
    catch (err) {
        alert(`${err} happend`)
    }
}
let roomArr = []
async function hotelroomPage() {
    try {
        let roomRes = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotel-rooms`);
        if (roomRes.ok) {
            let roomoutput = await roomRes.json();
            roomArr = [...roomoutput]
            renderRoompage(roomArr)
        } else {
            alert("Please try later")
        }
        // console.log(roomoutput);
    } catch (error) {
        alert(`Something worng ${error}`)
    }
}
hotelroomPage()

function renderProductpage(output) {
    //     // mainsection.innerHTML="";
    let hotelData = `
        <div class="img-left">
        <img src="${output["hotel-image-media src-1"]}"
                alt="Img-1">
                </div>
                <div class="img-right">
                <div><img
                    src="${output["hotel-image-media src-2"]}"
                    alt="Img-2"></div>
            <div><img
                    src="${output["hotel-image-media src-3"]}"
                    alt=""></div>
                    <div><img
                    src="${output["hotel-image-media src-4"]}"
                    alt=""></div>
                    <div><img
                    src="https://images.trvl-media.com/hotels/1000000/470000/465100/465005/60f296fc.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"
                    alt=""></div>
        </div>`
    let hotelDetailsData = `<div id="hotel-details-details">
    <div>
    <div>
    <h1>${output["hotel-name"]}</h1>
   </div>
   <div><span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star"></span>
       <span class="fa fa-star"></span>
       </div>
       <div>
       <h3> ${output["reviews"]}</h3>
       </div>
   <div>
   <p class="reviews"> See all reviews &#8594;</p>
   </div>
</div>
   <h3>Popular amenities</h3>
   <div id="top-bottom">
   <div id="mini-fe">
           <div>
           <div>
                   <i class="fa-solid fa-hot-tub-person"></i> <span>Hot Tub</span>
                   </div>
                   <div><i class="fa-sharp fa-solid fa-person-swimming"></i><span>Pool</span></div>
                   <div><i class="fa-solid fa-spa"></i><span>Spa</span></div>
               <div><span class="reviews">See all amenities &#8594;</span></div>
               </div>
           <div>
           <div><i class="fa-sharp fa-solid fa-wifi"></i><span>Free Wifi</span></div>
               <div><i class="fa-solid fa-snowflake"></i><span>Air conditioning</span></div>
               <div><i class="fa-solid fa-paw"></i><span>Pet friendly</span></div>
               </div>
               </div>
       <div id="google-map-mini">
       <div class="map">
       <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47544.037529784255!2d72.83169105113112!3d19.064280060402854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1671187344702!5m2!1sen!2sin"
       width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                   referrerpolicy="no-referrer-when-downgrade"></iframe>
                   </div>
           <div id="explore-area">
           <h3>Explore the area</h3>
               <div>
                   <div><i class="fa-solid fa-location-dot"></i><span>Miramar Beach</span></div>
                   <div><span class="walk">20 min walk</span></div>
               </div>
               <div>
               <div> <i class="fa-solid fa-location-dot"></i><span>Campal Gardens</span></div>
               <div><span class="walk">30 min walk</span></div>
               </div>
               <div>
               <div> <i class="fa-solid fa-location-dot"></i><span>Reis Magos Fort</span></div>
                   <div><span class="walk">15 min walk</span></div>
                   </div>
               <div>
               <div> <i class="fa-solid fa-plane-departure"></i><span>Goa (GOI-Dabolim)</span>
                   </div>
                   <div> <span class="walk">30 min walk</span></div>
                   </div>
                   </div>
                   </div>
   </div>`
    return {

        data1: ` ${hotelImgsection.innerHTML = hotelData}`,
        data2: `${hotelDetails.innerHTML = hotelDetailsData}`
    }
}

let reserve_btn = document.getElementById("resserve-button");
reserve_btn.addEventListener("click", reserveFunction);
function reserveFunction() {
    let otp = prompt("Please enter the OTP for reservation"); {
        if (otp == 1234) {
            alert("Reservation Successful")
        } else {
            alert("Wrong OTP Try Again")
        }
    }
}






let total_days;

let roomSection = document.getElementById("room-div");
let check_btn = document.getElementById("click-check-btn");
check_btn.addEventListener("click", checkfunction)
function checkfunction() {
    let checkin = document.getElementById("chekIn").value;
    let checkout = document.getElementById("checkOut").value;
    let dateOne = new Date(checkin);
    let dateTwo = new Date(checkout);
    let time = Math.abs(dateTwo - dateOne);
    let days = Math.ceil(time / (1000 * 60 * 60 * 24));
    if (days == 0) {
        days = 1;

    }
    sessionStorage.setItem("total-days", days);
    total_days = sessionStorage.getItem("total-days")

    renderRoompage(roomArr, total_days)

}
function renderRoompage(roomArr, total_days) {

    roomSection.innerHTML = "";
    let roomData = roomArr.map((item) => {
        // let a=10;
        // let total_price=item["option-price-1"]*total_days;
        // console.log(total_price)
        return `<div class="room-child-div">
    <div class="room-child-div-img">
    <img src="${item["hotel-room-image-media src-2"]}"
            alt="roomimg-1">
    </div>
    <div class="room-child-div-details">
        <div>
            <h2>${item["hotel-name"]}</h2>
        </div>
        <div>
            <p>${item.rating}</p>
            </div>
        <div class="room-heilights">
        <div><i class="fa-solid fa-box"></i></div>
            <div>
            <p class="sq-ft">${item["room-size"]}</p>
            </div>
        </div>
        <div class="room-heilights">
            <div> <i class="fa-solid fa-user-group"></i></div>
            <div>
            <p class="total-capacity">${item["total-people"]} </p>
            </div>
            </div>
            <div class="room-heilights">
            <div> <i class="fa-solid fa-bed"></i></div>
            <div>
                <p class="total-bed">${item["beds"]}</p>
            </div>
            </div>
        <div class="room-heilights">
            <div> <i class="fa-sharp fa-solid fa-wifi"></i></div>
            <div>
                <p> Free WiFi</p>
            </div>
        </div>
        <div class="room-heilights">
            <div> <i class="fa-solid fa-p"></i></div>
            <div>
                <p class="p"> Free self parking</p>
            </div>
        </div>
        <div class="room-heilights">
            <div> <i class="fa-solid fa-check"></i></div>
            <div>
                <p> Reserve now, pay later</p>
            </div>
        </div>
        <div>
            <P class="green-colour">Fully refundable<i class="fa-solid fa-circle-info"></i></P>
        </div>
        <div>
            <p>Before Thu, Jan 19</p>
        </div>
        <button>More details <span>></span></button>
    </div>
    <hr>
    <div class="extras-div">
        <h2>Extras</h2>
        <div class="input-box">
            <div><input type="radio" name="${item["hotel-name"]}" id="${item["hotel-name"]}-1" class="one" value="${item["option-price-1"]}"> <label for="${item["hotel-name"]}-1">No
                    extras
                </label></div>
            <div>
                <p>+$${item["option-price-1"]} </p>
            </div>
        </div>
        <div class="input-box">
            <div> <input type="radio" name="${item["hotel-name"]}" id="${item["hotel-name"]}-2"  value="${item["option-price-2"]}"> <label for="${item["hotel-name"]}-2">
                    Breakfast for 2 + Airport shuttle</label></div>
            <div>
                <p>+ $${item["option-price-2"]}</p>
            </div>
        </div>
        <div class="input-box">
            <div><input type="radio" name="${item["hotel-name"]}" id="${item["hotel-name"]}-3" value="${item["option-price-3"]}"> <label for="${item["hotel-name"]}-3">
                    Breakfast for 2 + Airport shuttle + Dinner + Special dea </label></div>
            <div>
                <p>+$${item["option-price-3"]}</p>
            </div>
        </div>
        <div class="input-box">
            <div> <input type="radio" name="${item["hotel-name"]}" id="${item["hotel-name"]}-4" value="${item["option-price-4-4"]}"> <label for="${item["hotel-name"]}-4">

                    Breakfast for 2 + Airport shuttle + Lunch + Dinner + Casino credit</label></div>
            <div><p>+$${item["option-price-4-4"]}</p></div>
        </div>
        <div class="room-price">
            <h1 id="price">$${item["option-price-1"] * total_days || item["option-price-1"] * 1}</h1>
            <div>
                <div>
                    <p>$${(item["option-price-1"] * total_days || item["option-price-1"] * 1)+50} total</p>
                    <p>includes taxes & fees</p>
                    <h4>Price details ></h4>
                </div>
                <div>
                    <p>We have 5 left</p>
                    <button class="room-reserve-btn">Reserve</button>
                </div>
            </div>
        </div>
    </div>
</div>`
    })

    roomSection.innerHTML = roomData.join(" ");
    let rooomReserve = document.querySelectorAll(".room-reserve-btn");
    for (let btn of rooomReserve) {
        btn.addEventListener("click", btnfunction)
        function btnfunction() {
            let otp = prompt("Please enter the OTP for reservation"); {
                if (otp == 1234) {
                    alert("Reservation Successful")
                } else {
                    alert("Wrong OTP Try Again")
                }
            }
        }
    }
}

let alsoLikearr = []
async function alsoLikehotels() {
    try {
        let alsoLike_res = await fetch(`https://639ad40131877e43d677b046.mockapi.io/hotels?city=${city}`)
        if (alsoLike_res.ok) {
            let output = await alsoLike_res.json();
            for (let i = 0; i < 3; i++) {
                alsoLikearr.push(output[i])
                alsoLike(alsoLikearr)
            }
        }
        else {
            alert("oops")
        }
    } catch (error) {
        alert(`Something wrong ${error}`)
    }
}
alsoLikehotels()
let alsoLikeDiv = document.getElementById("also-like-hotel-div");
function alsoLike(alsoLikearr) {
    let data = alsoLikearr.map((item) => {
        return `<div class="also-like-hotel-div">
        <div><img
                src="${item["hotel-image-media src-1"]}"
                alt="alsolike-img">
        </div>
        <div>
            <h2>${item["hotel-name"]}</h2>
            <p>Chapora</p>
            <i class="fa-sharp fa-solid fa-person-swimming"></i><span>Pool</span>
            <p>Fully refundable</p>
            <p>Reserve now, pay later</p>
            <div>
            
            <div>
                    <p><i class="fa-solid fa-money-bill"></i>Earn $6.19 Orbucks</p>
                    <p>${item["reviews"]}</p>
                    </div>
                <div>
                    <h1> $${item["hotel-price"]}</h1>
                    <p>$${item["total-price"]} total</p>
                    <p>includes taxes</p>
                    <p> & fees</p>
                </div>
            </div>
            
        </div>
    </div>`;
    });

    let fetchdata = alsoLikeDiv.innerHTML = data.join(" ");
    return fetchdata;
}
let save = document.getElementById("save-button");
save.addEventListener("click", bookmarks)
async function bookmarks() {


    try {

        let obj = {
            "userId": userID,
            "hotel-image-media src-1": bookmarksData[0]["hotel-image-media src-1"],
            "hotel-image-media src-2": bookmarksData[0]["hotel-image-media src-2"],
            "hotel-image-media src-3": bookmarksData[0]["hotel-image-media src-3"],
            "hotel-name": bookmarksData[0]["hotel-name"],
            "reviews": bookmarksData[0]["reviews"],
            "hotel-price": bookmarksData[0]["hotel-price"]
        }
        console.log(obj)
        let boookmarkRes = await fetch("https://639ad40131877e43d677b046.mockapi.io/bookmarks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (boookmarkRes.ok) {
            alert("Hurry, Hotel added to your trip");
        } else {
            alert("Bad request has been made.");
        }
    } catch (error) {
        alert("Data not fetch properly")
    }
}