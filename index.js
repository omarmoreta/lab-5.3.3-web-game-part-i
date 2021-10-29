//Define a function for creating an element and adding position and placements
function newImage(item, elType, local, positionType, move1, move2) {
  item = document.createElement(elType);
  item.src = local;
  item.style.position = positionType;
  item.style.left = move1;
  item.style.bottom = move2;
  document.body.append(item);
  return item;
}

//newImage invoked with arguments for greenCharacter pineTree, tree, pillar, crate, and well
newImage(
  "greenCharacter",
  "img",
  "assets/green-character.gif",
  "fixed",
  "100px",
  "100px"
);
newImage("pineTree", "img", "assets/pine-tree.png", "fixed", "450px", "200px");
newImage("tree", "img", "assets/tree.png", "fixed", "200px", "300px");
newImage("pillar", "img", "assets/pillar.png", "fixed", "350px", "100px");
newImage("crate", "img", "assets/crate.png", "fixed", "150px", "200px");
newImage("well", "img", "assets/well.png", "fixed", "500px", "425px");

//Define a new function to create and remove item adding an event listener
function newItem(item, elType, local, positionType, move1, move2) {
  item = newImage(item, elType, local, positionType, move1, move2);

  item.addEventListener("dblclick", function () {
    item.remove();
  });
}

//newItem invoked with arguments for sword, shield, and staff
newItem("sword", "img", "assets/sword.png", "fixed", "500px", "405px");
newItem("shield", "img", "assets/sheild.png", "fixed", "165px", "185px");
newItem("staff", "img", "assets/staff.png", "fixed", "600px", "100px");

//Define a new function to top and bottom half with different images
// function scenery(item, elType, local, positionType, move1, move2) {
//   for (let i = 0; i < height; i++) {
//     for (let x = 0; x < width; x++) {
//         newImage(item, elType, local, positionType, move1*100px, move2*100px);
//     }
//   }
// }
// scenery("sky", "img" "assets/sky.png", "fixed", "window.innerWidth", "window.innerHeaight");
// scenery("grass", "img", "assets/grass.png", "fixed", "window.innerWidth", "window.innerHeight");
