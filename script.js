const element=document.getElementsByTagName("body");
const startWatch=document.getElementById("start");
const stopwatch=document.getElementById("stopwatch");
let timerId;
let time;
let sec;





timerId =setInterval(watch,1000);
stopwatch.onclick=stopWatch; 

function watch() {
    let clock = new Date();
    
    time = `${clock.getHours()} : ${clock.getMinutes()}`;
            
    sec = clock.getSeconds();
    let date = `${clock.getDate()}-${clock.getMonth()+1}-${clock.getFullYear()}`;
    let am= clock.getHours()>=12 ? "pm" : "am";
    let day = clock.getDay();
    clock = clock.toLocaleString();
    document.getElementById("time").innerHTML= time;
    document.getElementById("date").innerHTML= date;
    document.getElementById("day").innerHTML= day;
    document.getElementById("am").innerHTML= am ;
    document.getElementById("sec").innerHTML= sec;
    
}
    
 
function stopWatch() {
    time=0;
    sec=0;
    clearInterval(timerId);
    document.getElementById("time").innerHTML= time;
    document.getElementById("sec").innerHTML= sec;
} 

