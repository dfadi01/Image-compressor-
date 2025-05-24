function compressImage() {
  const fileInput = document.getElementById("upload");
  const file = fileInput.files[0];
  if (!file) return alert("Please select an image");

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    const img = new Image();
    img.src = e.target.result;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = 0.5; // reduce to 50%
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const compressed = canvas.toDataURL("image/jpeg", 0.7);
      document.getElementById("result").innerHTML =
        `<a href="${compressed}" download="compressed.jpg">Download Compressed Image</a><br><img src="${compressed}" width="200" />`;
    };
  };
}
