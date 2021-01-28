const menuButton = document.querySelector('#burger_button');

menuButton.addEventListener('click', function(e) {
    // toggle the burger open/close animation
    menuButton.classList.toggle('change');
});