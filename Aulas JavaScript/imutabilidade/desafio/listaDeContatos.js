const contacts = [{ name: "Ana", phone: "1234-5678" }];

// Adicionar contatos
const addContacts = (contacts, name, phone) => {
    return [...contacts, {name, phone}]
}
console.log("Original", contacts)
console.log("Original adicionada", addContacts(contacts, "João", "8765-4321"))

// Atualizar contatos
const listaCompleta = addContacts(contacts, "João", "8765-4321")
const updateContacts = (contacts,name, newPhone) => {
    return contacts.map((contact) => contact.name === name ? {...contact, phone: newPhone} : contact)
}
console.log("Contato Atualizado", updateContacts(listaCompleta, "João", "0000-0000"))

// Remover contato
const removeContact = (contacts, name) => {
    return listaCompleta.filter((contact) => contact.name !== name)
}
console.log("Remover contato", removeContact(listaCompleta, "Ana"))