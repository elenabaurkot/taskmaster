import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  selectRepo: (): Promise<string | null> => ipcRenderer.invoke('repo:select'),
  checkAgentsMd: (repoPath: string): Promise<boolean> => ipcRenderer.invoke('repo:check-agents-md', repoPath),
  saveRepo: (repoPath: string): Promise<void> => ipcRenderer.invoke('repo:save', repoPath),
  loadAllRepos: (): Promise<string[]> => ipcRenderer.invoke('repo:load-all')
})
