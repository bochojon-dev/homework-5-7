const form = document.querySelector(".form");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputWebsite = document.querySelector(".website");
const inputMessage = document.querySelector(".message");
const cards = document.querySelector(".cards");
const DATA = [
  {
    name: "Maqsadjon",
    email: "mmanqsadjon@gmail.com",
    website: "website",
    message: "message",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUser = {
    id: `id-${new Date().getTime()}`,
    name: inputName.value,
    email: inputEmail.value,
    website: inputWebsite.value,
  };
  DATA.push(newUser);
  createUser(DATA);
  inputName.value = "";
  inputEmail.value = "";
  inputWebsite.value = "";
});

function createUser(data) {
  while (cards.firstChild) {
    cards.firstChild.remove();
  }
  data.forEach((user, index) => {
    let card = document.createElement("card");
    card.innerHTML = `
        <div class="img"></div>
        <h3>${user.name}</h3>
        <h5>${user.email} </h5>
        <p>${user.website} </p>
        <button onclick="deleteUser(${index})" class="btn-delete">Delete</button>
    `;
    cards.appendChild(card);
    card.style.background = "white";
    card.style.borderRadius = "25px";
    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    card.style.gap = "15px";
    card.style.padding = "20px";
    card.style.flexDirection = "column";
  });
}
createUser(DATA);

function deleteUser(index) {
  DATA.splice(index, 1);
  createUser(DATA);
}