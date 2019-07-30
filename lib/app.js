const { app, BrowserWindow } = require("electron");

function createWindow() {

    const browserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: "InvoiceIt"
    });
    browserWindow.loadFile("./templates/app/index.html");

}

app.on('ready', createWindow);
