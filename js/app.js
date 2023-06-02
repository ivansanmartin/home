
const menuButton = document.getElementById("menu")
const navegator = document.getElementById("navegator")
const closeButton = document.getElementById("closeMenu")

menuButton.addEventListener("click", () => {
    navegator.classList.add("active")

})

closeButton.addEventListener("click", () => {
    navegator.classList.remove("active")
})
    