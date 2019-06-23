// this is the main process

// this is the bare minimum to begin and test setup

const { app, BrowserWindow } = require('electron');
const path = require('path');

// declare this variable globally so we can reference it
// so it will not be garbage collected
let mainWindow

// wait for the main process to be ready
app.on('ready', () => {
    // path to HTML file
    const htmlPath = path.join('src', 'index.html')

    // create a browser window
    mainWindow = new BrowserWindow()

    // load the HTML file
    mainWindow.loadFile(htmlPath)
})

