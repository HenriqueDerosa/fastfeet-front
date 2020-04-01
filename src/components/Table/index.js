import React from 'react'
import PropTypes from 'prop-types'
import TableContainer from './styles'

const Table = ({ columnNames, row }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {columnNames.map(name => (
            <th key={name}>{name}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </TableContainer>
  )
}

Table.propTypes = {
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  row: PropTypes.node.isRequired,
}

export default Table
