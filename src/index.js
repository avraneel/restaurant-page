"use strict";

import "./style.css"
import { createContact } from "./contact.js"
import createMenu from "./menu.js";

console.log("Restaurant Page");

const content = document.querySelector("#content");

export default function createh2(text) {
    const h2 = document.createElement("h2");
    h2.textContent = text;
    return h2;
}

function createTimeTable() {
    const tableHeaders = ["Meal", "Time"];
    const tableData = [
        [["Breakfast"], ["7AM - 11AM"]],
        [["Lunch"], ["1PM - 3:30PM"]],
        [["Dinner"], ["7PM - 11PM"]],
    ];
    const timeHeader = createh2("Timings");
    const timetable = document.createElement("table");
    timetable.classList.toggle("timings");
    const headerRow = document.createElement("thead");

    tableHeaders.forEach((el) => {
        const th = document.createElement("th");
        th.textContent = el;
        headerRow.appendChild(th);
    });

    timetable.appendChild(headerRow);

    for(let i=0;i<tableData.length;i++) {
        const tr = document.createElement("tr");

        const meal = document.createElement("td");
        const timing = document.createElement("td");

        meal.textContent = tableData[i][0];
        timing.textContent = tableData[i][1];

        tr.append(meal,timing);

        timetable.appendChild(tr);
    }

    document.querySelector(".timetable").append(timeHeader, timetable);
}


function createHome() {

    const home = document.createElement("div");
    const title = document.createElement("h1");
    content.appendChild(home);
    title.textContent = "Seafood Dining";
    home.appendChild(title);

    const sectionHeaders = ["about", "reviews", "timetable", "contact"];

    sectionHeaders.forEach((el) => {
        const section = document.createElement("section");
        section.classList.toggle(el);
        home.appendChild(section);
    })

    const aboutHeader = createh2("Who are we?");

    const about = document.createElement("p");
    about.textContent = "Seafood Dining brings the best and the freshest seafood right at your city! Our chefs have multiple awards and have years of experience in bringing you the best seafood like no one else.";

    content.querySelector(".about").append(aboutHeader, about);

    const quoteHeader = createh2("What people day about us?");
    const quote = document.createElement("blockquote");
    const quotetxt = document.createElement("p");
    quotetxt.textContent = "The best prawns you will ever find!";
    quote.appendChild(quotetxt);

    const author = document.createElement("p");
    const journal = document.createElement("cite");
    journal.textContent = "The Food Journal";
    author.textContent = "- John Smith, " + journal.textContent;

    content.querySelector(".reviews").append(quoteHeader, quote, author);

    createTimeTable();
}

createHome();

document.querySelector(".homebtn").addEventListener("click", ()=> {
    content.innerHTML = "";
    createHome();
})

document.querySelector(".menubtn").addEventListener("click", ()=> {
    content.innerHTML = "";
    createMenu();
})

document.querySelector(".contactbtn").addEventListener("click", ()=> {
    content.innerHTML = "";
    createContact();
})