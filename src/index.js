import "./styles.css";
import { pageLoad } from "./home";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener("click", () => alert("home clicked"));
menuBtn.addEventListener("click", () => alert("menu clicked"));
aboutBtn.addEventListener("click", () => alert("about clicked"));
console.log("Hello, are you hungry?");

pageLoad();
