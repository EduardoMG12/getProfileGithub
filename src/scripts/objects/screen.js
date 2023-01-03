import { randomColor } from "../randomColor.js";

const screen = {
  userProfile: document.querySelector(".profile-data"),

  renderUser(user) {
    if (user.name) {
      this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="foto de perfil do usuário" />
            <div class="data">
                <h1>${user.name ?? "Não possui nome cadastrada 😢"}</h1>
                <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                <p>total de repositórios publicos:${user.repositoriesQuantity}</p>
                <p>Seguindo:${user.followers}</p>
                <p>Seguidores:${user.following}</p>
            </div>
        </div>`;
    } else this.userProfile.innerHTML = `<p>Prencha o campo com um nome de usuário do Github</p>`;
    let repositoriesItens = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItens += `
        <li>
            <a href="${repo.html_url}" target="_blank" style="background-color: ${randomColor()}">
                ${repo.name}
                <div class="repositories-emojis">
                  <p>🍴${repo.forks}</p>
                  <p>🔥${repo.stargazers_count}</p>
                  <p>👀${repo.watchers}</p>
                  <p>👨‍💻${repo.language}</p>
                </div>
            </a>
        </li>`)
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
