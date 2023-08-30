let menu = document.querySelector('#menu-bar');

window.onscroll = () => {
  menu.classList.remove('fa-times')
  navbar.classList.remove('active')
}

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
})

function myFunction() {
  document.getElementById("formal1").submit();
}

;
