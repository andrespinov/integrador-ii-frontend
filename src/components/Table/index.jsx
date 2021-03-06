import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, withStyles } from '@material-ui/core'
import React from 'react'
import Loading from '../Loading'
import { LoadingContainer, NoDataContainer } from './styles'

const AppTable = ({ rows, columns, customProperties, loading }) => {
  return (
    <div>
      {loading ? (
        <LoadingContainer>
          <Loading color="primary" />
        </LoadingContainer>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <StyledTableCell key={index} align="center">{column.name}</StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    {columns.map((column, index) => customProperties[column.property] ? (
                      customProperties[column.property]({ item: row, key: index })
                    ) : (
                      <StyledTableCell key={index} align="center">{row[column.property]}</StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {Boolean(!rows.length && !loading) && (
            <NoDataContainer>
              <Typography variant='h8'>No hay datos</Typography>
            </NoDataContainer>
          )}
        </>
        )}
    </div>
  )
}

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  }
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

export default AppTable
