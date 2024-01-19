let input = document.getElementById("email");
let submit_btn = document.querySelector(".btn");
let error = document.querySelector("#error");

submit_btn.addEventListener("click", (event) => {
  event.preventDefault();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailRegex.test(input.value)) {
    error.innerText = "";
  } else {
    error.innerText = "Oops! Please check your email";
  }
});

