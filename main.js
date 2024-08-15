const result = document.getElementById("result")
let current_page = 1
let items_per_page = 2
let users = []
const pagination = document.getElementById("pagination")

document.addEventListener("DOMContentLoaded", () => {
    getUsers()
    displayUsers()
    paginationUsers()
})

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
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
        tr.innerHTML = `<td>${index + 1}</td>
         <td>${el.name}</td>
                        <td>${el.username}</td>
                        <td>${el.email}</td>
                        <td>${el.address.street}</td>
                        <td>${el.phone}</td>
                        <td>${el.website}</td>
                        <td>${el.company.name}</td>`
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