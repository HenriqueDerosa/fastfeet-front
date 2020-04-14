import styled from 'styled-components'
import colors from '~/styles/colors'

export const Container = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  filter: blur(2);
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  margin: auto;
  background: white;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  width: 450px;
  font-size: 14px;
  line-height: 28px;
  color: ${colors.tundora};
`
