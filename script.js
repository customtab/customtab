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
    }
}

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
    }
}

function create() {
    let parent = document.getElementById("row-container");
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    let imgurl = document.getElementById("imgurl").value;
    
    // Remove specified characters from the URL
    newurl = url.replace(/^(https?:\/\/)?(www\.)?/i, "").replace(/\/$/, "");
    
    let newdiv = document.createElement("div");
    newdiv.className = "shortcut";
  
    // Create and append child elements to the new div
    let divimg = document.createElement("img");
    divimg.src = imgurl;
    newdiv.appendChild(divimg);
  
    let divname = document.createElement("h3");
    divname.innerHTML = name;
    newdiv.appendChild(divname);
  
    let divp = document.createElement("p");
    divp.innerHTML = newurl;
    newdiv.appendChild(divp);
  
    let del = document.createElement("button")
    del.innerHTML = "Delete"
    newdiv.appendChild(del)
  
    del.addEventListener("click", function(e) {
      let choice = prompt('Do you want to delete the shortcut? Type "Yes" to confirm.')
      if (choice == "Yes") {
        e.preventDefault();
        parent.removeChild(newdiv);
        let index = shortcuts.findIndex(
          (s) =>
            s.name === name &&
            s.url === url &&
            s.imgurl === imgurl
        );
        if (index !== -1) {
          shortcuts.splice(index, 1);
          localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
        }
        return
      } else {
        return
      }
    })
  
    // Add a click event listener to take the user to the URL of the shortcut
    newdiv.addEventListener("click", function() {
      window.open(url)
    });
  
    // Add the new div to the container and close the modal
    parent.insertBefore(newdiv, parent.lastChild.previousSibling);
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  
    // Save the new shortcut to local storage
    let shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
    shortcuts.push({
      name,
      url,
      imgurl
    });
    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
}  


function loadShortcuts() {
    let username = localStorage.getItem('name')
    let p = document.getElementById("wel")
    if (username == null) {
        p.innerHTML = "User"
    } else {
        p.innerHTML = username
    }
    let shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
    let parent = document.getElementById("row-container");

    shortcuts.forEach((shortcut) => {
        let newdiv = document.createElement("div");
        newdiv.className = "shortcut";

        let divimg = document.createElement("img");
        divimg.src = shortcut.imgurl;
        newdiv.appendChild(divimg);

        let divname = document.createElement("h3");
        divname.innerHTML = shortcut.name;
        newdiv.appendChild(divname);

        let divp = document.createElement("p");
        newurl = shortcut.url.replace(/^(https?:\/\/)?(www\.)?/i, "").replace(/\/$/, "");
        divp.innerHTML = newurl;
        newdiv.appendChild(divp);

        let del = document.createElement("button")
        del.innerHTML = "Delete"
        newdiv.appendChild(del)

        // Add an event listener to the shortcut div that opens the URL in a new tab when clicked
        newdiv.addEventListener('click', () => {
            window.open(shortcut.url, '_blank');
        });

        del.addEventListener('click', (event) =>{
            let choice = prompt('Do you want to delete the shortcut? Type "Yes" to confirm.')
            if (choice == "Yes") {
                console.log(newdiv)
                parent.removeChild(newdiv); // Remove the div from the webpage

                let shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
                let index = shortcuts.findIndex(
                    (s) => s.name === shortcut.name && s.url === shortcut.url && s.imgurl === shortcut.imgurl
                );
                if (index !== -1) {
                    shortcuts.splice(index, 1);
                    localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
                }
            }
        });

        parent.insertBefore(newdiv, parent.lastChild.previousSibling);
    });
}

window.onload = loadShortcuts()