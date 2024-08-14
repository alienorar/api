const result = document.getElementById("result")

document.addEventListener("DOMContentLoaded", () => {
    getUsers()
})

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()
    displayUsers(users)
}

function displayUsers(users) {
    result.innerHTML = ""
    users.forEach((el, index) => {
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

    console.log(result);

}