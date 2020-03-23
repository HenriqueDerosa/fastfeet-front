import styled from 'styled-components'
import { darken } from 'polished'

export default styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  min-width: 237px;
  padding: 10px 16px;
  margin: 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dddddd;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#FFFFFF')};
  }

  input {
    font-size: 14px;
    border: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    padding: 0 4px;
  }
`
