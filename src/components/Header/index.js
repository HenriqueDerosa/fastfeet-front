import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import logo from '~/assets/logo.png'
import { Container, Content, Profile } from './styles'
import { signOut } from '~/store/modules/auth/actions'

export default function Header() {
  const dispatch = useDispatch()
  const profile = useSelector(state => state.user.profile)

  const handleSignOut = useCallback(() => {
    dispatch(signOut())
  }, [dispatch])

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/">ENCOMENDAS</Link>
          <Link to="/">ENTREGADORES</Link>
          <Link to="/">DESTINATÁRIOS</Link>
          <Link to="/">PROBLEMAS</Link>
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
