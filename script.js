const sydBarBtn = document.getElementById('sidebar-dashes');
const sideBar = document.getElementById('sydBar');
const closeBarBtn = document.getElementById('close-bar');

sydBarBtn.addEventListener('click', function() {
    sideBar.classList.toggle('un-active-bar');
});

closeBarBtn.addEventListener('click', function() {
    sideBar.classList.toggle('un-active-bar');
});