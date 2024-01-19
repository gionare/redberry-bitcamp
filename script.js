const image = Array.from(document.getElementsByClassName("image"));
const blogSection = document.querySelector(".cards");

async function getUserData() {
  try {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Failed to get data");
    }

    let blogs = data
      .map(
        (item) => `<div class="card">
    <section class="image">
    <img src = "${item.image}" alt="">
    </section>
    <section class="title">
      <section class="title-author-releaseDate">
        <h5>${item.author}</h5>
        <span>${item.publish_date}</span>
      </section>
      <section class="title-heading">
    <h3>${item.title}</h3>
      </section>
        
        <section class="mutual-categories">
         ${item.categories.map(
           (cat) =>
             `<span style="color: ${cat.text_color}; background-color: ${cat.background_color}">${cat.name}</span>`
         )}
     
        </section>
         <p class="about-title">${item.description}</p>
         <section class="see-more">
          <a href="">სრულად ნახვა</a>
          <img src="./assets/Arrow.svg" alt="">
         </section>
    </section>

   
  </div>`
      )
      .join(" ");

    blogSection.insertAdjacentHTML("afterbegin", blogs);
  } catch (error) {
    console.log(error.message);
  }
}

getUserData();
