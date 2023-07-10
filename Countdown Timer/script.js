const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime = (time)=>{
    return time < 10 ? `0${time}`: time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; //miliseconds

    //calculate days, hours, mins, secs from timeDifference
    let calcSecs = Math.floor(timeDifference/1000) % 60;
    let calcMins = Math.floor(timeDifference/1000/60) % 60;
    let calcHours = Math.floor(timeDifference/1000/60/60) % 24;
    let calcDays = Math.floor(timeDifference/1000/60/60/24);
    

    days.textContent = formatTime(calcDays);
    hours.textContent = formatTime(calcHours);
    mins.textContent = formatTime(calcMins);
    secs.textContent = formatTime(calcSecs);

}

const countDown = (targetDate) =>{
    setInterval(() => updateCountDown(targetDate),1000);
}


const targetDate = new Date("July 15 2023");
countDown(targetDate);
