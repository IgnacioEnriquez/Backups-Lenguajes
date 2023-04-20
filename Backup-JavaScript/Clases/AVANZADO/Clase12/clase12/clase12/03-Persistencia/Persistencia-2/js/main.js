console.warn(document.querySelector('title').textContent)

const form = document.querySelector('form')

document.getElementById('save-local-storage').addEventListener('click', e => {
    let formData = new FormData(document.querySelector('form'))
    localStorage.setItem('nombre', formData.get('nombre'))
    localStorage.setItem('marca', formData.get('marca'))
    console.log('Almacenado en localStorage')
})

document.getElementById('get-local-storage').addEventListener('click', e => {
    console.log('nombre:', localStorage.getItem('nombre'))
    console.log('marca:', localStorage.getItem('marca'))
})


document.getElementById('save-session-storage').addEventListener('click', e => {
    let formData = new FormData(document.querySelector('form'))
    sessionStorage.setItem('precio', formData.get('precio'))
    sessionStorage.setItem('stock', formData.get('stock'))
    console.log('Almacenado en sessionStorage')
})

document.getElementById('get-session-storage').addEventListener('click', e => {
    console.log('precio:', sessionStorage.getItem('precio'))
    console.log('stock:', sessionStorage.getItem('stock'))
})

