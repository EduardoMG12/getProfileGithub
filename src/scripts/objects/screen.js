import { randomColor } from "../randomColor.js";

const screen = {
  userProfile: document.querySelector(".profile-data"),

  renderUser(user) {
    this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="foto de perfil do usuário" />
            <div class="data">
                <h1>${user.name ?? "Não possui nome cadastrada 😢"}</h1>
                <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
            </div>
        </div>`;

    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) => (
        console.log(repo),
        (repositoriesItens += `
        <li>
            <a href="${repo.html_url}" target"_blank" style="background-color: ${randomColor()}">
                ${repo.name}
            </a>
        </li>`)
      )
    );

    if (user.repositories.length > 0)
      this.userProfile.innerHTML += `
                        <div class="repositories section">
                            <h2>Repositórios</h2>
                            <ul>${repositoriesItens}<ul>
                        </div>`;
  },
};

export { screen };