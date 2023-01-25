localStorage.setItem("username", "powertigers")
localStorage.setItem("password", "mayisthebesttaever")

function login() {
    let usernameInput = document.getElementById("username-input")
    let passwordInput = document.getElementById("password-input")
    let loginButton = document.getElementById("login-button")

    loginButton.addEventListener("click", (e) => {
        e.preventDefault()
        const username = localStorage.getItem("username")
        const password = localStorage.getItem("password")

        if (usernameInput.value === username && passwordInput.value === password) {
            alert("You have logged in.")
            setInterval(2000, window.location.href = "../index.html?artist=ironmaiden")
        }
        else {
            alert("Wrong username or password.")
        }
    })
}

window.onload = (
    login()
)

