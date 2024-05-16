const container = document.querySelector(".container")
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes =32; 

const generatePalette = () => {
    container.innerHTML = ""; //clearing the contaner
for (let i = 0 ; i < maxPaletteBoxes; i++) {
    //generating a random hec color code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6,"0")}`;
   

    //creating a new 'li' element and inserting it to the container
    const color = document.createElement("li")
    color.classList.add("color")
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                        <span class="hex-value">${randomHex}</span>`;
    container.appendChild(color)
}  
}
generatePalette();

refreshBtn.addEventListener("click",generatePalette);
  