let inventory = document.createElement("div");

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
