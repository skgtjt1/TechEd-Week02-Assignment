console.log("Test of JS");

//element to store image values

let bigimages = [
  {
    src: "value",
    alt: "value",
    width: "value",
    height: "value", //optional for CSS
  },

  {
    src: "value",
    alt: "value",
    width: "value",
    height: "value", //optional for CSS
  },
  {
    src: "value",
    alt: "value",
    width: "value",
    height: "value", //optional for CSS
  },
];

//stretch goal - add a carousel will need:
//global variable: need current image index for the big
//global variable to store the current img index for the big image
//let currentIndex = 0;

//each image in the array is an object

//now select the DOM elements that contain our images with a document method
//select the thumbnail-container
//Select the large-image-container

//function to create my thumbnail images - this will have one action

function createThumbnails() {
  //need a loop to create multiple images --> forEach could also use a classic for loop
  //
  thumbnailContainer.forEach((thumbnail) => {
    //A document method that creates a DOM element (img in this case)
    //Assign a value to the image attributes (eg. img.src = "value")
    //(optional, assign a class name to the img element .className property)  - helps with styling
    //append the new elements to the DOM using a document method (document.appendChild)
    //can add the eventlistener in this function for each image
  });
}

// createThumbnails(argument --> images)

function createLargeImage(parameter) {
  //problem: the images appear one after the other (innerHTML = "*emptyvalue*")
  //create an image element
  //add classname
  //set the src value
  //set the alt value
  //append the large image to the DOM
}
