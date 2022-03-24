let id = document.getElementById('id') id.addEventListener('click', e => {
    console.log(e.target.id)
})
let name = document.getElementById('name') id.addEventListener('click', e => {
    consolelog(e.target.name)
})
let ext = document.getElementById('ext') id.addEventListener('click', e => {
    consolelog(e.target.ext)
})
let email = document.getElementById('email') id.addEventListener('click', e => {
    consolelog(e.target.email)
})
let department = document.getElementById('department') id.addEventListener('click', e => {
    consolelog(e.target.department)
})
let btn = document.getElementById('addemp')
btn.addEventListener('click', displayResult)

function displayResult() {
    console.log()
}