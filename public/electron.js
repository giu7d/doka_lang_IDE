const path = require('path')
const isDev = require('electron-is-dev')
const { app, BrowserWindow } = require('electron')

const isProd = !isDev

function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (isProd) {
    win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    win.removeMenu()
  }

  if (isDev) {
    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools({ mode: 'detach' })
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
