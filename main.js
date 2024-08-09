let menu = document.querySelector('#menu_icon');
let nav_list = document.querySelector('.nav_list');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav_list.classList.toggle('open');
}


let dark_mode = document.querySelector('#dark_mode');

dark_mode.onclick = () => {
    if(dark_mode.classList.contains('bx-moon')){
        dark_mode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }else{
        dark_mode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
}