import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '~/styles/colors'

export default styled(Link)`
  font-weight: bold;
  color: ${props => (props.selected ? colors.tundora : colors.quickSilver)};

  &:not(first-child) {
    padding-right: 20px;
  }
`
