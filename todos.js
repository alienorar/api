const result = document.getElementById("result")
let current_page = 1
let items_per_page = 20
let users = []
const pagination = document.getElementById("pagination")

document.addEventListener("DOMContentLoaded", () => {
    getUsers()
    displayUsers()
    paginationUsers()
})

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        users = await response.json()
        console.log(users);

        displayUsers()
    } catch (error) {
        console.log(error);

    }

}

function displayUsers() {
    result.innerHTML = ""
    let start_index = (current_page - 1) * items_per_page
    let end_index = start_index + items_per_page
    let pagination_users = users.slice(start_index, end_index)
    pagination_users.forEach((el, index) => {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td>${el.id}</td>
                        <td>${el.title}</td>
                        <td>${el.completed}</td>`
        result.appendChild(tr)
    });
    paginationUsers()
    // console.log(result);

}

function paginationUsers() {
    pagination.innerHTML = ""
    let page_count = Math.ceil(users.length / items_per_page)
    for (let i = 1; i <= page_count; i++) {
        let btn = document.createElement("button")
        btn.innerText = i
        btn.className = current_page === i ? "btn btn-success mx-1" : "btn btn-outline-success mx-1"
        btn.addEventListener("click", () => {
            current_page = i
            displayUsers()
        })
        pagination.appendChild(btn)
    }
}