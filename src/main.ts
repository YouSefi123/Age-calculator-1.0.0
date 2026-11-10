import { app, BrowserWindow, ipcMain, Menu } from "electron";

import started from "electron-squirrel-startup";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// ======================================
// Create Main Window
// ======================================

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    center: true,
    show: false,

    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Show window after loading
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Load React application
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
}

// ======================================
// IPC Handlers
// ======================================

// ======================================
// Application Startup
// ======================================

if (started) {
  app.quit();
} else {
  app.whenReady().then(() => {

    // Remove application menu
    Menu.setApplicationMenu(null);

    // Create Window
    createWindow();

    // Re-create window on macOS activation
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
}

// ======================================
// Application Closing
// ======================================

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
