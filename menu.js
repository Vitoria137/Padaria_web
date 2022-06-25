const menu = document.querySelector('.menu-nav');
const botao = document.querySelector('.nav-info');
const menuHeader = document.querySelector('.menu-lateral-header')

botao.addEventListener('click', () =>{
    menu.classList.toggle('menu-nav-ativo')
    menuHeader.classList.toggle('menu-lateral-header-ativo')
})