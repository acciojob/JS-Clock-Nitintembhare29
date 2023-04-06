//your code here
function updateClock() {
  const now = new Date();
  const hourHand = document.querySelector("#hour-hand");
  const minuteHand = document.querySelector("#minute-hand");
  const secondHand = document.querySelector("#second-hand");
  
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;
  
  const secondDegrees = (seconds / 60) * 360;
  const minuteDegrees = ((minutes + (seconds / 60)) / 60) * 360;
  const hourDegrees = ((hours + (minutes / 60) + (seconds / 3600)) / 12) * 360;
  
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(updateClock, 1000);
