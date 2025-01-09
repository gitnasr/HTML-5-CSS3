const Store = []

const SaveButton = document.getElementById('save')
function resetInputs() {
    document.getElementById('uName').value = ''
    document.getElementById('uAge').value = ''
    document.getElementById('uEmail').value = ''
}


function addItem() {
    
    
    const userName = document.getElementById('uName').value 
    const userAge = document.getElementById('uAge').value 
    const userEmail = document.getElementById('uEmail').value 
    Store.push({
        name: userName,
        age: userAge,
        email: userEmail,
        id: Store.length 
    })
    localStorage.setItem('users', JSON.stringify(Store))
    
    resetInputs()
    
}



SaveButton.addEventListener('click', addItem)
