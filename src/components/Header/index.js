import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from '~/components/Link'

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
          <Link to="/encomendas" selected>
            ENCOMENDAS
          </Link>
          <Link to="/entregadores">ENTREGADORES</Link>
          <Link to="/destinatarios">DESTINATÁRIOS</Link>
          <Link to="/problemas">PROBLEMAS</Link>
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
