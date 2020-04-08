import styled from 'styled-components'
import colors from '~/styles/colors'

export const Wrapper = styled.div`
  position: relative;
`
export const Container = styled.div`
  position: absolute;
  top: 10px;
  right: -60px;
  width: 150px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  text-align: left;

  padding: 15px 12px;
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0px 0px 2px #00000026;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    top: 0;
    left: 50%;
    border: 0;
    width: 10px;
    height: 10px;
    background: ${colors.white};
    box-shadow: -1px -1px 2px #0000001a;
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  outline: 0;
  padding: 6px 0;
  font-size: 16px;
  font-weight: normal;
  color: ${colors.quickSilver};
  border: 0;
  transition: background 0.2s;

  svg {
    margin-right: 12px;
  }

  &:not(:first-child) {
    border-top: 1px solid ${colors.selago};
  }

  &:hover {
    background: ${colors.whiteLilac};
  }
`
