export function createContact() {
    const content = document.querySelector("#content");

    const h2 = document.createElement("h2");
    h2.textContent = "Contact Us";

    const address = document.createElement("address");
    const br = document.createElement("br");
    address.append("123 Forest Road", br, "seafoodining@mail.com")

    const contact = document.createElement("section");
    contact.classList.toggle = "contact";
    contact.append(h2, address);

    content.appendChild(contact);
}