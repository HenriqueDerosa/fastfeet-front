import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  margin: 27px 0;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: row;

    &:first-child {
      margin-right: 16px;
    }
  }
`
