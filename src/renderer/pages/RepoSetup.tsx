import { useEffect, useState } from 'react'

interface Props {
  onRepoSelected: (repoPath: string, hasAgentsMd: boolean) => void
}

function repoName(repoPath: string): string {
  return repoPath.split('/').pop() ?? repoPath
}

function RepoSetup({ onRepoSelected }: Props): JSX.Element {
  const [repos, setRepos] = useState<string[]>([])

  useEffect(() => {
    window.api.loadAllRepos().then(setRepos)
  }, [])

  async function openRepo(repoPath: string): Promise<void> {
    const hasAgentsMd = await window.api.checkAgentsMd(repoPath)
    await window.api.saveRepo(repoPath)
    onRepoSelected(repoPath, hasAgentsMd)
  }

  async function handleAddProject(): Promise<void> {
    const repoPath = await window.api.selectRepo()
    if (!repoPath) return
    await openRepo(repoPath)
  }

  return (
    <div className="repo-setup">
      <h1 className="repo-setup__title">TaskMaster</h1>

      {repos.length === 0 ? (
        <p className="repo-setup__empty">Select a project folder to get started.</p>
      ) : (
        <div className="repo-setup__list">
          {repos.map((repoPath) => (
            <button key={repoPath} className="repo-item" onClick={() => openRepo(repoPath)}>
              <div className="repo-item__name">{repoName(repoPath)}</div>
              <div className="repo-item__path">{repoPath}</div>
            </button>
          ))}
        </div>
      )}

      <button className="btn" onClick={handleAddProject}>Add project</button>
    </div>
  )
}

export default RepoSetup
