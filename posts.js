
let photos = []
const photos_lists = document.getElementById("photos_lists")
let page = 1
let limit_items = 0
const submit = document.getElementById("submit-btn")
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

    //   submit.addEventListener("click",()=>{
    //     handleChange()
    //   })

})

async function getPhotos() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit_items}`)
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
        <div class ="card-header">
      <h6> ${item.title}</h6> </div>
    <div class="card-body">
    <p>${item.body}</p></div>
   </div>`
        photos_lists.appendChild(col)
    })

}

function handleChange(event) {
    limit_items = +event.target.value
    // console.log(limit_items);

}
