const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', ()=> {
    const links = document.getElementById('links');
    links.classList.toggle('show');
    menuBtn.classList.toggle('fa-x')
})