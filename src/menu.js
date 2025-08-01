function createItem(name, price) {
  return { name, price };
}

function createCategory(title, items) {
  return { title, items };
}

const appetizers = [
  createItem("Kimchi Pancakes", "$6"),
  createItem("Thai Spring Rolls", "$5"),
  createItem("Mandu (Korean Dumplings)", "$6"),
  createItem("Satay Chicken Skewers", "$7"),
];

const mains = [
  createItem("Pad Thai", "$12"),
  createItem("Bulgogi Beef", "$14"),
  createItem("Korean Hot Fried Chicken", "$13"),
  createItem("Thai Green Curry", "$12"),
];

const beverages = [
  createItem("Thai Iced Tea", "$4"),
  createItem("Soju Cocktail", "$6"),
  createItem("Korean Rice Punch (Sikhye)", "$3"),
  createItem("Lemongrass Iced Tea", "$4"),
];

const categories = [
  createCategory("Appetizers", appetizers),
  createCategory("Main Dishes", mains),
  createCategory("Beverages", beverages),
];

import icon from "./images/cooking-icon.png";
const phoneIcon = document.createElement("img");
phoneIcon.src = icon;
phoneIcon.classList.add("small-screen-icon");

export const menuLoad = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  for (let i = 0; i < categories.length; i++) {
    const card = document.createElement("div");
    const cardTitle = document.createElement("h2");

    cardTitle.classList.add("card-title");
    card.classList.add("card");

    cardTitle.textContent = categories[i].title;

    card.append(cardTitle);

    for (let j = 0; j < categories[i].items.length; j++) {
      const item = document.createElement("div");
      item.classList.add("menu-item");

      const itemName = document.createElement("p");
      itemName.classList.add("item-name");
      itemName.textContent = categories[i].items[j].name;

      const itemPrice = document.createElement("p");
      itemPrice.classList.add("item-price");
      itemPrice.textContent = categories[i].items[j].price;

      item.append(itemName, itemPrice);
      card.append(item);
    }
    menuContainer.append(card);
  }
  menuContainer.append(phoneIcon);
  content.append(menuContainer);
};
