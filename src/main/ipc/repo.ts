import { ipcMain, dialog } from 'electron'
import { existsSync } from 'fs'
import { join } from 'path'
import Store from 'electron-store'

interface StoreSchema {
  repos: string[]
}

const store = new Store<StoreSchema>({ defaults: { repos: [] } })

export function registerRepoHandlers(): void {
  ipcMain.handle('repo:select', async () => {
    const result = await dialog.showOpenDialog({
      properties: ['openDirectory'],
      title: 'Select your project folder'
    })
    if (result.canceled) return null
    return result.filePaths[0]
  })

  ipcMain.handle('repo:check-agents-md', (_event, repoPath: string) => {
    return existsSync(join(repoPath, 'AGENTS.md'))
  })

  ipcMain.handle('repo:load-all', () => {
    return store.get('repos')
  })

  ipcMain.handle('repo:save', (_event, repoPath: string) => {
    const repos = store.get('repos')
    // move to front if already exists, otherwise prepend
    const updated = [repoPath, ...repos.filter((r: string) => r !== repoPath)]
    store.set('repos', updated)
  })
}
