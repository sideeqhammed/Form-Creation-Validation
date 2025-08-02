// const { createRef, createElement } = require("react");

async function fetchUserData()  {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    // const users = users_arr.map(user => user.name)
    // console.log(users)
    dataContainer.innerHTML = ""

  const userList = document.createElement("ul")
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
    // console.log(li)
  }); 
  dataContainer.appendChild(userList)
  // console.log(userList)
  

    // let userList = "<ul>"
    // users.forEach(user => {
    //   userList += `<li>${user.name}</li>`
    // });
    // userList += "</ul>"
    // console.log(userList);
    // dataContainer.innerHTML = userList;

    // for (const key in users) {
    //   const value = users[key]
    //   dataContainer.innerHTML += `<li>${value}</li>`
    // }

  } catch (err) {
    dataContainer.innerHTML = ""
    dataContainer.innerHTML = `Failed to load user data.`
  }
}

document.addEventListener("DOMContentLoaded", (fetchUserData))
// fetchUserData()