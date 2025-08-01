export const aboutLoad = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const container = document.createElement("div");
  const overviewContainer = document.createElement("div");
  const overviewTitle = document.createElement("h1");
  const overviewText = document.createElement("p");
  overviewTitle.textContent = "Who we are";
  overviewText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  overviewContainer.append(overviewTitle, overviewText);

  const locationContainer = document.createElement("div");
  const locationTitle = document.createElement("h1");
  const locationText = document.createElement("p");
  locationTitle.textContent = "Loc";
  locationText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  locationContainer.append(locationTitle, locationText);

  const hoursContainer = document.createElement("div");
  const hoursTitle = document.createElement("h1");
  const hoursText = document.createElement("p");
  hoursTitle.textContent = "HOURS TITLE";
  hoursText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  hoursContainer.append(hoursTitle, hoursText);

  container.append(overviewContainer, locationContainer, hoursContainer);

  content.append(container);
};
