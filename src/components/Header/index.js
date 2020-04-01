import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Link from '~/components/Link'

import logo from '~/assets/logo.png'
import { Container, Content, Profile } from './styles'
import { signOut } from '~/store/modules/auth/actions'
import { URL } from '~/utils/constants'

export default function Header() {
  const history = useHistory()
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)
  const current = useCallback(to => history.location.pathname === to, [
    history.location.pathname,
  ])

  const handleSignOut = useCallback(() => {
    dispatch(signOut())
  }, [dispatch])

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to={URL.ORDERS} selected={current(URL.ORDERS)}>
            ENCOMENDAS
          </Link>
          <Link to={URL.DELIVERYMEN} selected={current(URL.DELIVERYMEN)}>
            ENTREGADORES
          </Link>
          <Link to={URL.RECIPIENTS} selected={current(URL.RECIPIENTS)}>
            DESTINATÁRIOS
          </Link>
          <Link to={URL.PROBLEMS} selected={current(URL.PROBLEMS)}>
            PROBLEMAS
          </Link>
        </nav>

        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </div>
        </Profile>
      </Content>
    </Container>
  )
}
