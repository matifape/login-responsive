const botonLog = document.getElementById("botonLogin")
      botonSign = document.getElementById("botonRegistro")
      formRegister = document.querySelector(".register")
      formLogin = document.querySelector(".login")

botonLog.addEventListener("click", (e) => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

botonSign.addEventListener("click", (e) => {
    formRegister.classList.remove("hide");
    formLogin.classList.add("hide");
})