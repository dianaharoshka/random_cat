const catImage = document.getElementById("cat-image");
const newCatBtn = document.getElementById("new-cat-btn");
const loader = document.getElementById("loader");

async function fetchCat() {
  try {
    newCatBtn.disabled = true;
    newCatBtn.textContent = "Show Another Cat";
    catImage.style.display = "none";
    loader.style.display = "block";

    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    catImage.src = data[0].url;

    catImage.onload = () => {
      loader.style.display = "none";
      catImage.style.display = "block";
      catImage.classList.remove("fade-in");
      void catImage.offsetWidth;
      catImage.classList.add("fade-in");

      newCatBtn.disabled = false;
    };
  } catch (error) {
    console.error("Error fetching cat:", error);
    loader.style.display = "none";
    newCatBtn.textContent = "Try Again";
    newCatBtn.disabled = false;
  }
}

newCatBtn.addEventListener("click", fetchCat);

fetchCat();
