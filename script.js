// const userList = document.getElementById("listOfUsers");
const listOfUsers = document.getElementById("listOfUsers");
// fetch api

fetch("https://randomuser.me/api?results=6")
  .then((res) => res.json())
  .then((data) => {
    //   console.log(data);
    const profile = data.results;
    profile.forEach((person) => {
      const pic = person.picture.thumbnail;
      var name = person.name.first + " " + person.name.last;
      const email = person.email;
      // console.log(pic,name,email)

      let user_list = document.createElement("li");
      user_list.innerHTML = `
    <img src="${pic}" alt="">
    <div class="bio">
        <p class="name-bold">${name}</p>
        <p class="role"> ${email}</p>
    </div>
    `;
      listOfUsers.appendChild(user_list);
    });
  })
  .catch((err) => console.error(err));

document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByTagName("li");

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
      const currentName =
        allNamesDOMCollection[counter].textContent.toLowerCase();

      if (currentName.includes(searchQuery)) {
        allNamesDOMCollection[counter].style.display = "flex";
      } else {
        allNamesDOMCollection[counter].style.display = "none";
      }
    }
  });
