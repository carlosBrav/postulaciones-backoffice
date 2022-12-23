import { ProjectRequest, ProjectResponse, ProjectUpdate } from '../models'
export interface ProjectRepository {
  getAll(): Promise<ProjectResponse[]>
  create(project: ProjectRequest): Promise<ProjectResponse>
  delete(projects: string[], idUsuMod: string): Promise<boolean>
  update(project: ProjectUpdate): Promise<boolean>
}
