function newImage(local) {
  let image = document.createElement("img");
  image.src = local;
  document.body.append(image);
  return image;
}

function move(image) {
  image.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    image.style.left = left + "px";
    image.style.bottom = bottom + "px";
  }
  return {
    to: moveToCoordinates,
  };
}

move(newImage("assets/green-character.gif")).to(100, 100);
move(newImage("assets/pine-tree.png")).to(450, 200);
move(newImage("assets/tree.png")).to(200, 300);
move(newImage("assets/pillar.png")).to(350, 100);
move(newImage("assets/crate.png")).to(150, 200);
move(newImage("assets/well.png")).to(500, 425);

function newItem(local) {
  let items = newImage(local);
  items.addEventListener("dblclick", function () {
    items.remove();
    let inventoryItem = document.createElement("img");
    inventoryItem.src = local;
    inventory.append(inventoryItem);
  });
  return items;
}
move(newItem("assets/sword.png")).to(500, 405);
move(newItem("assets/sheild.png")).to(165, 185);
move(newItem("assets/staff.png")).to(600, 100);

let inventory = document.createElement("div");

function makeInventory() {
  inventory.style.position = "fixed";
  inventory.style.bottom = "0px";
  inventory.style.left = "0px";
  inventory.style.width = "100%";
  inventory.style.height = "100px";
  inventory.style.display = "flex";
  inventory.style.flexDirection = "row";
  inventory.style.alignItems = "center";
  inventory.style.justifyContent = "space-evenly";
  inventory.style.border = "2px solid black";
  inventory.style.backgroundColor = "brown";
  document.body.append(inventory);
}

makeInventory();
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
