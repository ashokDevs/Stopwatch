const hour=document.getElementById('hours');
const seconds=document.getElementById('seconds');
const minutes=document.getElementById('minutes');
const start=document.getElementById('start');
const stoper=document.getElementById('stop');
const reset=document.getElementById('reset');

let temp=0;


function countSeconds() {
   
    temp=temp+1;
    seconds.innerHTML=temp;
    if(temp==61){
        temp=0;
        temp=temp+1;
        seconds.innerHTML=temp;
    }
    else if(temp==60){
        seconds.innerHTML=0;
    }
    
}
function countMinutes() {
   
    temp=temp+1;
    minutes.innerHTML=temp;
    if(temp==61){
        temp=0;
        temp=temp+1;
        minutes.innerHTML=temp;
    }
    else if(temp==60){
        minutes.innerHTML=0;
    }
    
}
function countHours() {
   
    temp=temp+1;
    hour.innerHTML=temp;
    
    
}



start.addEventListener("click",  () => {
    timerId=setInterval(countSeconds, 1000);
    timerId2=setInterval(countMinutes, 60000);
    timerId3=setInterval(countHours, 3600000);
    start.style.visibility="hidden";
    stoper.style.visibility="visible";
});

stoper.addEventListener("click", ()=> {
    clearInterval(timerId);
    clearInterval(timerId2);
    clearInterval(timerId3);
    reset.style.visibility="visible";
    start.style.visibility="visible";
    stoper.style.visibility="hidden";
});

reset.addEventListener("click", ()=>{
    seconds.innerHTML="00";
    minutes.innerHTML="00";
    hour.innerHTML="00";
    temp=0;

})
