const category_title = document.querySelectorAll('.category-title')
const all_category_posts = document.querySelectorAll('.box')

for (let i = 0; i < category_title.length; i++) {
    category_title[i].addEventListener('click', filter_posts.bind(this, category_title[i]))
}

function filter_posts(item) {
    change_active_category(item);
    for (let i = 0; i < all_category_posts.length; i++) {
        if (all_category_posts[i].classList.contains(item.attributes.id.value)) {
            all_category_posts[i].style.display = "block"
        } else {
            all_category_posts[i].style.display = "none"
        }
    }
}

function change_active_category(activeItem) {
    for (let i = 0; i < category_title.length; i++) {
        category_title[i].classList.remove('active')
    }
    activeItem.classList.add('active')
};


//Get the button
var scroll_to_top_button = document.getElementById("to_top")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { show_after_scroll() }

function show_after_scroll() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scroll_to_top_button.style.display = "block"
    } else {
        scroll_to_top_button.style.display = "none"
    }
}

// When the user clicks on the button, scroll to the top of the document
function scroll_to_top() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

scroll_to_top_button.addEventListener("click", scroll_to_top)