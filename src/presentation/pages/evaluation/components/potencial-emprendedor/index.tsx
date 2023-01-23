
import { Box, Button, Grid } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { ParticipantEvaluationSec } from '@domain/project/models/participant-evaluation-sec'

type Props = {
  setStatusEM: (status: boolean) => void
  statusEM: boolean
  dscEstado: string
  evalSec: ParticipantEvaluationSec[]
}

function PotencialEmprendedor({
  setStatusEM,
  statusEM,
  dscEstado,
  evalSec
}: Props) {
  
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="15px"
        >
          <Box maxWidth="200px">
            <SwitchComponent
              onChange={setStatusEM}
              value={statusEM}
              label="Completar Prueba"
            />
          </Box>
          <Box maxWidth="200px">
            <Button variant="outlined" color="success">
              {dscEstado}
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {evalSec && evalSec.length > 0 && (
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell
                    align="center"
                    style={{ color: '#572364', fontWeight: 'bold' }}
                  >
                    PUNTUACION ORIGINAL
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: '#572364', fontWeight: 'bold' }}
                  >
                    FACTOR DE CORRECCION
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ color: '#572364', fontWeight: 'bold' }}
                  >
                    TOTAL CORREGIDO
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {evalSec.map((row: ParticipantEvaluationSec) => (
                  <TableRow
                    key={row.idSeccion}
                    sx={{ 'td, th': { border: 0 } }}
                  >
                    <TableCell style={{ color: '#572364' }} align="left">
                      {row.dscSeccion}
                    </TableCell>
                    <TableCell align="center">{row.puntaje+row.factor}</TableCell>
                    <TableCell align="center">{row.correccion}</TableCell>
                    <TableCell align="center">
                      {row.score}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  )
}

export default PotencialEmprendedor
