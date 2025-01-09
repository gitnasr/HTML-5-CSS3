const TableBody = document.getElementById('tbody-data')

function renderTable() {
    const items = JSON.parse(localStorage.getItem('users'))
    if (items) {
        TableBody.innerHTML = ''
        items.forEach((item) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.email}</td>
            <td><button onclick="deleteItem(${item.id})">Delete</button></td>
            `
            TableBody.appendChild(tr)
        })
    }
}

function deleteItem(id) {
    const items = JSON.parse(localStorage.getItem('users'))
    const newItems = items.filter((item) => item.id !== id)
    localStorage.setItem('users', JSON.stringify(newItems))
    renderTable()
}

renderTable()