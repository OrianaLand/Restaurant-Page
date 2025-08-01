import icon from "./images/cooking-icon.png";
const phoneIcon = document.createElement("img");
phoneIcon.src = icon;
phoneIcon.classList.add("small-screen-icon");

export const bookingLoad = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const form = document.createElement("form");

  const name = document.createElement("p");
  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  nameLabel.setAttribute("for", "name-input");
  nameInput.id = "name-input";
  nameInput.type = "text";
  nameLabel.textContent = "Name:";
  name.append(nameLabel, nameInput);

  const lastname = document.createElement("p");
  const lastnameLabel = document.createElement("label");
  const lastnameInput = document.createElement("input");
  lastnameLabel.setAttribute("for", "lastname-input");
  lastnameInput.id = "lastname-input";
  lastnameInput.type = "text";
  lastnameLabel.textContent = "Lastname:";
  lastname.append(lastnameLabel, lastnameInput);

  const phone = document.createElement("p");
  const phoneLabel = document.createElement("label");
  const phoneInput = document.createElement("input");
  phoneLabel.setAttribute("for", "phone-input");
  phoneInput.id = "phone-input";
  phoneInput.type = "text";
  phoneLabel.textContent = "Phone number:";
  phone.append(phoneLabel, phoneInput);

  const email = document.createElement("p");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  emailLabel.setAttribute("for", "email-input");
  emailInput.id = "email-input";
  emailInput.type = "email";
  emailLabel.textContent = "Email:";
  email.append(emailLabel, emailInput);

  const guests = document.createElement("p");
  const guestsLabel = document.createElement("label");
  const guestsInput = document.createElement("input");
  guestsLabel.setAttribute("for", "guests-input");
  guestsInput.id = "guests-input";
  guestsInput.type = "number";
  guestsLabel.textContent = "Guests:";
  guests.append(guestsLabel, guestsInput);

  const date = document.createElement("p");
  const dateLabel = document.createElement("label");
  const dateInput = document.createElement("input");
  dateLabel.setAttribute("for", "date-input");
  dateInput.id = "date-input";
  dateInput.type = "date";
  dateLabel.textContent = "Date:";
  date.append(dateLabel, dateInput);

  const time = document.createElement("p");
  const timeLabel = document.createElement("label");
  const timeInput = document.createElement("input");
  timeLabel.setAttribute("for", "time-input");
  timeInput.id = "time-input";
  timeInput.type = "time";
  timeLabel.textContent = "Time:";
  time.append(timeLabel, timeInput);

  const bookBtn = document.createElement("button");
  bookBtn.innerText = "Confirm table";
  bookBtn.classList.add("btn", "confirm-book-table");

  form.append(name, lastname, phone, email, guests, date, time, bookBtn);
  content.append(form, phoneIcon);
};
