import styled from 'styled-components'
import { darken } from 'polished'

export default styled.table`
  border-collapse: separate;
  border-spacing: 0 20px;
  border-right: hidden;
  text-align: left;
  font-size: 16px;

  th {
    font-weight: bold;
    padding: 0 20px;

    &:last-child {
      padding: 0 10px;
    }
  }

  tbody {
    font-weight: normal;

    > tr {
      transition: background 0.1s;

      height: 57px;

      background: white;

      &:hover {
        background: ${darken(0.01, 'white')};
      }

      td {
        padding: 0 0 0 20px;

        &:first-child {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        &:last-child {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          width: 20px;
          align-self: center;
        }
      }
    }
  }
`
