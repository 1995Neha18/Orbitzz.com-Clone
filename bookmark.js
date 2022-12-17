

async function fetchBooking(){
    
    try {
        let fetchHotels= await fetch("https://639ad40131877e43d677b046.mockapi.io/bookmarks",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                
            }
        });

        if(fetchHotels.ok===true){
            
            let fetchData= await fetchHotels.json();
            console.log(fetchData)
            renderHotels(fetchData);
        }
        else{
            alert("unsuccessful for fetching bookmarks")
        }
    } catch (error) {
        // alert("Bad Request")
    }
}

fetchBooking();
let bookmarkdiv= document.getElementById("main-container")
function renderHotels(data){
   let bookmarkData= data.map((el)=>{
        
        return `<div class="container">
        <img src="${el["bookmark"].map((item)=>{
            return item["hotel-image-media src-3"]
        })}" alt="">
         <h1 id="name"> Hotel_Name: ${el["bookmark"].map((item)=>{
            
            return item["hotel-name"]
        })} </h1>
            <h6> City: ${el["bookmark"].map((item)=>{
                
                return item["city"]
            })}</h6>
           <h4 id="rating">Rating: ${el["bookmark"].map((item)=>{
            
            return item["rating"]
        })}</h4>
           <h2 id="entities">Popular Entities</h2>
           <div class="mini-fe">
              <div>
                  <div>
                      <i class="fa-solid fa-hot-tub-person"></i> <span>Hot Tub</span>
                  </div>
                  <div><i class="fa-sharp fa-solid fa-person-swimming"></i><span>Pool</span></div>
                  <div><i class="fa-solid fa-spa"></i><span>Spa</span></div>
                  <!-- <div><span class="reviews">See all amenities &#8594;</span></div> -->
              </div>
              <div>
                  <div><i class="fa-sharp fa-solid fa-wifi"></i><span>Free Wifi</span></div>
                  <div><i class="fa-solid fa-snowflake"></i><span>Air conditioning</span></div>
                  <div><i class="fa-solid fa-paw"></i><span>Pet friendly</span></div>
              </div>
          </div>
         <h2 id="price"> Total-Price: Rs ${el["bookmark"].map((item)=>{
            
            return item["total-price"]
        })}</h2>
         <div>
            
            <button onClick="deltrequest(this)" id="dltbtn" class="btn_Remove">Remove</button>
         </div>
    </div>`
    })
    
   let bookdata= bookmarkdiv.innerHTML=bookmarkData;
   return bookdata;
}

// let dlt=(el)=>{
//     el.parentNode.parentNode.remove();
// }

   async function deltrequest(){
    
    try {
        let dltbookmark= await fetch(`https://639ad40131877e43d677b046.mockapi.io/bookmarks`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application.json",
            },

        });
        
        // if(dltbookmark.ok===true){
        //     let dltItem= await dltbookmark.json()
        // }
    } catch (error) {
        alert("can't able to remove")
    }
   }