import styled from 'styled-components'
import colors from '~/styles/colors'

export const Container = styled.div`
  img {
    cursor: pointer;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #eee;

    &:hover {
      border: 1px solid ${colors.primary};
    }
  }
`
