// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let sec =0;
let minutes =59;
let hour =23;
function updateCounter(){
    sec++;
    if (sec===60){
        sec =0;
        minutes++;
    }
    if (minutes===60){
        minutes=0;
        sec=0;
        hour++;
    }
    if (hour===24){
        hour=0;
        minutes=0;
        sec = 0;
    }
    console.log(`${hour}:${minutes}:${sec}`)
}

interval = setInterval(updateCounter,1000);