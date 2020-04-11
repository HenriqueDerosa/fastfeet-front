import React from 'react'
import PropTypes from 'prop-types'
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md'
import Button from '~/components/Button'
import colors from '~/styles/colors'

import { Container } from './styles'

const Header = ({ title, handleSave, backLink, saveCondition }) => (
  <Container>
    <h1>{title}</h1>
    <div>
      <Button
        background={colors.silver}
        to={backLink}
        Icon={MdKeyboardArrowLeft}
      >
        Voltar
      </Button>
      <Button onClick={handleSave} Icon={MdDone} disabled={!saveCondition}>
        Salvar
      </Button>
    </div>
  </Container>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  backLink: PropTypes.string.isRequired,
  saveCondition: PropTypes.bool,
}

Header.defaultProps = {
  saveCondition: true,
}

export default Header
