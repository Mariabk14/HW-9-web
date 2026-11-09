let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let contact = {
        firstName,
        lastName,
        phone,
        email
    };

    contacts.push(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    showContacts();

    this.reset();
});

function showContacts() {
    let list = document.getElementById("contactsList");

    list.innerHTML = "";

    contacts.forEach((contact, index) => {
        list.innerHTML += `
            <div>
                <h3>${contact.firstName} ${contact.lastName}</h3>
                <p>${contact.phone}</p>
                <p>${contact.email}</p>
                <button class="deleteBtn" data-index="${index}">
                    Delete
                </button>
            </div>
        `;
    });

    document.querySelectorAll(".deleteBtn").forEach(button => {
        button.addEventListener("click", function() {
            let index = Number(this.dataset.index);

            contacts.splice(index, 1);

            localStorage.setItem("contacts", JSON.stringify(contacts));

            showContacts();
        });
    });
}

showContacts();