let searcg_btn = document.querySelector("#searchbtn");
searcg_btn.addEventListener("click", async() => {

    let destination = document.querySelector("#searchinput").value;
    console.log(destination);

    try {
        let res = await fetch(`https://639acb4b31877e43d6767159.mockapi.io/hotels?city=${destination}`, {
            method: 'GET'
        })
        if (res.ok) {
            let data = await res.json();
            console.log(data);
            localStorage.setItem("hotel", JSON.stringify(data));
            window.open("property.html", "_self");

        }
    } catch (error) {

    }


})

async function getData() {


    try {
        let res = await fetch("../json/hotel.json")
        let out = await res.json();

        let q = document.querySelector("#searchinput").value;
        if (q == "") {
            alert("Please enter Destination")
        } else {
            let newData = out.filter(function(elem) {
                return elem.city.includes(q.toLowerCase());
            })
            let d1 = document.getElementById("d1").value;
            let d2 = document.getElementById("d2").value;
            if (d1 == "" || d2 == "") {
                alert("Enter dates")
            } else {
                let dateOne = new Date(d1);
                let dateTwo = new Date(d2);
                let time = Math.abs(dateTwo - dateOne);
                let days = Math.ceil(time / (1000 * 60 * 60 * 24));
                if (days == 0) { days = 1 }
                console.log(days);

                let room = document.getElementById("num").value;
                if (room <= 0 || room == "") { room = 1 };


                localStorage.setItem("hotel", JSON.stringify(newData));
                localStorage.setItem("days", days);
                localStorage.setItem("rooms", room);
                localStorage.setItem("des", document.getElementById("searchinput").value);
                localStorage.setItem("d1", d1);
                localStorage.setItem("d2", d2);

                window.open("../html/search.html", "_self");
            }
        }
    } catch (err) {
        alert(err);
    }
}