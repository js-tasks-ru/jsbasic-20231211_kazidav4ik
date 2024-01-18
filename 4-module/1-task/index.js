function makeFriendsList(friends) {
  // ваш код...
  let friendList = document.createElement("UL");
  for (let friend of friends) {
    friendList.insertAdjacentHTML(
      "beforeEnd",
      `<li >${friend.firstName} ${friend.lastName}</li>`
    );
  }
  return friendList;
}
