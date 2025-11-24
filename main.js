document.getElementById('burger').addEventListener('click', function() {
    document.getElementById('header-menu').classList.toggle('-open');
    document.getElementById('curtain').classList.toggle('-open');
});

document.getElementById('curtain').addEventListener('click', function() {
    document.getElementById('header-menu').classList.toggle('-open');
    document.getElementById('curtain').classList.toggle('-open');
});

document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('header-menu').classList.remove('-open');
    document.getElementById('curtain').classList.remove('-open');
});