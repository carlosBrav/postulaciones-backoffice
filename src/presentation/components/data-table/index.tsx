import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'
import EnhancedTableHead from './components/head-table'
import EnhancedTableToolbar from './components/toolbar-table'

type Props<T> = {
  rows: T[]
  rowsSelected: T[]
  setRowsSelected: (value: T[]) => void
  redirectEdit: () => void
  handleOnOpen: () => void
  handleEmail?: () => void
  handleEvaluations?: () => void
  idField: string
  fields: string[]
  headCells: any[]
  isEditable?: boolean
  isDeleteAble?: boolean
  isMailAble?: boolean
  isCheckList?: boolean
}

export default function EnhancedTable<T>({
  rows = [],
  rowsSelected = [],
  setRowsSelected = () => {},
  redirectEdit = () => {},
  handleOnOpen = () => {},
  handleEmail = () => {},
  handleEvaluations = () => {},
  idField = 'id',
  fields = [],
  headCells = [],
  isEditable = true,
  isDeleteAble = true,
  isMailAble = false,
  isCheckList = false
}: Props<T>) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(15)

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = [...rows]
      setRowsSelected(newSelected)
      return
    }
    setRowsSelected([] as T[])
  }

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const filterList = rowsSelected.filter(
      (data: any) => data[`${idField}`] === id
    )
    if (filterList.length > 0) {
      //se encuentra seleccionado, se elimina
      setRowsSelected([
        ...rowsSelected.filter((data: any) => data[`${idField}`] !== id)
      ])
    } else {
      //no está seleccionado, se agrega
      setRowsSelected([
        ...rowsSelected,
        rows.find((data: any) => data[`${idField}`] === id)
      ] as T[])
    }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (id: string) =>
    rowsSelected.filter((data: any) => data[`${idField}`] === id).length > 0

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <Box sx={{ width: '100%', marginTop: '20px' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar
          redirectEdit={redirectEdit}
          numSelected={rowsSelected.length}
          handleOnOpen={handleOnOpen}
          isEditable={isEditable}
          isDeleteAble={isDeleteAble}
          isCheckList={isCheckList}
          isMailAble={isMailAble}
          handleEvaluations={handleEvaluations}
          handleEmail={handleEmail}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'small'}
          >
            <EnhancedTableHead
              numSelected={rowsSelected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: number) => {
                  const isItemSelected = isSelected(row[`${idField}`])
                  const labelId = `enhanced-table-checkbox-${index}`

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row[`${idField}`])}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row[`${idField}`]}
                      selected={isItemSelected}
                      sx={{
                        '&.MuiTableRow-root:hover': {
                          cursor: 'pointer'
                        }
                      }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId
                          }}
                          sx={{
                            '&.Mui-checked': {
                              color: '#1A5EAF'
                            }
                          }}
                        />
                      </TableCell>
                      {fields.map((val, index) => (
                        <TableCell key={index} align="left">
                          {row[`${val}`]}
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 20, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página"
        />
      </Paper>
    </Box>
  )
}
