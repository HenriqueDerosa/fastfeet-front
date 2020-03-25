import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Deliveries from '../pages/Deliveries'
import Deliverymen from '../pages/Deliverymen'
import Recipients from '../pages/Recipients'
import Problems from '../pages/Problems'
import Profile from '../pages/Profile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/encomendas" component={Deliveries} isPrivate />
      <Route path="/entregadores" component={Deliverymen} isPrivate />
      <Route path="/destinatarios" component={Recipients} isPrivate />
      <Route path="/problemas" component={Problems} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  )
}
