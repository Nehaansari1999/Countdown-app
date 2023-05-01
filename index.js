const endDate = "23 December 2022 03:45 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () => {
//}

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    // if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

}


clock();


/** 
 * 1 day = 24 hrs
 * 1 hrs = 60mins
 * 60 min = 3600sec
*/

setInterval(
    () => {
        clock()
    },
    1000
)