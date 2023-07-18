function showMenu() {

    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";  
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
}
}
window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
} )