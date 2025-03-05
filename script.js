let body = document.querySelector("body");
let moon = document.getElementById("moon");
let moon1 = document.getElementById("moon1");
let sun = document.getElementById("sun");
let sun1 = document.getElementById("sun1");
let headerTop = document.getElementById("headerTop")
let firstImg = document.getElementById("firstImg")
let secondImg = document.getElementById("secondImg")
let chevronLeft = document.getElementById("chevronLeft")
let chevronRight = document.getElementById("chevronRight")
let menuBar = document.getElementById("menu-bar")
let menuBarOpen = document.getElementById("menu_bar")
let closeMenu = document.getElementById("closeMenu")



moon.onclick = function(){
    body.classList.toggle("moonLight");
    moon.style.display = "none"
    sun.style.display = "block"
}
sun.onclick = function(){
    body.classList.toggle("moonLight");
    sun.style.display = "none"
    moon.style.display = "block"
}
moon1.onclick = function(){
    body.classList.toggle("moonLight");
    moon1.style.display = "none"
    sun1.style.display = "block"
}
sun1.onclick = function(){
    body.classList.toggle("moonLight");
    sun1.style.display = "none"
    moon1.style.display = "block"
}

chevronRight.onclick = function(){
    firstImg.classList.toggle("goRight")
    secondImg.classList.toggle("goMiddle")
}
chevronLeft.onclick = function(){
    firstImg.classList.toggle("goRight")
    secondImg.classList.toggle("goMiddle")
}
menuBar.onclick = function(){
    menuBarOpen.classList.add("goMiddle")
}
closeMenu.onclick = function(){
    menuBarOpen.classList.remove("goMiddle")
}

let mainCards = document.getElementById("mainCards");

document.addEventListener("DOMContentLoaded", addCards);

async function addCards() {

    let response = await fetch("https://fakerapi.it/api/v2/books?_quantity=24")
    let data = await response.json();
    let books = data.data;
    mainCards.innerHTML = "";
    books.forEach(book => {
        mainCards.innerHTML += `
        <div class="mainCards" id="mainCards">
            <div class="mainCardsImg">
                <img src="https://picsum.photos/200/300?_random=${Math.floor(Math.random() * 100) + 1}" alt="Book Cover">
            </div>
            <div class="mainCardsTitle">
                <p class="genre">${book.genre}</p>
                <p class="name bookName">${book.title}</p>
                <p class="author">${book.author}</p>
                <p class="cost">${"$" + Math.floor(Math.random() * 100 + 1) }</p>
            </div>
            <div class="mainCardsButtons">
                <button>Add to Cart</button>
                <i class='bx bx-heart'></i>
                <i class='bx bx-dots-vertical-rounded'></i>
            </div>
        </div>
        `;
    });
}


let repost = document.getElementById("repost");
let searchInput = document.getElementById("searchInput");
let bookName = document.getElementById("bookName");




function searchFunction(inpValue) {
    const bookTitles = document.querySelectorAll('.bookName');

    bookTitles.forEach((title) => {
        if (title.textContent.toLowerCase().includes(inpValue.value.toLowerCase())) {
            title.parentElement.parentElement.style.display = "block";
        } else {
            title.parentElement.parentElement.style.display = "none";
        }
    });
}

