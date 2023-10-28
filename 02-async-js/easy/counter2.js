// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter=0;
let timeout;
function UpdateCounter(){
    counter++;
    console.log(counter);
    if(counter<10){
        timeout = setTimeout(UpdateCounter,1000);
    }
}

timeout = setTimeout(UpdateCounter);


