/* Toolbar and sheet layout styling */
.toolbar {
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 18px;
  border-bottom: 1px solid #ddd;
}

.sheet-container {
  overflow: auto;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.sheet-content {
  width: 90%;
  border-collapse: collapse;
}

.sheet-content td, .sheet-content th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.tabs {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  display: flex;
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
}

.tab {
  padding: 10px 15px;
  cursor: pointer;
  border-right: 1px solid #ddd;
}

.tab.active {
  background-color: #fff;
  font-weight: bold;
}
