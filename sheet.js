function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  function displaySheet(sheetData) {
    const table = document.getElementById("sheetContent");
    table.innerHTML = "";
  
    sheetData.forEach((row) => {
      const rowElement = document.createElement("tr");
      row.forEach((cell) => {
        const cellElement = document.createElement("td");
        cellElement.textContent = cell !== undefined ? cell : "";
        rowElement.appendChild(cellElement);
      });
      table.appendChild(rowElement);
    });
  }
  
  function setupTabs(sheetNames, workbook) {
    const tabsContainer = document.getElementById("tabs");
    tabsContainer.innerHTML = "";
  
    sheetNames.forEach((sheetName, index) => {
      const tab = document.createElement("div");
      tab.textContent = sheetName;
      tab.className = "tab" + (index === 0 ? " active" : "");
      tab.onclick = function () {
        document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });
        displaySheet(sheetData);
      };
      tabsContainer.appendChild(tab);
    });
  }
  
  window.onload = function () {
    const encodedData = getQueryParam("file");
    if (!encodedData) {
      alert("No file data found!");
      return;
    }
  
    const binaryData = atob(decodeURIComponent(encodedData));
    const workbook = XLSX.read(binaryData, { type: "binary" });
  
    const sheetNames = workbook.SheetNames;
    const initialSheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]], { header: 1 });
    
    displaySheet(initialSheetData);
    setupTabs(sheetNames, workbook);
  };
  