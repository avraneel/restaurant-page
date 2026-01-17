import "./style.css"

console.log("Restaurant Page");

const content = document.querySelector("#content");

const title = document.createElement("h1");
title.textContent = "Seafood Dining";
content.appendChild(title);

const sectionHeaders = ["about", "reviews", "timetable", "contact"];

sectionHeaders.forEach((el) => {
    const section = document.createElement("section");
    section.classList.toggle(el);
    content.appendChild(section);
})

const aboutHeader = document.createElement("h2");
aboutHeader.textContent = "Who are we?";

const about = document.createElement("p");
about.textContent = "Seafood Dining brings the best and the freshest seafood right at your city! Our chefs have multiple awards and have years of experience in bringing you the best seafood like no one else.";

const prawns = document.createElement("div");
prawns.classList.toggle("image");

content.querySelector(".about").append(aboutHeader, about, prawns);

const quoteHeader = document.createElement("h2");
quoteHeader.textContent = "What people say about us?";

const quote = document.createElement("blockquote");
const quotetxt = document.createElement("p");
quotetxt.textContent = "The best prawns you will ever find!";
quote.appendChild(quotetxt);

const author = document.createElement("p");
const journal = document.createElement("cite");
journal.textContent = "The Food Journal";
author.textContent = "- John Smith, " + journal.textContent;

content.querySelector(".reviews").append(quoteHeader, quote, author);

const headers = ["Meal", "Time"];
const data = [
    [["Breakfast"], ["7AM - 11AM"]],
    [["Lunch"], ["1PM - 3:30PM"]],
    [["Dinner"], ["7PM - 11PM"]],
];

const timeHeader = document.createElement("h2");
timeHeader.textContent = "Timings"

const timetable = document.createElement("table");
timetable.classList.toggle("timings");
const headerRow = document.createElement("thead");

headers.forEach((el) => {
    const th = document.createElement("th");
    th.textContent = el;
    headerRow.appendChild(th);
});

timetable.appendChild(headerRow);

for(let i=0;i<data.length;i++) {
    const tr = document.createElement("tr");

    const meal = document.createElement("td");
    const timing = document.createElement("td");

    meal.textContent = data[i][0];
    timing.textContent = data[i][1];

    tr.appendChild(meal);
    tr.appendChild(timing);

    timetable.appendChild(tr);
}

document.querySelector(".timetable").append(timeHeader, timetable);

const contactHeader = document.createElement("h2");
contactHeader.textContent = "Contact Us";

const address = document.createElement("address");
const br = document.createElement("br");
address.append("123 Forest Road", br, "seafoodining@mail.com")

document.querySelector(".contact").append(contactHeader, address);