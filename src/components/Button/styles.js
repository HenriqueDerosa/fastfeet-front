import styled from 'styled-components'
import { lighten } from 'polished'

export default styled.div`
  color: white;

  button,
  a {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    width: 142px;
    height: 36px;
    padding: 8px 16px;
    margin: 0;
    border: 0;
    background: #7d40e7 0% 0% no-repeat padding-box;
    border-radius: 4px;

    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.05, '#7d40e7')};
    }
  }

  a {
    text-decoration: none;

    &:active,
    &:visited,
    &:focus {
      color: inherit;
    }
  }
`
