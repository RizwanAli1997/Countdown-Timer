const end_Date="26 February 2024 10:00 PM";
document.getElementById("end-date").innerText= end_Date;

const inputs=document.querySelectorAll("input")
function clock(){
    const end = new Date(end_Date)
    const now = new Date()
    const diff = (end - now)/1000;// convert into seconds

    if(diff<0) return;
    //convert into days
    inputs[0].value =Math.floor(diff/3600/24);
    //convert into hours
    inputs[1].value =Math.floor(diff/3600)% 24;
    // convert into Mintutes
    inputs[2].value =Math.floor((diff/60) % 60);
    // converts into Seconds
    inputs[3].value =Math.floor(diff) % 60;
}
// initial call
clock()

setInterval(
    ()=>{                   
      clock()
    },1000
)

// 1 day = 24 hrs
// 1 hr=60 mins
// 60 min = 3600 sec