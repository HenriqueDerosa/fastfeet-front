import styled from 'styled-components'
import colors from '~/styles/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: transparent;

  svg {
    transition: fill 0.4s;
  }

  &:hover {
    > svg {
      fill: ${colors.tundora};
    }
  }
`
