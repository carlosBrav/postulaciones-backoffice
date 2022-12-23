import { ProjectService } from '@infra/services/project/project-provider'
import { ProjectUseCase, ProjectMapping } from '@domain/project'
import { httpClient } from '@main/factories/http-factory'

export const ProjectFactory: ProjectUseCase = new ProjectUseCase(
  new ProjectService(httpClient),
  new ProjectMapping()
)
