import styled from 'styled-components'
import { lighten } from 'polished'
import colors from '~/styles/colors'

export default styled.div.attrs(props => ({
  background: props.disabled ? colors.alto : props.background || '#7d40e7',
}))`
  pointer-events: ${props => props.disabled && 'none'};
  color: white;
  max-width: 142px;

  a {
    text-decoration: none;

    &:active,
    &:visited,
    &:focus {
      color: inherit;
    }
  }

  button,
  a {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    height: 36px;
    padding: 8px 16px;
    margin: 0;
    border: 0;
    background: ${props => props.background} 0% 0% no-repeat padding-box;
    border-radius: 4px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    transition: background 0.2s;

    &:hover {
      background: ${props => !props.disabled && lighten(0.05, '#7d40e7')};
    }

    svg {
      margin-right: 4px;
    }
  }
`
