const join_items_link = document.querySelector('.join_items_link');

join_items_link.addEventListener('click', function(){
    const form_item_list_join = document.querySelectorAll('.form_item_list_join input');
    const form_item_list_form = document.querySelectorAll('.form_item_list_form input');

    for(let i = 0; i < form_item_list_join.length; i++) {
        if (form_item_list_join[i].checked == true) {
            form_item_list_form[i].checked = true;
        }
    }
    join.classList.remove('join_show');
    join_btn.classList.remove('join_btn_active');
})





const call_btn = document.querySelector('.call_btn');
const networks = document.querySelector('.networks');
const join = document.querySelector('.join');
const join_btn = document.querySelector('.join_btn');
const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');

call_btn.addEventListener('click', function () {
    networks.classList.toggle('networks_active');
})

join_btn.addEventListener('click', function () {
    join.classList.toggle('join_show');
    join_btn.classList.toggle('join_btn_active');
    menu.classList.remove('menu_show');
    menu_btn.classList.remove('menu_btn_active');
})

menu_btn.addEventListener('click', function () {
    menu.classList.toggle('menu_show');
    menu_btn.classList.toggle('menu_btn_active');
    join.classList.remove('join_show');
    join_btn.classList.remove('join_btn_active');
    networks.classList.toggle('networks_active1');
})


const container = document.querySelector('.container');

container.addEventListener('click', function(){
    join.classList.remove('join_show');
    join_btn.classList.remove('join_btn_active');
    menu.classList.remove('menu_show');
    menu_btn.classList.remove('menu_btn_active');
    networks.classList.remove('networks_active');
    networks.classList.remove('networks_active1');
})





function onlyOne(checkbox) {
    var checkboxes = document.querySelectorAll('.form_item_list input');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}



// menu link
let linkNav = document.querySelectorAll('[href^="#"]'),
    V = 0.222;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove('menu_show');
        menu_btn.classList.remove('menu_btn_active')
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);

        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
                r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
            window.scrollTo(0, r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
}



const hiden_block_btn = document.querySelector('.hiden_block_btn');
const hiden_block = document.querySelector('.hiden_block');


hiden_block_btn.addEventListener('click', function () {
    hiden_block.classList.toggle('hiden_block_show')
})



window.addEventListener('load', function(){
    setTimeout(function(){
        let preloaderEl = document.getElementById('preloader');
        preloaderEl.classList.add('hidden');
        preloaderEl.classList.remove('visible');
    }, 1000)
})
