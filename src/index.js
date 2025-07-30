import "./styles.css";
import { pageLoad } from "./home";
import { menuLoad } from "./menu";

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");

homeBtn.addEventListener("click", () => pageLoad());
menuBtn.addEventListener("click", () => menuLoad());
aboutBtn.addEventListener("click", () => alert("about clicked"));
console.log("Hello, are you hungry?");

pageLoad();
