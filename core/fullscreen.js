let coreMainDocument = document.documentElement;
document.getElementById("body").addEventListener("load", function() {
  if (coreMainDocument.requestFullscreen) {
    coreMainDocument.requestFullscreen();
  } else if (coreMainDocument.mozRequestFullScreen) {
    coreMainDocument.mozRequestFullScreen();
  } else if (coreMainDocument.webkitRequestFullscreen) {
    coreMainDocument.webkitRequestFullscreen();
  } else if (coreMainDocument.msRequestFullscreen) {
    coreMainDocument.msRequestFullscreen();
  }
})