import * as st from './shortener.js';

let corePswdBlank = st.elemDefId('CORE-pswd-blank'),
  coreUsernameBlank = st.elemDefId("CORE-username-blank");

function updateLockClock() {
  let d = new Date();
  st.elemDefId("CORE-hr").innerText = d.getHours();
  st.elemDefId("CORE-mnt").innerText = d.getMinutes();
  st.elemDefId("CORE-mth").innerText = d.getMonth();
  st.elemDefId("CORE-day").innerText = d.getDate();
  st.elemDefId("CORE-yr").innerText = d.getFullYear();
}
setInterval(updateLockClock, 10);
window.addEventListener("load", function() {
  setTimeout(function() {
    st.elemDefId("CORE-loading").style.display = "none";
    st.firstOfClass("CORE-login").classList.replace('hidden', 'visible');
    setTimeout(function() {
      st.firstOfClass("CORE-login-box").classList.replace('hidden', 'visible');
      st.firstOfClass("CORE-time-box").classList.replace('hidden', 'visible');
    }, 1000)
  }, 3000)
});