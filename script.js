const wrapper = document.querySelector(".wrapper"),
      qrInput = wrapper.querySelector(".form input"),
      generateBtn = wrapper.querySelector(".form button"),
      qrImg = wrapper.querySelector(".qr-code img");

// Store the previous input value to avoid unnecessary QR generation
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim(); // for white space
    //validate input prevent same qr grn.
    if (!qrValue || preValue === qrValue) return;

    preValue = qrValue; // Update previous value
    generateBtn.innerText = "Generating QR Code..."; // Update button text

    //QR code image source using the API
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrValue)}`;

//load of image
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active"); 
        generateBtn.innerText = "Generate QR Code"; 
    });
});
//event listner for reset ui input cleared
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = ""; // Reset previous value
    }
});
