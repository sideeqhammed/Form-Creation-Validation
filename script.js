document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user_name = document.getElementById("username");
    const username = user_name.value.trim();
    // console.log(name);

    const e_mail = document.getElementById("email");
    const email = e_mail.value.trim();

    const pass_word = document.getElementById("password");
    const password = pass_word.value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Please use a valid username");
    }

    if (!(email.includes("@") && email.includes("."))){
      isValid = false;
      messages.push("Please use a valid email");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Please use a valid password")
    }

    feedbackDiv.style.display = "block";

    if (isValid === true) {
      feedbackDiv.innerHTML = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    }else {
      feedbackDiv.innerHTML = messages.join("</br>");
      feedbackDiv.style.color = "#dc3545"
    }

    console.log(messages)
  })
})