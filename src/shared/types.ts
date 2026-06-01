export type TaskStatus =
  | 'speccing'
  | 'in_progress'
  | 'needs_assistance'
  | 'ready_to_test'
  | 'ready_to_merge'

export interface Repo {
  id: number
  name: string
  path: string
  jiraProjectKey: string | null
  createdAt: string
}

export interface Task {
  id: number
  repoId: number
  title: string
  spec: string
  status: TaskStatus
  branchName: string
  worktreePath: string
  jiraIssueKey: string | null
  createdAt: string
  updatedAt: string
}
