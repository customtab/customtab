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
function newshort() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
    
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
    
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
    modal.style.display = "none";
}}
function create() {
    let parent = document.getElementById("row-container")
    var modal = document.getElementById("myModal");
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    let imgurl = document.getElementById("imgurl").value;
    let newdiv = document.createElement("div")

    newdiv.onclick = window.location.href = url

    parent.insertBefore(newdiv, parent.lastChild.previousSibling);
    let divimg = document.createElement("img")
    divimg.src = imgurl
    newdiv.appendChild(divimg)

    let divname = document.createElement("h3")
    divname.innerHTML = name
    newdiv.appendChild(divname)

    let divp = document.createElement("p")
    divp.innerHTML = url
    newdiv.appendChild(divp)

    modal.style.display = "none";

    // Save the new shortcut to local storage
    let shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
    shortcuts.push({name, url, imgurl});
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
}

// Display the saved shortcuts on page load
window.onload = function() {
    let username = localStorage.getItem('name')
    let p = document.getElementById("wel")
    if (username == null) {
        p.innerHTML = "User"
    } else {
        p.innerHTML = username
    }

    let shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
    let parent = document.getElementById("row-container");
    for (let shortcut of shortcuts) {
        let newdiv = document.createElement("div")
        parent.insertBefore(newdiv, parent.lastChild.previousSibling);

        let divimg = document.createElement("img")
        divimg.src = shortcut.imgurl;
        newdiv.appendChild(divimg);

        let divname = document.createElement("h3")
        divname.innerHTML = shortcut.name;
        newdiv.appendChild(divname);

        let divp = document.createElement("p")
        divp.innerHTML = shortcut.url;
        newdiv.appendChild(divp);
    }
}
