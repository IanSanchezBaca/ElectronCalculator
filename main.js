// Ian Sanchez Baca
// Calculator app
// main.js
// use this only for electron

const { app, BrowserWindow } = require('electron')

// we are importing two Electron modules with CommonJS module syntax:
// app, which controls your application's event lifecycle.
// BrowserWindow, which creates and manages app windows.

const createWindow = () => { //  loads your web page into a new BrowserWindow instance
  const win = new BrowserWindow({
    width: 800, // x
    height: 600, // y
    resizable: false,
    scrollbars: 'none',
  });
  
  win.center(); // ensures the window opens centered
  
  win.loadFile('index.html');

  win.setResizable(false);
}

app.whenReady().then(() => {
  createWindow()
})
// In Electron, BrowserWindows can only be created after the app module's ready event is fired. You can wait for this event by using the app.whenReady() API and calling createWindow() once its promise is fulfilled.


