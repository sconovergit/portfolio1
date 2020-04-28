/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("instagram").classList.toggle("mtop");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var insta = document.getElementsByClassName("instagram");
    var i;
    for (i = 0; i < insta.length; i++) {
      if (insta[i].classList.contains('mtop')) {
        openDropdown.classList.remove('mtop');
      }
    }
  }
}
