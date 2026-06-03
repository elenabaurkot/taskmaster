interface Props {
  repoPath: string
  onChangeRepo: () => void
}

function Onboarding({ repoPath, onChangeRepo }: Props): JSX.Element {
  return (
    <div className="page">
      <h2 className="page__title">Set up your project</h2>
      <p className="page__subtitle">{repoPath}</p>
      <p className="page__placeholder">Onboarding chat coming soon.</p>
      <button className="btn" onClick={onChangeRepo}>Change project</button>
    </div>
  )
}

export default Onboarding
