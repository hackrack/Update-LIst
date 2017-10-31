function update() {
  var id = window.prompt("Please choose your id");
  var newListItem = window.prompt("Please type your new Item name");
  if(id !== "one" && id !== "two" && id !== "three" && id !== "four") {
    document.getElementById("one").innerHTML = newListItem;
  } else {
    document.getElementById(id).innerHTML = newListItem;
  }
}
update();
