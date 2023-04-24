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
document.getElementById("wel").addEventListener("input", function() {
    p = document.getElementById("wel")
    localStorage.setItem('name', p.innerHTML)
}, false);

window.onload = function() {
    let username = localStorage.getItem('name')
    let p = document.getElementById("wel")
    if (username == null) {
        p.innerHTML = "User"
    } else {
        p.innerHTML = username
    }
}