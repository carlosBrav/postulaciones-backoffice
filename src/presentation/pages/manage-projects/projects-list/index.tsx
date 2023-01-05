import React, { useEffect } from 'react'
import { ProjectRepository, ProjectResponse } from '@domain/project'
import useProjectList from '@presentation/pages/manage-projects/projects-list/hooks/use-project-list'
import { FullScreenLoader } from '@presentation/components/full-screen-loader/full-screen-loader'
import HeaderComponent from '@presentation/components/header'
import { Box } from '@mui/material'
import DataTable from '@presentation/components/data-table'
import { headCells } from '@presentation/pages/manage-projects/constants'
import ModalComponent from '@presentation/components/modal'

type Props = {
  repository: ProjectRepository
}

function ProjectsList({ repository }: Props) {
  const {
    listProjects,
    isLoadingProjects,
    goToCreate,
    goToEdit,
    projectsSelected,
    openDelete,
    setProjectsSelected,
    setOpenDelete,
    handleDeleteProject
  } = useProjectList(repository)

  return isLoadingProjects ? (
    <FullScreenLoader />
  ) : (
    <>
      <HeaderComponent
        title="Proyectos"
        onClick={goToCreate}
        titleButton="Agregar"
      />

      <Box width="100%" marginTop="30px">
        <DataTable<ProjectResponse>
          rows={listProjects as ProjectResponse[]}
          rowsSelected={projectsSelected}
          setRowsSelected={setProjectsSelected}
          redirectEdit={goToEdit}
          handleOnOpen={() => setOpenDelete(true)}
          idField="idProyecto"
          fields={['idProyecto', 'nombre', 'jefe', 'dscEstado']}
          headCells={headCells}
        />
      </Box>
      {openDelete && (
        <ModalComponent
          onAccept={handleDeleteProject}
          onCancel={() => setOpenDelete(false)}
          open={openDelete}
          title="Eliminar proyecto"
          description="¿Está seguro de querer eliminar(los)?"
        />
      )}
    </>
  )
}

export default ProjectsList
