const { contextBridge, ipcRenderer } = require('electron');

//  On expose proprement les fonctions dans window.electronAPI
contextBridge.exposeInMainWorld('electronAPI', {
  sendFragment: (fragment) => ipcRenderer.send('add-fragment', fragment),
  getFragments: () => ipcRenderer.invoke('get-fragments'),
  deleteFragment: (id) => ipcRenderer.send('delete-fragment', id),

});

// Juste pour verifier que preload marche
console.log(' preload.js chargé et exécuté');
