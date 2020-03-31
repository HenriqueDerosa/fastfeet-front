import styled from 'styled-components'
import { darken } from 'polished'

export default styled.table`
  border-collapse: separate;
  border-spacing: 0 20px;
  border-right: hidden;
  text-align: left;

  th,
  td {
    min-width: 40px;
    padding: 0 20px;
  }

  tbody {
    > tr {
      transition: background 0.1s;

      height: 64px;

      background: white;

      > td:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      > td:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }

      &:hover {
        background: ${darken(0.01, 'white')};
      }
    }
  }
`