function getUser(id) {
  setTimeout(() => {}, 1000);
  if (id === 2) {
    throw new Error("404 - User does not exist");
  }
  return { id, name: "Daniel" };
}

try {
  const user = getUser(2);
  console.log(user);
} catch (error) {
  console.log("There was an error");
}
