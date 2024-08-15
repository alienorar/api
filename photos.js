
let photos = []
const photos_lists = document.getElementById("photos_lists")
let page = 1
let limit_items = 0
document.addEventListener("DOMContentLoaded", () => {
    getPhotos()
    document.getElementById("prev").addEventListener("click", () => {
        if (page !== 1) {
            page--
            getPhotos()
        }
    })

    document.getElementById("next").addEventListener("click", () => {
        page++
        getPhotos()
    })

    handleChange()

})

async function getPhotos() {
    try {
        const response = await fetch(`http://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit_items}`)
        photos = await response.json()
    } catch (error) {
        console.log(error);

    }
    displayPhotos()
}

function displayPhotos() {
    photos_lists.innerHTML = ""
    photos.forEach((item) => {
        let col = document.createElement("div")
        col.className = 'col-md-3 my-2'
        col.innerHTML = ` <div class ="card">
    <div class="card-body">
    <img src="${item.url}" alt="${item.title}" class="w-100 h-100"/></div>
    <div class="card-footer"><p class="text-center">${item.title}</p></div></div>`
        photos_lists.appendChild(col)
    })

}

function handleChange(event) {
    limit_items = +event.target.value
    // console.log(limit_items);

}
