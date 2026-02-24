const upload = document.getElementById("upload");
const sliderImage = document.getElementById("sliderImage");

let images = [];
let index = 0;

upload.addEventListener("change", () => {
    images = Array.from(upload.files).map(file =>
        URL.createObjectURL(file)
    );
    index = 0;
    if(images.length > 0){
        sliderImage.src = images[index];
    }
});

document.getElementById("next").onclick = () => {
    if(images.length === 0) return;
    index = (index + 1) % images.length;
    sliderImage.src = images[index];
};

document.getElementById("prev").onclick = () => {
    if(images.length === 0) return;
    index = (index - 1 + images.length) % images.length;
    sliderImage.src = images[index];
};

/* Auto slide */
setInterval(() => {
    if(images.length === 0) return;
    index = (index + 1) % images.length;
    sliderImage.src = images[index];
}, 3000);
