
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];


function saveContact() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (firstName === "" || lastName === "" || phone === "" || email === "") {
        alert("Заповніть всі поля!");
        return;
    }

    let contact = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
    };

    contacts.push(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    showContacts();

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

function showContacts() {
    let list = document.getElementById("contactsList");
    list.innerHTML = "";

    for (let i = 0; i < contacts.length; i++) {
        list.innerHTML += `
            <div class="contact">
                <h3>${contacts[i].firstName} ${contacts[i].lastName}</h3>
                <p>Телефон: ${contacts[i].phone}</p>
                <p>Email: ${contacts[i].email}</p>

                <button onclick="editContact(${i})">Редагувати</button>
                <button onclick="deleteContact(${i})">Видалити</button>
            </div>
        `;
    }
}

function deleteContact(index) {
    contacts.splice(index, 1);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    showContacts();
}


function editContact(index) {
    let contact = contacts[index];

    document.getElementById("firstName").value = contact.firstName;
    document.getElementById("lastName").value = contact.lastName;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;

    contacts.splice(index, 1);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    showContacts();
}


showContacts();
