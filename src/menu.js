"use strict";

import prawn from "./img/prawn.jpg";
import crab from "./img/crab.jpg";
import createh2 from "./index.js";
import pomfret from "./img/pomfret.jpg";

class MenuItem {
    constructor(name, imgpath) {
        this.dishname = name;
        this.imgpath = imgpath;
    }

    get img() {
        const img = document.createElement("img");
        img.src = this.imgpath;
        img.alt = this.dishname;
        img.loading = "lazy";
        return img;
    }

    get figure() {
        const fig = document.createElement("figure");
        const caption = document.createElement("figcaption");
        caption.textContent = this.dishname;
        fig.append(this.img, caption);
        return fig;
    }
};

export default function createMenu() {
    const content = document.querySelector("#content");

    const h2 = createh2("What do you want to have?");
    const menubody = document.createElement("div");

    const menuItems = [ 
        new MenuItem("Prawn Fries", prawn),
        new MenuItem("Crab Dishes", crab),
        new MenuItem("Pomfret Fries", pomfret),
    ];

    menuItems.forEach((el) => {
        menubody.appendChild(el.figure);
    });

    // TODO: Wrap menu in a section element and add css styling for proper size
    const menu = document.createElement("div");
    menu.classList.toggle("menu");
    menu.append(h2, menubody);
    content.append(menu);
}