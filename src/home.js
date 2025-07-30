export const pageLoad = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const headline = document.createElement("h2");
  const homeMessage = document.createElement("p");
  headline.textContent = "Welcome to Soul of flavors";
  homeMessage.textContent =
    "Step into a world where every bite tells a story. At Flavors of Joy, we blend tradition with creativity to serve dishes that delight the senses. Whether you're craving a comforting classic or an exciting new flavor, our kitchen crafts each plate with care, passion, and the freshest ingredients. Come hungry — leave inspired.";
  content.append(headline, homeMessage);
};

pageLoad();
