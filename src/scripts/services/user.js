import { baseUrl } from "../variables.js";

const user = async (userName) => {
  const response = await fetch(`${baseUrl}/${userName}`);
  return await response.json();
};
export { user };
