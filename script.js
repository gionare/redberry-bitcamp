const image = Array.from(document.getElementsByClassName("image"));
const blogSection = document.querySelector(".cards");
const categorySection = document.querySelector(".categories");
let isClicked = false;

let category = "  ";

categorySection.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;
  console.log(button);

  if (!isClicked) {
    isClicked = true;
    button.style.border = "2px solid black";
    category = button.textContent.trim();
    getUserData();
    render();
  } else {
    isClicked = false;
    button.style.border = "none";
  }
});

async function getUserData() {
  try {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();

    console.log(data);
    if (!response.ok) {
      throw new Error("Failed to get data");
    }

    const filteredData = data.filter((item, index) =>
      item.categories.find((item2) => item2.name === category)
    );
    if (filteredData.length === 0) return data;
    return filteredData;
  } catch (error) {
    console.log(error.message);
  }
}

getUserData();

async function render() {
  const data = await getUserData();
  console.log(data);
  let blogs = data
    .map(
      (item) => `<div class="card">
<section class="image">
<img src = "${item.image}" alt="">
</section>
<section class="title">
  <section class="title-author-releaseDate">
    <h5>${item.author}</h5>
    <span>${item.publication_date}</span>
  </section>
  <section class="title-heading">
<h3>${item.title}</h3>
  </section>
    
    <ul class="mutual-categories">
    
    ${item.categories.map(
      (cat) =>
        `<li style="color: ${cat.text_color}; border-radius:30px; height:28px; background-color: ${cat.background_color}">${cat.name}</li>`
    )}
 
    </ul>
     <p class="about-title">${item.description}</p>
     <section class="see-more">
      <a href="">სრულად ნახვა</a>
      <img src="./assets/Arrow.svg" alt="">
     </section>
</section>


</div>`
    )
    .join(" ");

  blogSection.innerHTML = blogs;
}

render();

const enter = document.getElementById("enter");
console.log(enter);

const login = document.querySelector(".login");
const exit = document.querySelector(".exit");

const submit = document.querySelector("#submit");

const loginHeader = document.querySelector(".login-header");

const authorization = document.querySelector(".authorization");
enter.addEventListener("click", () => {
  login.style.display = "flex";
});

exit.addEventListener("click", () => {
  login.style.display = "none";
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  loginHeader.style.display = "none";
  authorization.style.display = "flex";
});

const okay = document.querySelector(".okay");

okay.addEventListener("click", (e) => {
  e.preventDefault();
  login.style.display = "none";
});
