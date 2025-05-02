const catImage = document.getElementById("cat-image");
const newCatBtn = document.getElementById("new-cat-btn");

async function fetchCat() {
  try {
    newCatBtn.disabled = true;
    newCatBtn.textContent = "Loading...";
    catImage.style.display = "none";

    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    catImage.src = data[0].url;

    catImage.onload = () => {
      catImage.style.display = "block";
      catImage.classList.remove("fade-in");
      void catImage.offsetWidth;
      catImage.classList.add("fade-in");

      newCatBtn.disabled = false;
      newCatBtn.textContent = "Show Another Cat";
    };
  } catch (error) {
    console.error("Error fetching cat:", error);
    newCatBtn.textContent = "Try Again";
    newCatBtn.disabled = false;
  }
}

newCatBtn.addEventListener("click", fetchCat);

fetchCat();
