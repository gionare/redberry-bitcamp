
const button = document.getElementById("enter")

const login = document.querySelector(".logins")
const exit = document.querySelector(".exit")
button.addEventListener("click", () =>{
    login.style.display = "flex"
})


exit.addEventListener("click",() => {
    login.style.display = "none"
})


