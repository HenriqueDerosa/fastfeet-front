import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Notifications from '~/components/Notifications'

import logo from '~/assets/logo.png'
import { Container, Content, Profile } from './styles'

export default function Header() {
  const profile = useSelector(state => state.user.profile)

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
            <Link to="/profile">sair do sistema</Link>
          </div>
        </Profile>
      </Content>
    </Container>
  )
}
