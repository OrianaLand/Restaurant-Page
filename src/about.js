export const aboutLoad = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("about-container");
  const overviewContainer = document.createElement("div");
  const overviewTitle = document.createElement("h1");
  const overviewText = document.createElement("p");
  overviewTitle.textContent = "Who we are";
  overviewText.textContent =
    "At Seoul & Spice, we blend the rich spices of Thai cooking with the bold, comforting flavors of Korean cuisine. Every dish is made with love, tradition, and a touch of modern flair.\n\nOur chefs draw inspiration from street markets in Bangkok and home kitchens in Seoul to craft a menu that balances sweet, spicy, savory, and umami. Whether you're craving a hearty bowl of bulgogi or the freshness of green curry, you'll find something that excites your palate and warms your soul.";
  overviewContainer.append(overviewTitle, overviewText);

  const locationContainer = document.createElement("div");
  const locationTitle = document.createElement("h1");
  const locationText = document.createElement("p");
  locationTitle.textContent = "Location & Ambience";
  locationText.textContent =
    "Located in the heart of the city, Seoul & Spice is nestled between vibrant art galleries and cozy bookshops. We're just a five-minute walk from the central metro station, making us easily accessible for both locals and tourists.\n\nStep inside and you'll be greeted by warm lighting, natural wood textures, and subtle aromas of grilled meats and lemongrass. Whether you're dining solo or with friends, our inviting space offers a peaceful retreat from the urban rush — a perfect place to slow down, savor a meal, and enjoy the moment.";
  locationContainer.append(locationTitle, locationText);

  const hoursContainer = document.createElement("div");
  const hoursTitle = document.createElement("h1");
  const hoursText = document.createElement("p");
  hoursTitle.textContent = "Hours & contact";
  hoursText.textContent =
    "We’re open seven days a week to satisfy your cravings:\n\nMonday – Friday: 11:30 AM – 10:00 PM\nSaturday – Sunday: 12:00 PM – 11:00 PM\n\nGot questions or want to reserve a table over the phone?\nGive us a call at (555) 123-4567 — we'd love to hear from you!";
  hoursContainer.append(hoursTitle, hoursText);

  container.append(overviewContainer, locationContainer, hoursContainer);

  content.append(container);
};
