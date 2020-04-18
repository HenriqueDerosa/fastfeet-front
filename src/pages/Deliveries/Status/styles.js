import styled from 'styled-components'
import { transparentize } from 'polished'

export const Container = styled.div`
  padding: 4px 12px;
  max-width: 140px;
  border-radius: 12px;
  background: ${props => transparentize(0.82, `${props.color}`)};
  color: ${props => props.color};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;

  span::before {
    content: '';
    position: relative;
    padding: 0;
    margin: 0 6px 0 0;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-flex;
    background: ${props => props.color};
  }
`
