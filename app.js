const imageList = [
  {
    image: "https://unsplash.com/photos/KVa4WFUiQk4/download?force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/KVa4WFUiQk4/download?force=true&w=640",
    alt: "City skyline",
  },

  {
    image: "https://unsplash.com/photos/xnTcEJm5IZw/download?force=true&w=1920",
    thumbnail:
      "https://unsplash.com/photos/xnTcEJm5IZw/download?force=true&w=640",
    alt: "Concrete rectangular architecture",
  },

  {
    image: "https://unsplash.com/photos/KqHGlo04ELc/download?force=true&w=1920",
    thumbnail:
      "https://unsplash.com/photos/KqHGlo04ELc/download?force=true&w=640",
    alt: "Sunset behind a mountain range",
  },

  {
    image: "https://unsplash.com/photos/gBJiI-qAtVU/download?force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/gBJiI-qAtVU/download?force=true&w=640",
    alt: "A green parrot grooming itself",
  },

  {
    image: "https://unsplash.com/photos/4HDQn_vvTZA/download?force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/4HDQn_vvTZA/download?force=true&w=640",
    alt: "Abstract shapes clustered together as in a carpet, somewhat pointed with ridges from the top point down",
  },

  {
    image: "https://unsplash.com/photos/8T0D_pT2Sbs/download?force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/8T0D_pT2Sbs/download?force=true&w=640",
    alt: "macro image off white flowers on a sunny day",
  },

  {
    image:
      "https://unsplash.com/photos/xOBxkuvADB8/download?ixid=M3wxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE3MTcyNTQyOTV8&force=true&w=2400",
    thumbnail:
      "https://unsplash.com/photos/xOBxkuvADB8/download?ixid=M3wxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE3MTcyNTQyOTV8&force=true&w=640",
    alt: "A double-decker bus in London on a clear day",
  },
];

const thumbnailContainer = document.getElementById("thumbnail-container");
let thumbNailIndex = 0;
const bigImage = document.getElementById("large-image");
let imageIndex = 0;

//initial commits will inherit some code from the example site given, I will later modify and improve - going to try forEach instead
// function thumbnailImages() {
//   for (let image of imageList) {
//     let thumbImg = document.createElement("img");
//     thumbImg.setAttribute("src", image.thumbnail);
//     thumbImg.setAttribute("alt", image.alt);
//     thumbImg.setAttribute("tabindex", "0");
//     thumbnailContainer.appendChild(thumbImg);
//     //testing the click:
//     thumbImg.addEventListener("click", function () {
//       imageIndex = image;
//       generateMainImg();
//     });
//   }
// }

function thumbnailImages() {
  imageList.forEach((image, index) => {
    //forEach has a second paramter which represents the index of the current element of the array, therefor no need to increment with ++i etc
    let thumbImg = document.createElement("img");
    thumbImg.setAttribute("src", image.thumbnail);
    thumbImg.setAttribute("alt", image.alt);
    thumbImg.setAttribute("tabindex", "0");
    thumbnailContainer.appendChild(thumbImg);
    //testing the click:
    thumbImg.addEventListener("click", function () {
      imageIndex = index;
      generateMainImg();
    });
  });
}

function generateMainImg() {
  bigImage.setAttribute("src", imageList[imageIndex].image);
  bigImage.setAttribute("alt", imageList[imageIndex].alt);
  // description.textContent = imageList[imageIndex].alt;
}
thumbnailImages();

generateMainImg();
