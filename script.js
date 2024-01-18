let [seconds,minutes,hours]=[0,0,0]
let clock=document.querySelector(".time")
let i=1 

function starttime() {
    seconds++
    if(seconds===60){
        seconds=0
        minutes++
        if (minutes===60) {
            minutes=0
            hours++
        }
    }
    showTime()
}
 
function showTime(){
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    clock.innerHTML=h+':'+m+":"+s;
}

function stoptime() {
    if(timer!==null){
        clearInterval(timer)
    }
    i=1
}



function resetime() {
    if(timer!==null){
        clearInterval(timer)
    }
    minutes=0
    seconds=0
    hours=0
    showTime()
    i=1
}
function strtime() {
    if (i===1){
        timer=setInterval(starttime,1000);
        i++
    }
    else{
        records()
    }
}

function records() {
    let li=document.createElement('li');
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds
    li.innerHTML=h +":"+m+":"+s
    lap=document.querySelector(".laps")
    lap.appendChild(li);
}