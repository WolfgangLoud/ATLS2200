
const endpoint = "https://dog.ceo/api/breeds/image/random";

const newImageBtn = document.querySelector("#js-new-image");

newImageBtn.addEventListener("click", getDogImage);

async function getDogImage() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error("Failed to fetch dog image");
        }

        const data = await response.json();
        const imageUrl = data.message;

        displayImage(imageUrl);
    } catch (error) {
        console.error(error);
        alert("Failed to fetch dog image. Please try again later");
    }
}

function displayImage(imageUrl) {
    const dogImageElement = document.querySelector("#js-dog-image");
    dogImageElement.src = imageUrl;
    dogImageElement.alt = "Random dog image";
}
