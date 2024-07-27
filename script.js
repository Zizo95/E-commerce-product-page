
const mainImage = document.querySelector(".main-image");
 const smallImages = document.querySelectorAll(".image-1");
 const iconMinus = document.querySelector(".icon-minus");
 const iconPlus = document.querySelector(".icon-plus");
 const amountElm = document.querySelector(".amount");
 const menu = document.querySelector(".icon-menu");
 const navBar = document.querySelector("nav");
 const close = document.querySelector(".icon-close");

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

menu.addEventListener("click", () => {
navBar.style.display = "block";
})

close.addEventListener("click", () => {
    navBar.style.display = "none";
    })