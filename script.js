const ul = document.querySelector('ul')
const input = document.querySelector('input')

const itemsList = []

input.addEventListener('keydown', (e) => {
    if (e.code.includes('Enter') && e.target.value) {
        itemsList.push(e.target.value)
        input.value=''
        loadItems()
    }
})

function loadItems() {
    ul.innerHTML = ''

    itemsList.forEach((item, i) => {
        const li = document.createElement('li')
        li.innerHTML = `
        <div>
            <span>${item}</span>
            <button onClick='removeItem(${i})'>x</button>
        </div>
        `;

        ul.appendChild(li)
    })
}

function removeItem(i) {
    itemsList.splice(i, 1)
    loadItems()
}