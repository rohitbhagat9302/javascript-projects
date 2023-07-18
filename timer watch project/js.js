const timedisplay = document.querySelector("#timer");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");

let starttime = 0;
let elpasedtime = 0;
let pause = true;
let intervalid;
let hrs = 0;
let min = 0;
let sec = 0;

startbtn.addEventListener("click", () =>{
    if(pause){
        pause = false;
        starttime = Date.now() - elpasedtime;
        intervalid = setInterval(updatetime,1000);
    }
});
function updatetime(){
    elpasedtime = Date.now() - starttime;
    
    sec = Math.floor((elpasedtime / 1000) % 60);
    min = Math.floor((elpasedtime / (1000 * 60)) % 60);
    hrs = Math.floor((elpasedtime / (1000 * 60 * 60)) % 60);
    
    // for double zeros
    function btn(unit){
        return (("0" + unit).length > 2 ? unit : "0" + unit);
    }
    sec = btn(sec);
    min = btn(min);
    hrs = btn(hrs);
    timedisplay.textContent = `${hrs}:${min}:${sec}`;
}
pausebtn.addEventListener("click", () =>{
    if(!pause){
        pause = true;
        elpasedtime = Date.now() - starttime;
        clearInterval(intervalid);
    }
});
resetbtn.addEventListener("click", () =>{
    starttime = 0;
    elpasedtime = 0;
    pause = true;
    clearInterval(intervalid);
    hrs = 0;
    min = 0;
    sec = 0;
    timedisplay.textContent = "00:00:00";
});

