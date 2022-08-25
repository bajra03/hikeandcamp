const cbox = document.querySelector('#checkbox-toggle');
const menuSection = document.getElementById('menu-section');

cbox.addEventListener('click', function (e) {
  menuSection.classList.toggle('active');
  document.body.classList.toggle('active');
});