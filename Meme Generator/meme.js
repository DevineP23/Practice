const formElement = document.querySelector("form");
const chooseImage = document.getElementsByClassName("imagefile")
const topText = document.getElementsByClassName("topText")
const bottomText = document.getElementsByClassName("bottomText")


chooseImage.addEventListener("change", () => {
    const imageDataURL = URL.createObjectURL(chooseImage.files[0]);
    image = new Image();
    image.src = imageDataURL;
  });


formElement.addEventListener("submit", function(event){
  event.preventDefault();
  const memeform= document.createElement("div");
  const topInput= document.createElement("div");
  const bottomInput= document.createElement("div");
  
});