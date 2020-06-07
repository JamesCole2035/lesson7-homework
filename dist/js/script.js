let email = document.getElementById("email");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let button = document.getElementById("button");
let message = document.getElementById("form__output");

button.addEventListener("click", () => {
	message.innerText = "Ваше имя: " + name.value + " Ваша фамилия: " + surname.value + " А ваш адрес электронной почты:   " + email.value + " Спасибо! Удачного дня!";
    console.log(message);

});
