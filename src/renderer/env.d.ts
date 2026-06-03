interface Window {
  api: {
    selectRepo: () => Promise<string | null>
    checkAgentsMd: (repoPath: string) => Promise<boolean>
    saveRepo: (repoPath: string) => Promise<void>
    loadAllRepos: () => Promise<string[]>
  }
}
