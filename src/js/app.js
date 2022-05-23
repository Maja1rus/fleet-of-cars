import { countFn } from "./modules/count.js";
import { nav } from "./modules/nav.js";

try {
    const countItems = document.querySelectorAll('.count');
    if (countItems.length > 0) {
        countFn(countItems)
    }
} catch (error) {
    console.log(error);
}

try {
    const header = document.querySelector('.header')
    if (header) {
        nav(header)
    }
} catch (error) {
    console.log(error);
}