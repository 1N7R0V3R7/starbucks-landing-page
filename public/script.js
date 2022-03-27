const navBtn = document.getElementById("nav-btn");
const sidemenu = document.getElementById('sidemenu');
let menuOpen = false;
navBtn.addEventListener('click', () => {
    openNavBtn();
    if(!menuOpen) {
        sidemenu.style.width = "90%";
    }
    else {
        sidemenu.style.width = "0%";
    }
    menuOpen = !menuOpen;
    sidemenu.classList.toggle('opacity-0');
    document.getElementById('body').classList.toggle("fixed");
})

const openNavBtn = () => {
    navBtn.children[0].classList.toggle('my-1.5');
    navBtn.children[0].classList.toggle('absolute');
    navBtn.children[0].classList.toggle('rotate-45');
    navBtn.children[1].classList.toggle('hidden');
    navBtn.children[2].classList.toggle('my-1.5');
    navBtn.children[2].classList.toggle('-rotate-45');
}