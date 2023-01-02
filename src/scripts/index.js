import { getUser } from "./services/getUser.js";
import { getRepositories } from "./services/getRepositories.js";

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  getUserData(userName);
});

document.getElementById("input-search").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    const userName = document.getElementById("input-search").value;
    getUserData(userName);
  }
});

const getUserData = async (userName) => {
  const userResponse = await getUser(userName);
  const repositoriesResponse = await getRepositories(userName);

  user.setInfo(userResponse);
  user.setRepositories(repositoriesResponse);
  console.log(user);
  screen.renderUser(user);
};
