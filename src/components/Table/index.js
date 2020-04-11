import React from 'react'
import PropTypes from 'prop-types'
import TableContainer from './styles'

const Table = ({ columnNames, row, empty }) => {
  if (empty) {
    return (
      <p>
        Nenhuma informação disponível no momento
        <br />
        Volte mais tarde
      </p>
    )
  }

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
  empty: PropTypes.bool,
}

Table.defaultProps = {
  empty: false,
}

export default Table
