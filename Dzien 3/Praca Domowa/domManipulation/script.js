

// 1. Dodanie nowego elementu przy ładowaniu strony
const newElement = document.createElement("div");
newElement.classList.add("new-div");
newElement.textContent = "Dodany div do strony";
newElement.style.cssText = `
  background: red;
  padding: 10px;
  margin: 10px;
  width: 100px;
  height: 100px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
document.body.appendChild(newElement);

// 2. Zmiana koloru paragrafu
const firstParagraph = document.querySelector("p");
firstParagraph.style.cssText = `
color: green;
text-transform: uppercase;
font-weight: bold;
`

// 3.
const p2 = document.querySelector('#paragraph-for-button')
const button = document.querySelector('#changeColorBtn')

button.addEventListener('click', () => {
    p2.style.cssText = `
    background: black;
    color: white;
    padding: 10px;
    color: yellow;
    `
    button.style.cssText = `
    border-radius: 15px;
    background: yellow;
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
    `
})
