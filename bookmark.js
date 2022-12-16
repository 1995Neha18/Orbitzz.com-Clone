

async function fetchBooking(){
    
    try {
        let fetchHotels= await fetch("https://639ad40131877e43d677b046.mockapi.io/hotels",{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization : `Bearer ${sessionStorage.getItem("")}`
            }
        });

        if(fetchHotels.ok===true){
            alert("successfully fetched")
            let fetchData= await fetchHotels.json();
            renderHotels(fetchData);
        }
    } catch (error) {
        alert("Bad Request")
    }
}

fetchBooking();

// function renderHotels(data){
//     let main_container= document.getElementById("main-container");
//     main_container.innerHTML="";
//     data.forEach((el)=>{
       

//     })

// }
