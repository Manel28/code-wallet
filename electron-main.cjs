const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { LowSync, JSONFileSync } = require('lowdb');

// base de donnees fragments.json
const dbPath = path.join(app.getPath('userData'), 'fragments.json');
console.log("💾 DB PATH utilisé :", dbPath);

const adapter = new JSONFileSync(dbPath);
const db = new LowSync(adapter);
db.read();
db.data ||= { fragments: [] };
db.write();

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Chemin relatif 
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL('http://localhost:5173'); // Vite dev server
}

app.whenReady().then(() => {
  createWindow();

  // Canal IPC pour ajouter un fragment
  ipcMain.on('add-fragment', (event, fragment) => {
    console.log("📩 Fragment reçu :", fragment);
    db.read();
    db.data.fragments.push({
      id: Date.now(),
      ...fragment,
    });
    db.write();
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
