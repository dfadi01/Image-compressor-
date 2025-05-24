function compressImage() {
  const fileInput = document.getElementById('imageInput');
  const canvas = document.getElementById('canvas');
  const downloadLink = document.getElementById('downloadLink');

  const file = fileInput.files[0];
  if (!file) return alert('Please select an image file.');

  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
      const scaleFactor = 0.5; // compress to 50%
      canvas.width = img.width * scaleFactor;
      canvas.height = img.height * scaleFactor;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
      downloadLink.href = compressedDataUrl;
      downloadLink.download = 'compressed.jpg';
      downloadLink.style.display = 'block';
      downloadLink.textContent = 'Download Compressed Image';
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}
