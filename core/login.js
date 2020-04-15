function updateHugeClock() {
  let d = new Date();
  document.getElementById("CORE-hr").innerText = d.getHours();
  document.getElementById("CORE-mnt").innerText = d.getMinutes();
  document.getElementById("CORE-mth").innerText = d.getMonth();
  document.getElementById("CORE-day").innerText = d.getDate();
  document.getElementById("CORE-yr").innerText = d.getFullYear();
}
updateHugeClock();
setInterval(updateHugeClock, 10)
window.addEventListener("load", function() {
  setTimeout(function() {
    document.getElementById("CORE-loading").style.display = "none";
    console.log("log in");
    document.getElementsByClassName("CORE-login")[0].classList.replace('hidden', 'visible');
    setTimeout(function() {
      document.getElementsByClassName("CORE-login-box")[0].classList.replace('hidden', 'visible');
      document.getElementsByClassName("CORE-time-box")[0].classList.replace('hidden', 'visible');
    }, 1000)
  }, 3000)
});