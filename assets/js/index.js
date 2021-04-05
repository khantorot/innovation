const config = {
    type: 'carousel',
    perView: 1,
    autoplay: 3000,
}
new Glide(".glide", config).mount()


const config_winner = {
    type: 'carousel',
    perView: 4,
    autoplay: false,
    breakpoints: {
        900: {
            perView: 1 
        }
    }
}
new Glide(".glide_winner", config_winner).mount()

loadIndex();

function loadIndex() {
    const card_container = document.querySelector('.card_container');
    let out = '';

    for(key in categories) {
        out += '<div class="card"><a href="./webinar.html" class="card_item">';
        out += '<div class="text_box"><h4>'+categories[key].title+'</h4><p>подробнее</p></div>';
        out += '<div class="img_box"><img src="./content/images/'+categories[key].image+'"></div>';
        out += '</a></div>';
    }
    card_container.innerHTML = out;
}


const cards = document.querySelectorAll('.card');

cards.forEach(element => {
    element.addEventListener('mousemove', startRotate);
    element.addEventListener('mouseout', stopRotate);
});

function startRotate(e) {
    const cardItem = this.querySelector('.card_item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + -(e.offsetY - halfHeight) / 7 + 'deg) rotateY(' + (e.offsetX - halfWidth) / 7 + 'deg)';
}

function stopRotate() {
    const cardItem = this.querySelector('.card_item');
    cardItem.style.transform = 'rotate(0)';
}



const video_source = document.querySelector('#video_source');
const video_play_btn = document.querySelector('.video_play_btn');

video_play_btn.addEventListener('click', function(){
    if (video_source.muted == false) {
        video_source.muted = true;
        this.classList.remove('play_video');
    } else {
        video_source.muted = false;
        this.classList.add('play_video');
    }
})