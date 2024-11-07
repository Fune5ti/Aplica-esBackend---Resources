function getUser(id) {
  setTimeout(() => {}, 1000);
  if (id === 2) {
    return "404 - User does not exist";
  }
  return { id, name: "Daniel" };
}

try {
  const user = getUser(2);
  console.log(user);
} catch (error) {
  console.log(error);
}
