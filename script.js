//your code here
 const inputBox = document.getElementById("evaluatedText");
    const countDisplay = document.getElementById("letterCount");

    inputBox.addEventListener("input", () => {
      const length = inputBox.value.length;
      countDisplay.textContent = length;
    });