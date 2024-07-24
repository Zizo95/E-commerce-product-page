
const mainImage = document.querySelector(".main-image");
 const smallImages = document.querySelectorAll(".image-1");
 const iconMinus = document.querySelector(".icon-minus");
 const iconPlus = document.querySelector(".icon-plus");
 const amountElm = document.querySelector(".amount");
 

 smallImages.forEach(smallImage => {
    smallImage.addEventListener("click", () => {
        mainImage.src = smallImage.src.replace('-thumbnail', '')
    })
 })


 iconMinus.addEventListener("click", (e) => {
    e.preventDefault();
    let inputValue = parseInt(amountElm.textContent, 10);
    if (inputValue > 0) {
        inputValue--;
        amountElm.textContent = inputValue;
    }
});

iconPlus.addEventListener("click", (e) => {
    e.preventDefault();
    let inputValue = parseInt(amountElm.textContent, 10);
    if (!isNaN(inputValue)) {
        inputValue++;
        amountElm.textContent = inputValue;
    }
});