const video_card_container = document.querySelector('.video_card_container');
let out = '';

for(key in lesson) {
    out += '<a href="' + lesson[key].link + '" class="video_card" target="_blank">';
    out += '<img src="./content/images/' + lesson[key].image + '" alt="video_img">';
    out += '<h4>' + lesson[key].title + '</h4>';
    out += '<p>' + lesson[key].description + '</p>';
    out += '<div class="play_link">смотреть</div>';
    out += '</a>';
}

video_card_container.innerHTML = out;

