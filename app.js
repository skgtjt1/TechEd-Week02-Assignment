const imageList = [
  {
    image: "https://unsplash.com/photos/KVa4WFUiQk4/download?force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/KVa4WFUiQk4/download?force=true&w=640",
    alt: "",
  },

  {
    image: "https://unsplash.com/photos/xnTcEJm5IZw/download?force=true&w=1920",
    thumbnail:
      "https://unsplash.com/photos/xnTcEJm5IZw/download?force=true&w=640",
    alt: "",
  },

  {
    image: "https://unsplash.com/photos/KqHGlo04ELc/download?force=true&w=1920",
    thumbnail:
      "https://unsplash.com/photos/KqHGlo04ELc/download?force=true&w=640",
    alt: "",
  },

  {
    image: "https://unsplash.com/photos/gBJiI-qAtVU/download?force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/gBJiI-qAtVU/download?force=true&w=640",
    alt: "",
  },

  {
    image: "https://unsplash.com/photos/4HDQn_vvTZA/download?force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/4HDQn_vvTZA/download?force=true&w=640",
    alt: "",
  },

  {
    image: "https://unsplash.com/photos/8T0D_pT2Sbs/download?force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/8T0D_pT2Sbs/download?force=true&w=640",
    alt: "",
  },

  {
    image:
      "https://unsplash.com/photos/xOBxkuvADB8/download?ixid=M3wxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE3MTcyNTQyOTV8&force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/xOBxkuvADB8/download?ixid=M3wxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE3MTcyNTQyOTV8&force=true&w=640",
    alt: "",
  },
];

let thumbnailContainer = document.querySelectorAll("thumbnail-container");
let thumbNailIndex = 0;
const bigImage = document.querySelectorAll("large-image-container");

//initial commits will inherit some code from the example site given, I will later modify and improve
function thumbnailImages() {
  for (let image of imageList) {
    let thumbImg = document.createElement("img");
    thumbImg.setAttribute("src", image.image);
    thumbImg.setAttribute("alt", image.alt);
    // thumbImg.setAttribute("tabindex", "0"); look into why this helps with tabbing
    thumbnailContainer.appendChild(thumbImg);
    //click later
  }
}

thumbnailImages();
