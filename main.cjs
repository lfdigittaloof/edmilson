const { app, BrowserWindow, shell } = require('electron');
const path = require('node:path');

// Nunca conceder acesso ao Node.js às páginas do sistema.
function createWindow() {
  const win = new BrowserWindow({
    width: 1360, height: 900, minWidth: 900, minHeight: 650,
    title: 'Edmilson Cell Premium',
    icon: path.join(__dirname, '..', 'logo-edmilson-cell.png'),
    webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: true }
  });
  win.loadFile(path.join(__dirname, '..', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => {
    // Recibos são gerados em janelas temporárias em branco para impressão.
    if (url === 'about:blank' || url === '') return { action: 'allow', overrideBrowserWindowOptions: {
      webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: true }
    }};
    if (/^https:\/\/wa\.me\//.test(url) || /^https:\/\/api\.whatsapp\.com\//.test(url)) {
      shell.openExternal(url); return { action: 'deny' };
    }
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) { event.preventDefault(); if (/^https:\/\/wa\.me\//.test(url)) shell.openExternal(url); }
  });
}
app.whenReady().then(() => {createWindow(); app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
