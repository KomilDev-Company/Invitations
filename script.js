const weddingDate = new Date("March 30, 2030 13:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + " <span>kun</span>";
  document.getElementById("hours").innerHTML = hours + " <span>soat</span>";
  document.getElementById("minutes").innerHTML = minutes + " <span>daqiqalar</span>";
  document.getElementById("seconds").innerHTML = seconds + " <span>soniyalar</span>";

  if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "To'y boshlandi!";
  }
}

const interval = setInterval(updateCountdown, 1000);
