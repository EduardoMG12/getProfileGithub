const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  repositoriesQuantity: "",
  followers: "",
  following: "",

  repositories: [],
  setInfo(githubUser) {
    this.avatarUrl = githubUser.avatar_url;
    this.name = githubUser.name;
    this.bio = githubUser.bio;
    this.userName = githubUser.login;
    this.followers = githubUser.followers;
    this.following = githubUser.following;
    this.repositoriesQuantity = githubUser.public_repos;
  },
  setRepositories(repositories) {
    console.log(repositories);
    this.repositories = repositories;
  },
};

export { user };
