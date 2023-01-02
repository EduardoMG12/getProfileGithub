const randomColor = () => {
  let characteres = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += characteres[Math.floor(Math.random() * 16)];
  }
  return color;
};

export { randomColor };
