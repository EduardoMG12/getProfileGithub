document.getElementById("btn-search").addEventListener("click", () => {
  const userName = document.getElementById("input-search").value;
  getUserProfile("EduardoMG12");
});

const user = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  return await response.json();
};

const getUserProfile = (userName) => {
  user(userName).then((userData) => {
    let userInfo = `<img src="${userData.avatar_url}" alt="foto de perfil do usuário" />
                    <div class="data">
                        <h1>${userData.name ?? "Não possui nome cadastrada 😢"}</h1>
                        <p>${userData.bio ?? "Não possui bio cadastrada 😢"}</p>

`;
    document.querySelector(".profile-data").innerHTML = userInfo;
  });
};
