interface Props {
  repoPath: string
  onChangeRepo: () => void
}

function TaskList({ repoPath, onChangeRepo }: Props): JSX.Element {
  return (
    <div className="page">
      <h2 className="page__title">Tasks</h2>
      <p className="page__subtitle">{repoPath}</p>
      <p className="page__placeholder">Task list coming soon.</p>
      <button className="btn" onClick={onChangeRepo}>Change project</button>
    </div>
  )
}

export default TaskList
