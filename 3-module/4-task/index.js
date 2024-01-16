function showSalary(users, age) {
  // ваш код...
  return users
    .filter((item) => {
      return item.age <= age;
    })
    .map((item, index, array) => {
      let userString = `${item.name}, ${item.balance}`;

      return userString;
    })

    .join("\n");
}
