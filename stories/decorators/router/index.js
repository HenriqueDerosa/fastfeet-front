import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router-dom'
import history from '~/services/history'
import GlobalStyle from '~/styles/global'

const StyledRouter = ({ children }) => (
  <Router history={history}>
    <GlobalStyle />
    {children}
  </Router>
)

StyledRouter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StyledRouter
