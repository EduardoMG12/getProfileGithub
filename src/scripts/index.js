import { user } from "./services/user.js";
import { repositories } from "./services/repositories.js";

document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  getUserProfile(userName);
  getRepositories(userName);
});

document.getElementById("input-search").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    const userName = document.getElementById("input-search").value;
    getUserProfile(userName);
    getRepositories(userName);
  }
});

const getUserProfile = (userName) => {
  user(userName).then((userData) => {
    let userInfo = `<div class="info">
                      <img src="${userData.avatar_url}" alt="foto de perfil do usuário" />
                      <div class="data">
                        <h1>${userData.name ?? "Não possui nome cadastrada 😢"}</h1>
                        <p>${userData.bio ?? "Não possui bio cadastrada 😢"}</p>
                      </div>
                      </div>

`;
    document.querySelector(".profile-data").innerHTML = userInfo;
  });
};
const getRepositories = (userName) => {
  repositories(userName).then((repositoysData) => {
    let repositorysItens = "";
    repositoysData.forEach((repo) => {
      repositorysItens += `<li><a href="${repo.html_url}" target="_blank" style="background-color:${randomColor()}">${
        repo.name
      }</a> </li>`;
    });
    document.querySelector(".profile-data").innerHTML += `
                                                          <div class="repositories section">
                                                            <h2>Repositórios</h2>
                                                            <ul>${repositorysItens}<ul>
                                                          </div>
                                                          `;
  });
};
const randomColor = () => {
  let characteres = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += characteres[Math.floor(Math.random() * 16)];
  }
  return color;
};
