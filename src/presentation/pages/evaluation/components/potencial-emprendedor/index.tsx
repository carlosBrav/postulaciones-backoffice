import { ParticipantEvaluation } from '@domain/project'
import { Box, Button, Grid } from '@mui/material'
import { SwitchComponent } from '@presentation/components/switch-component/switch'
import React, { useContext, useEffect, useState } from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ParticipantEvaluationSec } from '@domain/project/models/participant-evaluation-sec'
import { ParameterManageContext } from '@presentation/pages/context/parameter-context'

type Props = {
  evaluation: ParticipantEvaluation
}

function PotencialEmprendedor({ evaluation }: Props) {
  const { statusEM, setStatusEM } = useContext(ParameterManageContext)
  const [evalSec, setEvalSec] = useState<ParticipantEvaluationSec[]>([])

  useEffect(() => {
    if (evaluation) {
      setEvalSec([...evaluation.listProyectoParticipanteEvalSec])
    }
  }, [evaluation])

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
              {evaluation ? evaluation.dscEstado : ''}
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
                    key={row.idEvaluacion}
                    sx={{ 'td, th': { border: 0 } }}
                  >
                    <TableCell style={{ color: '#572364' }} align="left">
                      {row.dscSeccion}
                    </TableCell>
                    <TableCell align="center">{row.score}</TableCell>
                    <TableCell align="center">{row.factor}</TableCell>
                    <TableCell align="center">
                      {row.score + row.factor}
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
