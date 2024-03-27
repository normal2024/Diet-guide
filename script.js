function updateTime() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let timeString = hours + ":" + minutes + ":" + seconds;

  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let day = now.getDate().toString().padStart(2, "0");
  let dateString = day + "/" + month + "/" + year;

  document.getElementById("time").textContent = timeString;
  document.getElementById("date").textContent = dateString;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();
