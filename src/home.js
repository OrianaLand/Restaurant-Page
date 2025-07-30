import CookIcon from "./images/cooking-icon.png"; // Default import the image so Webpack can handle it

export const pageLoad = () => {
  const content = document.querySelector("#content");
  const navbar = document.querySelector("nav");
  const icon = document.createElement("img");
  const headline = document.createElement("h2");
  const homeMessage = document.createElement("p");

  icon.src = CookIcon; // Use the imported path Webpack provides
  icon.alt = "Cooking icon";
  headline.textContent = "Welcome to Soul of flavors";
  homeMessage.textContent =
    "Step into a world where every bite tells a story. At Flavors of Joy, we blend tradition with creativity to serve dishes that delight the senses. Whether you're craving a comforting classic or an exciting new flavor, our kitchen crafts each plate with care, passion, and the freshest ingredients. Come hungry — leave inspired.";
  content.append(headline, homeMessage);
  navbar.prepend(icon);
};
