const btn = document.querySelector(".dice-container");
const id = document.getElementById("advice-id");

fetch("quotes.json")
  .then((response) => response.json())
  .then((json) => {
    
    btn.addEventListener("click", () => {
      const randomNumber = randomNumberGenerator();
      const quote = document.querySelector(".quote");
      quote.textContent = json[randomNumber].quote;
      id.textContent = json[randomNumber].id;
    });
    
    randomNumberGenerator = () => {
      return Math.floor(Math.random() * json.length);
    };
  });
