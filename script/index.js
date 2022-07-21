const nameContainer = document.getElementById("name-container");
const modal = document.querySelector(".modal");

async function fetchData() {
  const result = await fetch("https://swapi.dev/api/people");
  const data = await result.json();
  const myResults = data.results;
  for (let i = 0; i < myResults.length; i++) {
    const singleperson = myResults[i];
    const singleList = document.createElement("li");
    singleList.innerText = singleperson.name;
    const singleHeight = document.createElement("li");
    singleHeight.innerText = singleperson.height;
    const singleGender = document.createElement("li");
    singleGender.innerText = singleperson.gender;
    singleList.onclick = () => {
      const divContainer = document.createElement("div");
      divContainer.setAttribute("class", "contentContainer");
      modal.classList.add("show-modal");
      modal.appendChild(divContainer); 
      let cancelBtn = document.createElement("h1");
      cancelBtn.innerHTML = `<h2>x</h2>`;
      divContainer.appendChild(cancelBtn);
      const image = document.createElement("img");
      image.setAttribute(
        "src",
        "https://i.pinimg.com/564x/9b/a2/57/9ba25796112cad616be27e473ae1e149--kids-cartoon-characters-childhood-characters.jpg"
      );
      image.setAttribute("alt", "A picture of Chery");
      divContainer.appendChild(image);
      const name = document.createElement("p");
      name.setAttribute("class", "name");
      name.innerHTML = `<h3> NAME: ${singleperson.name}</h3>`;
      divContainer.appendChild(name);
      const height = document.createElement("p");
      height.innerHTML = `<h3> HEIGHT: ${singleperson.height}</h3>`;
      divContainer.appendChild(height);
      const gender = document.createElement("p");
      gender.innerHTML = `<h3> GENGER: ${singleperson.gender}</h3>`;
      divContainer.appendChild(gender);
      cancelBtn.onclick = () => {
        divContainer.style.display = "none";
      };
    };
    nameContainer.appendChild(singleList);
  }
}
fetchData();
