// Script específico para el Modal con Grid
document.addEventListener("DOMContentLoaded", function () {
  var openGridModalBtns = document.querySelectorAll(".oval");
  var closeGridModalBtn = document.getElementById("closeGridModalBtn");
  var gridModal = document.getElementById("gridModal");

  openGridModalBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      gridModal.style.display = "block";
    });
  });

  closeGridModalBtn.addEventListener("click", function () {
    gridModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == gridModal) {
      gridModal.style.display = "none";
    }
  });
});
