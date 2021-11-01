function newImage(local) {
  let image = document.createElement("img");
  image.src = local;
  document.body.append(image);
  return image;
}
