import icon from "./images/cooking-icon.png";
export const pageLoad = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const phoneIcon = document.createElement("img");
  phoneIcon.src = icon;
  phoneIcon.classList.add("small-screen-icon");

  const homeContent = document.createElement("div");
  homeContent.classList.add("home-content");

  const headline = document.createElement("h2");
  headline.textContent = "Welcome to Hua Mulan's Wok";

  const homeMessage = document.createElement("p");
  homeMessage.textContent =
    "Step into a world where every bite tells a story. At Flavors of Joy, we blend tradition with creativity to serve dishes that delight the senses. Whether you're craving a comforting classic or an exciting new flavor, our kitchen crafts each plate with care, passion, and the freshest ingredients. Come hungry — leave inspired.";

  homeContent.append(headline, homeMessage, phoneIcon);
  content.append(homeContent);
};

pageLoad();
