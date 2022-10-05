const { app, BrowserWindow } = require("electron");
const { exec } = require("child_process");
const { url } = require("url");
const path = require("path");

require("./server.js");
let win;

function createWindow() {
  win = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.maximize();
  win.show();

  // win.webContents.openDevTools();
  win.loadURL("http://localhost:8000/");

  win.on("closed", function () {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform != "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (win != null) {
    createWindow();
  }
});
