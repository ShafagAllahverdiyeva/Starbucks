let calories = document.querySelector(".calories");
let image = document.querySelector(".shortphoto");
let tall = document.querySelector(".tallphoto");
let grande = document.querySelector(".grandephoto");
let venti = document.querySelector(".ventiphoto");
let clicks = 0;
let clickstop = 0;
let clickstea = 0;
let order2 = 0;
let order = 0;
export function ordersec() {
    order2++;
    document.querySelector(".order").innerHTML = order2;
};
export function orders() {
    order++;
    document.querySelector(".order").innerHTML = order;
};
export function click() {
    clicks++;
    document.querySelector(".fl_p").innerHTML = clicks;
};
export function fminus() {
    if (clicks > 0) {
        clicks--;
        document.querySelector(".fl_p").innerHTML = clicks;
    }
};
export function clicktop() {
    clickstop++;
    document.querySelector(".top_p").innerHTML = clickstop;
};
export function minustop() {
    if (clickstop > 0) {
        clickstop--;
        document.querySelector(".top_p").innerHTML = clickstop;
    }
};
export function clicktea() {
    clickstea++;
    document.querySelector(".tea_p").innerHTML = clickstea;
};
export function minustea() {
    if (clickstea > 0) {
        clickstea--;
        document.querySelector(".tea_p").innerHTML = clickstea;
    }
};

export function changeColor() {
    if ((image.getAttribute("src")) !== "https://www.starbucks.com/app-assets/06ea008c02e29bbc7f8f9885c1f400f2.svg") {
        image.style.borderRadius = "30px"
        image.style.border = "2px solid #006241"
        image.style.background = "#d4e9e2"
        image.src = "https://www.starbucks.com/app-assets/06ea008c02e29bbc7f8f9885c1f400f2.svg";
        tall.src = "https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d3f83bb851eb6.svg";
        grande.src = "https://www.starbucks.com/app-assets/f1c3892d2d28cade899a1b6bd4ca5684.svg";
        venti.src = "https://www.starbucks.com/app-assets/8f4f6108fbeefb3455f09a631489b294.svg";
        tall.style.borderRadius = "0"
        tall.style.border = "0"
        tall.style.background = "white"
        grande.style.borderRadius = "0"
        grande.style.border = "0"
        grande.style.background = "white"
        venti.style.borderRadius = "0"
        venti.style.border = "0"
        venti.style.background = "white"
        calories.innerHTML = "5 "
        //axxcd
    }
}

export function changetallColor() {
    if ((tall.getAttribute("src")) !== "https://www.starbucks.com/app-assets/8f80d6b33459b4fada562d0c76fe0880.svg ") {
        tall.style.borderRadius = "30px"
        tall.style.border = "2px solid #006241"
        tall.style.background = "#d4e9e2"
        image.src = "https://www.starbucks.com/app-assets/0295bad53506b2b3c22b7e5a16fd1554.svg";
        tall.src = "https://www.starbucks.com/app-assets/8f80d6b33459b4fada562d0c76fe0880.svg";
        grande.src = "https://www.starbucks.com/app-assets/f1c3892d2d28cade899a1b6bd4ca5684.svg";
        venti.src = "https://www.starbucks.com/app-assets/8f4f6108fbeefb3455f09a631489b294.svg";
        image.style.borderRadius = "0"
        image.style.border = "0"
        image.style.background = "white"
        grande.style.borderRadius = "0"
        grande.style.border = "0"
        grande.style.background = "white"
        venti.style.borderRadius = "0"
        venti.style.border = "0"
        venti.style.background = "white"
        calories.innerHTML = "10 "

    }
}
export function changegrandeColor() {
    if ((grande.getAttribute("src")) !== "https://www.starbucks.com/app-assets/a35163e609f2058eee276482e80dc491.svg") {
        grande.style.borderRadius = "30px"
        grande.style.border = "2px solid #006241"
        grande.style.background = "#d4e9e2"
        image.src = "https://www.starbucks.com/app-assets/0295bad53506b2b3c22b7e5a16fd1554.svg";
        tall.src = "https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d3f83bb851eb6.svg";
        grande.src = "https://www.starbucks.com/app-assets/a35163e609f2058eee276482e80dc491.svg";
        venti.src = "https://www.starbucks.com/app-assets/8f4f6108fbeefb3455f09a631489b294.svg";
        image.style.borderRadius = "0"
        image.style.border = "0"
        image.style.background = "white"
        tall.style.borderRadius = "0"
        tall.style.border = "0"
        tall.style.background = "white"
        venti.style.borderRadius = "0"
        venti.style.border = "0"
        venti.style.background = "white"
        calories.innerHTML = "15 "

    }
}
export function changeventiColor() {
    if ((venti.getAttribute("src")) !== "https://www.starbucks.com/app-assets/a35163e609f2058eee276482e80dc491.svg") {
        venti.style.borderRadius = "30px"
        venti.style.border = "2px solid #006241"
        venti.style.background = "#d4e9e2"
        image.src = "https://www.starbucks.com/app-assets/0295bad53506b2b3c22b7e5a16fd1554.svg";
        tall.src = "https://www.starbucks.com/app-assets/d57860098a9c7cb67f0d3f83bb851eb6.svg";
        grande.src = "https://www.starbucks.com/app-assets/f1c3892d2d28cade899a1b6bd4ca5684.svg";
        venti.src = "https://www.starbucks.com/app-assets/f3bd2f05578777d6c1a667ad64630cb4.svg";
        image.style.borderRadius = "0"
        image.style.border = "0"
        image.style.background = "white"
        tall.style.borderRadius = "0"
        tall.style.border = "0"
        tall.style.background = "white"
        grande.style.borderRadius = "0"
        grande.style.border = "0"
        grande.style.background = "white"
        calories.innerHTML = "15 "

    }
}