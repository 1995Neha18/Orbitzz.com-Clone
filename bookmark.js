let bookArr=[]
async function fetchBooking(){
    
    try {
        let fetchHotels= await fetch("https://639ad40131877e43d677b046.mockapi.io/bookmarks");

        if(fetchHotels.ok){
            
            let fetchData= await fetchHotels.json();
            // console.log(fetchData)
            bookArr=[...fetchData]
            console.log(bookArr)
            renderHotels(fetchData);
        }
        else{
            alert("unsuccessful for fetching bookmarks")
        }
    } catch (error) {
        alert("Bad Request")
        console.log(error)
    }
}

fetchBooking();

let bookmarkdiv= document.getElementById("main-container")

function renderHotels(fetchData){
bookmarkdiv.innerHTML=""
    fetchData.forEach((elem) => {
        let bookmark_child_div=document.createElement("div")
        let img_div=document.createElement("div");
        let img=document.createElement("img")
        img.setAttribute("src",elem["hotel-image-media src-1"]);
        img_div.append(img);

        let details_div=document.createElement("div");
        let hotel_name=document.createElement("h2");
        hotel_name.innerText=elem["hotel-name"];
        let reating=document.createElement("p");
        reating.innerText=elem["reviews"];
        let entities=document.createElement("p");
        entities.innerText="Popular Entities";

        let logo_div=document.createElement("div");
        logo_div.innerHTML=`<div class="mini-fe">
        <div>
            <i class="fa-solid fa-hot-tub-person"></i> <span>Hot Tub</span>
        </div>
        <div><i class="fa-sharp fa-solid fa-person-swimming"></i><span>Pool</span></div>
        <div><i class="fa-solid fa-spa"></i><span>Spa</span></div>

        <div><i class="fa-sharp fa-solid fa-wifi"></i><span>Free Wifi</span></div>
        <div><i class="fa-solid fa-snowflake"></i><span>Air conditioning</span></div>
        <div><i class="fa-solid fa-paw"></i><span>Pet friendly</span></div>
    </div>`

        let price=document.createElement("h2");
        price.innerText=`$${elem["hotel-price"]}/day`;

        let btn_div=document.createElement("div");
        let reserve_btn=document.createElement("button");
        reserve_btn.innerText="Reserve"
        reserve_btn.addEventListener("click", reserveFunction)
        function reserveFunction(){
            let otp=prompt("Please enter the OTP for reservation");
                    if(otp==1234){
                        alert("Reservation Successful")
                    }else{
                        alert("Wrong OTP Try Again")
                    }
        }
        let remove_btn=document.createElement("button");
        remove_btn.innerText="Remove"
        remove_btn.addEventListener("click",removeFunction)
        function removeFunction(){
            let id= elem.id;
            console.log(id)
            deletefunction(id)
        }
        btn_div.append(reserve_btn,remove_btn);
        details_div.append(hotel_name,reating,entities,logo_div,price,btn_div);
        bookmark_child_div.append(img_div,details_div)
        bookmarkdiv.append(bookmark_child_div)
    });
}

async function deletefunction(id){
    try {
        let res= await fetch(`https://639ad40131877e43d677b046.mockapi.io/bookmarks/${id}`,{
            method : "DELETE",
            headers : {
                "Content-Type": "application/json"
            }
        })
        if(res.ok){

            // console.log(bookArr)
            fetchBooking()
            // window.addEventListener(())
        }else{
            alert("Check before delete")
        }
    } catch (error) {
        alert(error)
        
    }
}
