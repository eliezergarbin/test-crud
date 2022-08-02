'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "eliezer",
    email: "eliezergarbin1@gmail.com",
    celular: "0099988887",
    cidade: "Tupã"
}

// CRUD
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'));
    db_client.push(client)
    localStorage.setItem("db_client", JSON.stringify(db_client))
}


//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)