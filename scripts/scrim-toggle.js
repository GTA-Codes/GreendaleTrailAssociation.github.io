let scrim = document.querySelector('.scrim');
let drawer = document.querySelector('.menu__input');
scrim.addEventListener('click', () => {
    drawer.checked = !drawer.checked;
})