document.addEventListener("DOMContentLoaded", function () {
  var openModalBtns = document.querySelectorAll('.openModal');
  var closeModalBtns = document.querySelectorAll('.close-grid-modal');

  openModalBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
          var modalId = btn.getAttribute('data-modal');
          var modal = document.getElementById(modalId);

          if (modal) {
              modal.style.display = 'block';
              document.body.style.overflow = 'hidden';
          }
      });
  });

  closeModalBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
          var modalId = btn.getAttribute('data-modal');
          var modal = document.getElementById(modalId);

          if (modal) {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto';
          }
      });
  });

  window.addEventListener('click', function (event) {
      closeModalBtns.forEach(function (btn) {
          var modalId = btn.getAttribute('data-modal');
          var modal = document.getElementById(modalId);

          if (modal && event.target === modal) {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto';
          }
      });
  });
});
