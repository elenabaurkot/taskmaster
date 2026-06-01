import { contextBridge } from 'electron'

// IPC channels will be exposed here as features are built.
// The renderer accesses them via window.api.
contextBridge.exposeInMainWorld('api', {})
