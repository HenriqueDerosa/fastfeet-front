import React from 'react'
import PropTypes from 'prop-types'
import TableContainer from './styles'

const Table = ({ columnNames, data }) => {
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
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td> {item.id} </td>
            <td> {item.recipient} </td>
            <td> {item.deliveryman} </td>
            <td> {item.city} </td>
            <td> {item.state} </td>
            <td> {item.status} </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  )
}

Table.propTypes = {
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      recipient: PropTypes.string,
      deliveryman: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
}

export default Table
