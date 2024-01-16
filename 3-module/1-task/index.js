function namify(users) {
  // ваш код...
  let names = [];
  for (let i = 0; i <= users.length - 1; i++) {
    names.push(users[i].name);
  }
  return names;
}
