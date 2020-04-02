import styled from 'styled-components'
import colors from '~/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  img {
    cursor: pointer;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #eee;

    &:hover {
      border: 1px solid ${colors.primary};
    }

    & ~ span {
      margin-left: 5px;
    }
  }
`
