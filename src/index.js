import "./styles.css";
import { pageLoad } from "./home";
import { menuLoad } from "./menu";
import { aboutLoad } from "./about";
import { bookingLoad } from "./booking";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const bookBtn = document.querySelector(".book-table");

homeBtn.addEventListener("click", () => pageLoad());
menuBtn.addEventListener("click", () => menuLoad());
aboutBtn.addEventListener("click", () => aboutLoad());
bookBtn.addEventListener("click", () => bookingLoad());
console.log("Hello, are you hungry?");

pageLoad();
