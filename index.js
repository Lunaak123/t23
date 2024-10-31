function uploadAndNavigate() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length === 0) {
      alert("Please select a file!");
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      const data = e.target.result;
      const encodedData = encodeURIComponent(btoa(data));
      window.location.href = `sheet.html?file=${encodedData}`;
    };
  
    reader.readAsBinaryString(file);
  }
  