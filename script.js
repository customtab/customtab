function search() {
    let query = document.getElementById("search").value
    if (query.length === 0) {
        return
        
    } else {
        window.open("https://www.google.com/search?q=" + query)
    }
}
inputId = document.getElementById('search');
inputId.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        search()
    }
});
