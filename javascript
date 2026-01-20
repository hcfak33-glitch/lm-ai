async function uploadFile(type) {
  const fileInput = document.getElementById("fileInput");
  const status = document.getElementById("status");
  const downloadLink = document.getElementById("downloadLink");

  if (!fileInput.files.length) {
    alert("ফাইল নির্বাচন করুন");
    return;
  }

  status.innerText = "Processing...";
  downloadLink.style.display = "none";

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  formData.append("type", type);

  try {
    const res = await fetch("/api/process", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    downloadLink.href = data.downloadUrl;
    downloadLink.style.display = "block";
    downloadLink.innerText = "Download Result";
    status.innerText = "Done ✅";
  } catch (err) {
    status.innerText = "Processing failed ❌";
  }
}
