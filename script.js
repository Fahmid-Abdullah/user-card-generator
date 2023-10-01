let desc = document.querySelector(".desc");
let imgContainer = document.querySelector(".img-container");
let getBtn = document.getElementById("get-btn");
let url = "https://random-data-api.com/api/v2/users?response_type=json";



let getUser = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      imgContainer.innerHTML = `<img src= ${data.avatar}>`;
      desc.innerHTML = `
      <h2>${data.first_name} ${data.last_name}</h2>
      <h3><i class="fa-solid fa-user"></i>${data.gender}</h3>
      <h3><i class="fa-solid fa-bars"></i>${data.employment.title}</h3>
      <h3><i class="fa-solid fa-toolbox"></i> ${data.employment.key_skill}</h3>
      <h4><i class="fa-solid fa-location-dot"></i> ${data.address.city}</h4>`;
      let rndColor =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      document.documentElement.style.setProperty("--theme-color", rndColor);
    });
};
window.addEventListener("load", getUser);
getBtn.addEventListener("click", getUser);







