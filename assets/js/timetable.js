loadPanel();

function loadPanel() {
    const list_select = document.querySelector('.list_select');
    let out = '';

    out += 'Направление';
    out += '<select name="select" id="select">';
    out += '<option value="name">Все</option>';
    for (key in categories) {
        out += '<option value="'+ key +'">'+ categories[key].title +'</option>';
    }
    out += '<select>'
    list_select.innerHTML = out;
}