const config = {
    type: 'carousel',
    perView: 1,
    autoplay: 5000,
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