console.log('hello world detail')
const postBox = document.getElementById('post-box')
const alertBox = document.getElementById('alert-box')
const backBtn = document.getElementById('back-btn')
const updateBtn = document.getElementById('update-btn')
const deleteBtn = document.getElementById('delete-btn')

const url = window.location.href + "data/"
const updateUrl = window.location.href + "update/"
const deleteUrl = window.location.href + "delete/"

const updateForm = document.getElementById('update-form')
const deleteForm = document.getElementById('delete-form')

const spinnerBox = document.getElementById('spinner-box')

const nameInput = document.getElementById('id_name')
const surnameInput = document.getElementById('id_surname')

const csrf = document.getElementsByName('csrfmiddlewaretoken')

deleteForm.addEventListener('submit', e=>{
    e.preventDefault()

    $.ajax({
        type: 'POST',
        url: deleteUrl,
        data: {
            'csrfmiddlewaretoken': csrf[0].value,
        },
        success: function (response){
            window.location.href = window.location.origin
            localStorage.setItem('name', nameInput.value)
        },
        error: function (error){
            console.log(error)
        }
    })
} )