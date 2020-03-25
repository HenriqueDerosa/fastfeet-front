import styled, { keyframes } from 'styled-components'
import colors from '~/styles/colors'

export const animationRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export default styled.div`
  margin: 20px auto;
  height: 70px;
  width: 70px;
  border: 2px solid ${colors.primary};
  border-left: 0;
  border-bottom: 0;
  border-radius: 50%;
  animation: 1s ${animationRotate} linear infinite;
`
