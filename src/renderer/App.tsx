import { useEffect, useState } from 'react'
import RepoSetup from './pages/RepoSetup'
import Onboarding from './pages/Onboarding'
import TaskList from './pages/TaskList'

type View = 'repo-setup' | 'onboarding' | 'task-list'
type Theme = 'light' | 'dark'

function App(): JSX.Element {
  const [view, setView] = useState<View>('repo-setup')
  const [repoPath, setRepoPath] = useState<string>('')
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) ?? 'light'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme(): void {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  function handleRepoSelected(path: string, hasAgentsMd: boolean): void {
    setRepoPath(path)
    setView(hasAgentsMd ? 'task-list' : 'onboarding')
  }

  function handleChangeRepo(): void {
    setView('repo-setup')
  }

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀'}
      </button>

      {view === 'repo-setup' && <RepoSetup onRepoSelected={handleRepoSelected} />}
      {view === 'onboarding' && <Onboarding repoPath={repoPath} onChangeRepo={handleChangeRepo} />}
      {view === 'task-list' && <TaskList repoPath={repoPath} onChangeRepo={handleChangeRepo} />}
    </>
  )
}

export default App
